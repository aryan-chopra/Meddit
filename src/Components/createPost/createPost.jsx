import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CommunityPostForm = () => {
  const [community, setCommunity] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [communeData, setCommuneData] = useState([]);

  const navigate = useNavigate();
  
  const handlePost = (e) => {
    e.preventDefault();
    // Handle the post submission logic here
    console.log({ community, title, content });
    let obj = {
      commImg: 'https://i.pinimg.com/564x/92/24/54/922454678fe34137ba14380c1726c81b.jpg',
      commName: `${community}`,
      commTitle: `${title}`,
      commContent: `${content}`,
      commStats: '15K',
      commPostCount: 23,
      commComments: [
        {
          username: 'MigraineSufferer123',
          timeOfPost: '2 days ago',
          comment: 'I can relate to your struggles with chronic migraines. It can be incredibly frustrating trying to find effective treatments. Have you tried keeping a migraine diary to track triggers? That might help identify patterns.'
        },
        {
          username: 'PainFreeLife',
          timeOfPost: '1 day ago',
          comment: 'I m sorry to hear that you re dealing with chronic migraines. Have you considered seeing a headache specialist? They might be able to offer more targeted treatment options.'
        },
        {
          username: 'WellnessWarrior',
          timeOfPost: '1 day ago',
          comment: 'Sending you positive vibes! Chronic migraines can be tough to manage, but you re not alone in this journey.'
        },
        {
          username: 'MigraineSupportGroup',
          timeOfPost: '1 day ago',
          comment: 'I recommend exploring holistic approaches like acupuncture or meditation. They ve helped me find some relief from chronic migraines.'
        },
        {
          username: 'HealthJourney2023',
          timeOfPost: '6 hours ago',
          comment: 'Stay strong! Dealing with chronic migraines is tough, but remember to prioritize self-care and listen to your body.'
        }
      ]
    }
    const commune = JSON.parse(localStorage.getItem("communeData"));
    commune.push(obj);
    localStorage.setItem("communeData", JSON.stringify(commune));
    navigate('/home');
  };
  useEffect(() => {
    const commune = JSON.parse(localStorage.getItem("communeData"));
    if(commune){
      setCommuneData(commune);
    }
  },[])

  return (
    <div className="main-container w-full h-screen outline-offset-0 flex items-center justify-center">
      <div className="w-[40rem] h-[30rem] mx-auto p-6 bg-white rounded-lg shadow-lg ">
      <h2 className="text-2xl font-bold mb-4 text-center">Create Post</h2>
      <form onSubmit={handlePost} className="space-y-4">
        <div>
          <label htmlFor="community" className="block text-sm font-medium text-gray-700">
            Choose Community
          </label>
          <select
            id="community"
            value={community}
            onChange={(e) => setCommunity(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="" disabled>
              Select a community
            </option>
            <option value="community1">Heart Diseases</option>
            <option value="community2">Chronological Disorder</option>
            <option value="community3">Mental Health</option>
            <option value="community4">Depressed Community</option>
          </select>
        </div>
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter the title"
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[var(--primary-100)] focus:border-[var(--primary-100)] sm:text-sm"
            rows="5"
            placeholder="Write your post content here"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className=" w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-black bg-[var(--primary-100)] hover:bg-[var(--primary-100)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-100)]"
          >
            Post
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default CommunityPostForm;
