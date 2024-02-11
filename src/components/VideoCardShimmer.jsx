import React from "react";

const VideoCardShimmer = () => {
  return (
    <div className="flex flex-wrap gap-4 m-5">
      {Array(30)
        .fill("")
        .map((index) => (
          <div
            key={index}
            className="h-72 rounded-xl bg-[#272727] w-72 text-white"
          ></div>
        ))}
    </div>
  );
};

export default VideoCardShimmer;
