import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { YOUTUBE_API_KEY } from "../api_key";

const PlaylistPage = () => {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchYouTubePlaylists = async () => {
      const url = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${id}&maxResults=25&key=${YOUTUBE_API_KEY}`;

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setPlaylists(data.items);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchYouTubePlaylists();
  }, []);

  if (loading) {
    return <div className="text-center mt-10 text-gray-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">Error: {error}</div>;
  }

  if (playlists.length === 0) {
    return (
      <div className="text-center mt-10 text-white">No playlist found!!</div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-10 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {playlists.map((playlist) => (
          <div
            key={playlist.id}
            className="bg-black rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform  border border-gray-200"
          >
            <div className="relative group">
              <img
                src={playlist.snippet.thumbnails.high.url}
                alt={playlist.snippet.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-3">
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                  {playlist.contentDetails.itemCount} videos
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-white line-clamp-2">
                {playlist.snippet.title}
              </h3>
              <p className="text-sm text-white line-clamp-3 mb-4">
                {playlist.snippet.description}
              </p>
              <Link
                to={`/playlist-videos/${playlist.id}`}
                className="inline-block px-5 py-2 text-sm font-semibold text-black bg-white rounded-lg  shadow-lg transition-all duration-300"
              >
                View Playlist
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistPage;
