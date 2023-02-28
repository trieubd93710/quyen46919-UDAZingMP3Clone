import React from "react";
import "../NewMusic/style.scss";

NewMucic.propTypes = {};
const music = [
    {
        id: 1,
        image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/4/8/8/5488c2adbd0c2415102bd52d26030482.jpg",
        title: "V-Pop Tháng 2/2023",
        singer: "Đức Phúc, Hòa Minzy, ...",
    },
    {
        id: 2,
        image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/7/4/d/774da9673bc6e61614f3fd8273fb6236.jpg",

        title: "US-UK Tháng 3/2023",
        singer: "Pink, ...",
    },
    {
        id: 3,
        image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/6/e/5/66e575133b731456bd51bc689aa58b33.jpg",
        title: "K-Pop Tháng 2/2023",
        singer: "STAYC ...",
    },
    {
        id: 4,
        image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/1/8/5/01850f1ab036f1040bab4072320cbe0e.jpg",
        title: "C-Pop Tháng 2/2023",
        singer: "Yisa Yu ...",
    },
    {
        id: 5,
        image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/6/3/3/7633dfdba7afd8bee61731fd453facc5.jpg",
        title: "Indie Việt Tháng 2/2023",
        singer: "Pixel Neko ...",
    },
];

function NewMucic(props) {
    return (
        <div className="NewMusic">
            <h2 className="headline">Nhạc mới mỗi ngày</h2>
            <div className="cards">
                {music.map((musics, index) => (
                    <div className="card">
                        <div className="card__avt">
                            <div className="playlist-action"></div>
                            <img src={`${musics.image}`} alt="" />
                        </div>
                        <div className="card__title">{musics.title}</div>
                        <div className="card__name-singer">{musics.singer}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewMucic;
