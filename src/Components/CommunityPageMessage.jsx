import React from "react";

function CommunityPageMessage({commName, commImg}) {
  return (
    <div className="main-container mx-5 my-5 p-4 border border-white rounded-xl bg-white">
      <div className="header flex flex-row justify-between">
        <div className="leftSide-header flex flex-row gap-2 items-center">
          <img
            src={commImg}
            srcset=""
            sizes=""
            alt="u/kethryvis avatar"
            className="w-[15px] h-[15px]"
          />
          <p className="text-sm">{commName}</p>
          <p className="text-xs">2years ago</p>
        </div>
        <div className="rightSide-header flex flex-row gap-1 flex-wrap">
          <img
            width="15"
            height="10"
            src="https://img.icons8.com/color/48/pin.png"
            alt="pin"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
            />
          </svg>

          <img
            width="15"
            height="10"
            src="https://img.icons8.com/ios-filled/50/ellipsis.png"
            alt="ellipsis"
          />
        </div>
      </div>
      <div className="base">
        <p className="text-lg font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ullam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
          nostrum quisquam velit, omnis dignissimos nobis nam perferendis
          veritatis asperiores saepe impedit architecto animi tempora eum
          inventore recusandae possimus aperiam, eos accusamus iste! Natus
          libero molestias consectetur repellendus deleniti explicabo possimus?
        </p>
      </div>
      <div className="footer flex flex-row gap-3">
        <span className="up-down flex flex-row gap-1 bg-white justify-center items-center rounded-2xl p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="w-4 h-4"
          >
            <path
              fill-rule="evenodd"
              d="M9.808 4.057a.75.75 0 0 1 .92-.527l3.116.849a.75.75 0 0 1 .528.915l-.823 3.121a.75.75 0 0 1-1.45-.382l.337-1.281a23.484 23.484 0 0 0-3.609 3.056.75.75 0 0 1-1.07.01L6 8.06l-3.72 3.72a.75.75 0 1 1-1.06-1.061l4.25-4.25a.75.75 0 0 1 1.06 0l1.756 1.755a25.015 25.015 0 0 1 3.508-2.85l-1.46-.398a.75.75 0 0 1-.526-.92Z"
              clip-rule="evenodd"
              className="hover:fill-green-300"
            />
          </svg>

          <span>
            <p className="text-xs">17k</p>
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="w-4 h-4"
          >
            <path
              fill-rule="evenodd"
              d="M1.22 4.22a.75.75 0 0 1 1.06 0L6 7.94l2.761-2.762a.75.75 0 0 1 1.158.12 24.9 24.9 0 0 1 2.718 5.556l.729-1.261a.75.75 0 0 1 1.299.75l-1.591 2.755a.75.75 0 0 1-1.025.275l-2.756-1.591a.75.75 0 1 1 .75-1.3l1.097.634a23.417 23.417 0 0 0-1.984-4.211L6.53 9.53a.75.75 0 0 1-1.06 0L1.22 5.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
        <button className="bg-white flex flex-row justify-evenly items-center w-12 rounded-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5 hover:fill-green-300"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>

          <p className="text-xs">2</p>
        </button>
        <button className="bg-white flex flex-row gap-1 justify-evenly items-center w-16 p-2 rounded-2xl">
          <svg
            rpl=""
            aria-hidden="true"
            class="icon-share"
            fill="currentColor"
            height="20"
            icon-name="share-ios-outline"
            viewBox="0 0 20 20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 11v5.378A2.625 2.625 0 0 1 16.378 19H3.622A2.625 2.625 0 0 1 1 16.378V11h1.25v5.378a1.373 1.373 0 0 0 1.372 1.372h12.756a1.373 1.373 0 0 0 1.372-1.372V11H19ZM9.375 3.009V14h1.25V3.009l2.933 2.933.884-.884-4-4a.624.624 0 0 0-.884 0l-4 4 .884.884 2.933-2.933Z"></path>
          </svg>
          <p className="text-xs">Share</p>
        </button>
      </div>
    </div>
  );
}

export default CommunityPageMessage;
