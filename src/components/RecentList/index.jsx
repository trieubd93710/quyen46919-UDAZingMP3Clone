import React, { useState } from "react";
import "./styles.scss";
import RecentSong from "../RecentSong";
function RecentList(props) {
  const data = [
    {
      id: 1,
      thumbnail:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/d/2/5/ed251cf560be4747e7737b535c357f07.jpg",
      title: "#zingchart",
    },
    {
      id: 2,
      thumbnail:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/3/c/9/93c9b2ce0792713221fe14fe2f1f7b29.jpg",
      title: "#zingchart New Release",
    },
    {
      id: 3,
      thumbnail:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/9/5/4/09542fd83e019d4734587f836bc9bbc0.jpg",
      title: "Top 100 Bài Hát Nhạc Trẻ Hay Nhất",
    },
    {
      id: 4,
      thumbnail:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/8/0/c/f80c8800ed8141a5e0be62d729048223.jpg",
      title: "Album Vol 1: DẰM TRONG TIM",
    },

    {
      id: 5,
      thumbnail:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/e/9/0/6e904968a7a682efcda18df5f6337047.jpg",
      title: "Today's Ballad Hits",
    },
    {
      id: 6,
      thumbnail:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/covers/e/5/e5cfb17501d64fb7dbd3f9c10a730fe7_1454490964.jpg",
      title: "Một Lần Mất Niềm Tin Vạn Lần Bất",
    },
  ];
  const [recentList, setRecentList] = useState(data);
  return (
    <div className="recentList">
      <div className="recentList__title">
        <p className="recentList__title--left">Gần Đây</p>
        <a href="#" className="recentList__title--right">
          TẤT CẢ
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10Z"
            />
          </svg>
        </a>
      </div>
      <div className="recent__lists">
        {recentList.map((song) => (
          <RecentSong
            key={song.id}
            thumbnail={song.thumbnail}
            title={song.title}
          />
        ))}
      </div>
    </div>
  );
}

export default RecentList;
