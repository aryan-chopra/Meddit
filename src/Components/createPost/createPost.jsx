
import React, { useState } from 'react';

const CreatePost = () => {
    const [darkMode, setDarkMode] = useState(
        window.matchMedia('(prefers-color-scheme: dark)').matches
    );

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    return (
        <div className={`min-h-screen flex flex-col items-center justify-center ${darkMode ? 'dark' : ''}`}>
            <div className="max-w-md w-full bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 mb-4">
                <h1 className="text-3xl font-semibold mb-4">Create Post</h1>
                <div className="flex flex-col mb-4">
                    <label htmlFor="community" className="text-lg mb-1">Community:</label>
                    <input type="text" id="community" className="border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="title" className="text-lg mb-1">Title:</label>
                    <input type="text" id="title" className="border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="content" className="text-lg mb-1">Content:</label>
                    <textarea id="content" rows="5" className="border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"></textarea>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none">
                    Post
                </button>
            </div>
            <button
                className={`bg-blue-500 text-white font-semibold py-2 px-4 rounded focus:outline-none ${darkMode ? 'dark:bg-gray-600' : ''}`}
                onClick={toggleDarkMode}
            >
                {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
        </div>
    );
};

export default CreatePost;


