import React, { useEffect, useState } from "react";

const Comment = ({ comment }) => {
  return (
    <div className="flex border border-gray-600 my-5 p-1 lg:p-4 gap-1 overflow-x-scroll lg:overflow-x-auto  lg:gap-4 rounded-xl">
      <div>
        <img
          className=" border-2 rounded-full border-red-600"
          src={
            comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl
          }
          alt="img"
        />
      </div>
      <div className="flex flex-col">
        <p className="font-bold">
          {comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}
        </p>
        <p className="text-sm font-semibold">
          {comment?.snippet?.topLevelComment?.snippet?.textDisplay}
        </p>

        <div className="flex my-2 gap-3 items-center text-lg">
          <p className="">
            <i class="fa-regular fa-thumbs-up"></i>{" "}
            {comment?.snippet?.topLevelComment?.snippet?.likeCount}
          </p>
          <p>
            <i class="fa-regular fa-thumbs-down"></i> 0
          </p>
          <p>
            <i class="fa-solid fa-heart " style={{ color: "#f50000" }}></i>
          </p>
          <p className="text-sm font-bold ml-4">
            Replay : {comment?.snippet?.totalReplyCount}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return (
    <>
      {comments.map((comment) => (
        <div key={comment.id}>
          <Comment comment={comment} />
        </div>
      ))}
    </>
  );
};

const CommentContainer = ({ videoId }) => {
  const [videoComments, setvideoComments] = useState([]);
  const videoUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=AIzaSyAchkxS61EhuWM3ftW_614cDic0SZi6FjQ`;

  useEffect(() => {
    getComments();
  }, [videoUrl]);

  const getComments = async () => {
    const comments = await fetch(videoUrl);
    const json = await comments.json();
    //console.log(json.items.length);
    setvideoComments(json.items);
  };

  return (
    <div className="my-5 p-3 w-72 lg:w-[800px] border-2 border-gray-600 rounded-2xl">
      <p className="font-bold text-lg my-1 text-white">
        Comments - {videoComments?.length}
      </p>

      {videoComments && <CommentList comments={videoComments} />}
    </div>
  );
};

export default CommentContainer;

//  nested commnets using mock data.

// const Comment = ({ data }) => {
//   const { name, text, replay } = data;

//   return (
//     <>
//       <div className="text-white border-2 border-gray-600 rounded-lg flex gap-3 p-3 my-3">
//         <div>
//           <img className="w-10" src="user.png" alt="user image" />
//         </div>
//         <div>
//           <p className="font-bold">{name}</p>
//           <p>{text}</p>
//         </div>
//       </div>
//     </>
//   );
// };

// const CommentList = ({ comments }) => {
//   return (
//     <div>
//       {comments.map((comment, index) => {
//         return (
//           <div key={index}>
//             <Comment data={comment} />
//             <div className="ml-10">
//               <CommentList comments={comment?.replay} />
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
