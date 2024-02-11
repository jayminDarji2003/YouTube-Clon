import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CountFormatter from "./CountFormatter";

const YoutubeChannelPage = () => {
  const [searchParams] = useSearchParams();
  const channelId = searchParams.get("v");
  const channelUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=AIzaSyAchkxS61EhuWM3ftW_614cDic0SZi6FjQ`;
  const [channelInfo, setChannelInfo] = useState({});

  useEffect(() => {
    getChannelInfo();
  }, [searchParams]);

  const getChannelInfo = async () => {
    const data = await fetch(channelUrl);
    const json = await data.json();
    console.log(json.items[0]);
    setChannelInfo(json?.items[0]);
  };

  return (
    <div>
      {channelInfo && (
        <div className="mb-16">
          <div className="m-4 lg:w-[1275px] flex flex-col lg:flex-row justify-center gap-10">
            <div className="flex justify-center">
              <img
                className="rounded-full h-40"
                src={channelInfo?.snippet?.thumbnails?.medium?.url}
                alt="image"
              />
            </div>
            <div className=" text-white text-center lg:text-left">
              <p className="text-4xl font-bold py-2">
                {channelInfo?.snippet?.title}
              </p>
              <p className="text-gray-300">
                {channelInfo?.snippet?.customUrl} ✅
              </p>
              <div className="my-2 flex flex-col font-bold">
                <CountFormatter
                  count={channelInfo?.statistics?.subscriberCount}
                  name={"Subscribers 🚀"}
                />
                <CountFormatter
                  count={channelInfo?.statistics?.videoCount}
                  name={"Videos 🚀"}
                />
                <CountFormatter
                  count={channelInfo?.statistics?.viewCount}
                  name={"Views 🚀"}
                />
              </div>
            </div>
          </div>
          <p className=" mx-4 md:mx-20 lg:mx-40 font-semibold text-center">
            <b>Description :</b> {channelInfo?.snippet?.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default YoutubeChannelPage;
