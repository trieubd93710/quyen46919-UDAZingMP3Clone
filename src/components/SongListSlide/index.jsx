import React, { useState } from "react";
import SongSlide from "../SongSlide/index";
import "./styles.scss";
function SongListSlide(props) {
  const data = [
    {
      id: 1,
      thumbnail:
        "https://photo-zmp3.zmdcdn.me/banner/5/5/2/c/552c0f2af5ecbb1e92ce5c557937a921.jpg",
    },
    {
      id: 2,
      thumbnail:
        "https://photo-zmp3.zmdcdn.me/banner/8/2/2/f/822f8799a239d87e1853354d4c6f13e3.jpg",
    },
    {
      id: 3,
      thumbnail:
        "https://photo-zmp3.zmdcdn.me/banner/f/4/f/6/f4f68001d1f15c476eb59b91316bb312.jpg",
    },
  ];
  const [songList, setSongList] = useState(data);
  return (
    <div className="listSlide">
      {songList.map((song) => (
        <SongSlide id={song.id} key={song.id} thumbnail={song.thumbnail} />
      ))}
      <div className="next-slide">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
        >
          <path
            fill="currentColor"
            d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10Z"
          />
        </svg>{" "}
      </div>
      <div className="prev-slide">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
        >
          <g transform="translate(24 0) scale(-1 1)">
            <path
              fill="currentColor"
              d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10l-10 10Z"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default SongListSlide;
