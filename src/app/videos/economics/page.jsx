'use client'
import { useState } from "react";

import mediaJson from './data/mediaJson.json'
import NextNav from "./Nextnav";
import Link from "next/link";
// JSON Playlist Data

export default function PlaylistScreen() {
  const [currentSubject, setCurrentSubject] = useState(mediaJson.subjects[0]);
  const [currentVideo, setCurrentVideo] = useState(currentSubject.videos[0]);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter videos based on search query
  const filteredVideos = currentSubject.videos.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <NextNav/>
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Video Player */}
      <div className="flex-1 p-4 flex flex-col">
        <iframe
          className="w-full h-64 sm:h-96 lg:h-full rounded-lg"
          src={`https://www.youtube.com/embed/${currentVideo.sources[0]}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen="true"
        ></iframe>
        {/* Video Description */}
        <div className="mt-4 p-4 rounded-lg">
          <h2 className="text-lg font-bold">{currentVideo.title}</h2>
          <p className="mt-2">PDF:<a href={currentVideo.description}>{currentVideo.description || "No description available"}</a></p>
        </div>
      </div>

      {/* Playlist Section */}
      <div className="lg:w-1/3 border-t lg:border-t-0 lg:border-l overflow-y-auto ">
        {/* Search Bar */}
        <div className="sticky top-0  z-10 p-4 border-b border-gray-200">
          <input
            type="text"
            placeholder="Search videos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Playlist Header */}
        <div className="p-4 border-b">
          <h2 className="text-lg font-bold ">
            {currentSubject.name}
          </h2>
        </div>

        {/* Playlist */}
        <div className="p-4">
          {filteredVideos.length > 0 ? (
            filteredVideos.map((video) => (
              <div
                key={video.id}
                className={`flex items-center gap-4 p-3 rounded-md cursor-pointer ${
                  video.sources[0] === currentVideo.sources[0]
                    ? "bg-blue-100 text-blue-600"
                    : "hover:text-blue-600"
                }`}
                onClick={() => setCurrentVideo(video)}
              >
                <img
                            src="https://static.uacdn.net/thumbnail/course/v2/8650B69D-DBFA-48CA-91B6-EE5F4D4C34B3_plus.png?q=75&w=384&auto=format%2Ccompress"
                            alt={video.title}
                            className="object-cover w-16 h-16 rounded-md"
                          />
                <span className="text-sm font-medium">
                  {video.title}
                </span>
              </div>
            ))
          ) : (
            <p className=" text-sm">No videos found</p>
          )}
        </div>
      </div>
    </div>
    </>
  );
}
