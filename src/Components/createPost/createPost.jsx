import React, { useState, useEffect } from 'react';
import { db, storage } from '../../firebaseConfig'; // Import Firebase configuration
import { collection, addDoc } from 'firebase/firestore'; // Import Firestore functions
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Import Storage functions

const CreatePost = () => {
  // State variables to manage form inputs and theme
  const [community, setCommunity] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [theme, setTheme] = useState(getPreferredTheme());

  // Function to detect preferred system theme
  function getPreferredTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  // Update theme state based on system theme change
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      setTheme(mediaQuery.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  // Handle image file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = null;
      if (image) {
        const imageRef = ref(storage, `images/${image.name}`);
        await uploadBytes(imageRef, image); // Upload image to Firebase Storage
        imageUrl = await getDownloadURL(imageRef); // Get the image URL
      }

      // Create a new document in the "posts" collection in Firestore
      const docRef = await addDoc(collection(db, 'posts'), {
        community,
        title,
        content,
        imageUrl,
      });

      console.log('Post created with ID:', docRef.id);

      // Clear form fields after successful submission
      setCommunity('');
      setTitle('');
      setContent('');
      setImage(null);

      alert('Post created successfully!');
    } catch (error) {
      console.error('Error creating post:', error);
      alert('An error occurred while creating the post.');
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} text-gray-800 dark:text-white flex justify-center items-center`}>
      <div className="container mx-auto py-8 flex-col justify-center">
        <div className='flex justify-center'>
        <img
                className="w-8 h-8 mr-2 text-center"
                src="../public/resources/Screenshot 2024-05-03 181543.png"
                alt="logo"
              />
        <h1 className="text-2xl font-bold mb-4 text-center">Create Post</h1>
        </div>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="community" className="block mb-2">Community:</label>
            <input
              type="text"
              id="community"
              value={community}
              onChange={(e) => setCommunity(e.target.value)}
              className="w-full border rounded py-2 px-3"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="title" className="block mb-2">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded py-2 px-3"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block mb-2">Content:</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border rounded py-2 px-3"
              rows="5"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block mb-2">Image:</label>
            <input
              type="file"
              id="image"
              onChange={handleImageChange}
              className="w-full border rounded py-2 px-3"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
