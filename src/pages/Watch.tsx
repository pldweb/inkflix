import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { ArrowLeft } from 'lucide-react';

const Watch = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Example video URL - replace with your actual video source
  const videoUrl = "https://www.youtube.com/watch?v=b9EkMc79ZSU";

  return (
    <div className="h-screen w-full bg-black">
      <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
        <ArrowLeft
          onClick={() => navigate(-1)}
          className="w-4 md:w-10 text-white cursor-pointer hover:opacity-80 transition"
        />
        <p className="text-white text-1xl md:text-3xl font-bold">
          <span className="font-light">Watching:</span> Stranger Things
        </p>
      </nav>
      <div className="h-full w-full">
        <ReactPlayer
          url={videoUrl}
          width="100%"
          height="100%"
          controls
          playing
          config={{
            youtube: {
              playerVars: { showinfo: 1 }
            }
          }}
        />
      </div>
    </div>
  );
};

export default Watch;