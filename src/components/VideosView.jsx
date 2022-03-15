import React, { useState } from "react";
import "../style/videosview.css";



const VideosView = ({ videoData }) => {
  const [videoSelected, setVideoSelected] = useState("");

  return (
    <div className="videosView vh-100 px-5 text-white">
      <h3 className="fst-italic mt-2">
      Enjoy your favorite video anywhere!
      </h3>
      <Trending />
      <SortFilter />
      <div className="videosView__content">
        <Player videoSelected={videoSelected} />
        <RelatedVideos
          videoData={videoData}
          handleVideoSelected={setVideoSelected}
        />
      </div>
    </div>
  );
};

export default VideosView;
