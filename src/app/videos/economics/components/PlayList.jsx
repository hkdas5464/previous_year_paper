//* Packages Imports */
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { Grip } from "lucide-react";
import './style.css'

const Playlist = ({ videos, onDragEnd, handleVideoClick }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter the videos based on the search
  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="ml-2">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search videos..."
        className="w-full px-4 py-2 mb-4 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-sky-500"
      />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="playlist" className="scroll">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex flex-col"
            >
              {filteredVideos.map((video, index) => (
                <Draggable
                  key={video.title}
                  draggableId={video.title}
                  index={index}
                >
                  {(provided) => (
                    <div
                      className="mb-1 text-sm border rounded-md bg-slate-200 border-slate-200 text-slate-700 md:mb-3"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                    >
                      <div
                        className="flex items-center justify-between gap-2 px-2 py-3 border-r border-r-slate-200 rounded-l-md transitionborder-r-sky-200 hover:bg-sky-200"
                        {...provided.dragHandleProps}
                      >
                        <div
                          className="flex items-center justify-between gap-4"
                          onClick={() => handleVideoClick(video)}
                        >
                          <img
                            src="https://static.uacdn.net/thumbnail/course/v2/8650B69D-DBFA-48CA-91B6-EE5F4D4C34B3_plus.png?q=75&w=384&auto=format%2Ccompress"
                            alt={video.title}
                            className="object-cover w-16 h-16 rounded-md"
                          />
                          <span className="cursor-pointer">{index+1} {video.title}</span>
                        </div>
                        <Grip className="w-5 h-5" />
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Playlist;
