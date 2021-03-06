import React from 'react';

//  const VideoListItem = (props) => {
//    const video = props.video
//same as above
const VideoListItem = ({video, onVideoSelect}) => {
  //props defined by {} syntax ^
  const imgUrl = video.snippet.thumbnails.default.url;
  return (
  <li onClick={() => onVideoSelect(video)} className="list-group-item">
    <div className="video-list media">
      <div className="media-left">
        <img className="media-object" src={imgUrl}/>
      </div>
    </div>
    <div className="media-body">
      <div className="media-heading">{video.snippet.title}</div>
    </div>
  </li>
  );
};


export default VideoListItem;
