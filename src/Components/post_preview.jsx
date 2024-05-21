import React from "react";

function PostCommunity({ imgSrc, name }) {
  return (
    <div className="post-community community-container">
      <img className="visible-post-community-image" src={imgSrc} />
      <p className="visible-post-community-name">{name}</p>
    </div>
  );
}

function PostContent({ title, content }) {
  return (
    <div className="visible-post-content-container">
      <p className="visible-post-title">{title}</p>
      <p className="visible-post-desciption">{content}</p>
    </div>
  );
}

function PostFooter() {
  return (
    <div className="visible-post-footer">
       <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        class="w- 6 h-6"
      >
        <path
          fill-rule="evenodd"
          d="M1.22 4.22a.75.75 0 0 1 1.06 0L6 7.94l2.761-2.762a.75.75 0 0 1 1.158.12 24.9 24.9 0 0 1 2.718 5.556l.729-1.261a.75.75 0 0 1 1.299.75l-1.591 2.755a.75.75 0 0 1-1.025.275l-2.756-1.591a.75.75 0 1 1 .75-1.3l1.097.634a23.417 23.417 0 0 0-1.984-4.211L6.53 9.53a.75.75 0 0 1-1.06 0L1.22 5.28a.75.75 0 0 1 0-1.06Z"
          clip-rule="evenodd"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        class="w-6 h-6"
      >
        <path
          fill-rule="evenodd"
          d="M9.808 4.057a.75.75 0 0 1 .92-.527l3.116.849a.75.75 0 0 1 .528.915l-.823 3.121a.75.75 0 0 1-1.45-.382l.337-1.281a23.484 23.484 0 0 0-3.609 3.056.75.75 0 0 1-1.07.01L6 8.06l-3.72 3.72a.75.75 0 1 1-1.06-1.061l4.25-4.25a.75.75 0 0 1 1.06 0l1.756 1.755a25.015 25.015 0 0 1 3.508-2.85l-1.46-.398a.75.75 0 0 1-.526-.92Z"
          clip-rule="evenodd"
          className="hover:fill-green-300"
        />
      </svg>
     
    </div>
  );
}

export default function Post({
  communityImage,
  communityName,
  postTitle,
  postContent,
}) {
  return (
    <div className="visible-post">
      <PostCommunity imgSrc={communityImage} name={communityName} />
      <PostContent title={postTitle} content={postContent} />
      <PostFooter />
    </div>
  );
}
 