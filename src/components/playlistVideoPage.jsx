import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { YOUTUBE_API_KEY } from "../api_key";

const PlaylistVideoPage = () => {
  const [videos, setVideos] = useState([]);
  const [playlistInfo, setPlaylistInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPlaylistVideos = async () => {
      const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=${id}&key=${YOUTUBE_API_KEY}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setVideos(data.items);
        setPlaylistInfo(data.items[0]?.snippet);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylistVideos();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-10 text-gray-400">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white py-10 px-6 flex flex-col lg:flex-row">
      {/* Left Sidebar */}
      <div className="lg:w-1/3 lg:pr-8 mb-8 lg:mb-0">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <img
            src={playlistInfo?.thumbnails?.high?.url}
            alt={playlistInfo?.title}
            className="w-full h-auto object-cover rounded-md mb-4"
          />
          <h1 className="text-2xl lg:text-3xl font-bold">
            {playlistInfo?.title}
          </h1>
          <p className="text-gray-400 mt-2 mb-4">{playlistInfo?.description}</p>
          <div className="text-gray-400 text-sm mb-4">
            <span>{videos.length} videos</span>
            <span className="mx-2">•</span>
            <span>4,389 views</span>
            <span className="mx-2">•</span>
            <span>Last updated on 16 May 2024</span>
          </div>
          <div className="flex space-x-2">
            <button className="bg-white text-black py-2 px-4 rounded-lg font-semibold flex items-center">
              <span className="mr-2">►</span> Play all
            </button>
            <button className="bg-gray-700 text-white py-2 px-4 rounded-lg font-semibold">
              Shuffle
            </button>
          </div>
        </div>
      </div>

      {/* Video List */}
      <div className="lg:w-2/3">
        <div className="space-y-4">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className=" bg-gray-800 rounded-lg shadow-md p-4 flex items-start hover:bg-gray-700 transition-colors duration-300"
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="w-32 h-18 lg:w-40 lg:h-24 object-cover rounded-md mr-4"
              />
              <div className="flex-1">
                <h3 className="text-sm lg:text-lg font-semibold">
                  {index + 1}. {video.snippet.title}
                </h3>
                <p className="text-gray-400 text-xs lg:text-sm">
                  {video.snippet.channelTitle}
                </p>
                <p className="text-gray-500 text-xs lg:text-sm">
                  2M views • 2 months ago{" "}
                  {/* Example data, replace with actual */}
                </p>
                <Link
                  to={"/watch?v=" + video.contentDetails.videoId}
                  className="text-blue-400 hover:text-blue-600 text-xs lg:text-sm mt-2 inline-block"
                >
                  Play Video
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaylistVideoPage;
