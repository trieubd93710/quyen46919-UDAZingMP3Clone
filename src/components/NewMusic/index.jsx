import { AiOutlineRight } from "react-icons/ai";
import "./styles.scss";

export default function NewMusic() {
  return (
    <div className="newmusic">
      <div className="newmusic__heading">
        <p className="newmusic__heading-name">Nhạc Mới</p>
        <p className="newmusic__heading-all">
          <div>TẤT CẢ</div>
          <span className="newmusic__heading-icon">
            <AiOutlineRight />
          </span>
        </p>
      </div>
      <div className="newmusic__list">
        <div className="newmusic__item">
          <img
            className="newmusic__item-thum"
            src="https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_webp/cover/c/4/d/1/c4d1802c5ca0d2124edc1c7e043c6992.jpg"
            alt=""
          />
          <div className="newmusic__item-group">
            <div className="newmusic__item-info">
              <p className="newmusic__item-name">Bí Mật Nhỏ</p>
              <p className="newmusic__item-singer">
                B Ray, Hoàng tôn, Bảo Hân helia
              </p>
            </div>
            <div className="newmusic__item-other">
              <p className="newmusic__item-trending">#4</p>
              <p className="newmusic__item-time">23.02.2023</p>
            </div>
          </div>
        </div>
        <div className="newmusic__item">
          <img
            className="newmusic__item-thum"
            src="https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_webp/cover/c/4/d/1/c4d1802c5ca0d2124edc1c7e043c6992.jpg"
            alt=""
          />
          <div className="newmusic__item-group">
            <div className="newmusic__item-info">
              <p className="newmusic__item-name">Bí Mật Nhỏ</p>
              <p className="newmusic__item-singer">
                B Ray, Hoàng tôn, Bảo Hân helia
              </p>
            </div>
            <div className="newmusic__item-other">
              <p className="newmusic__item-trending">#4</p>
              <p className="newmusic__item-time">23.02.2023</p>
            </div>
          </div>
        </div>
        <div className="newmusic__item">
          <img
            className="newmusic__item-thum"
            src="https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_webp/cover/c/4/d/1/c4d1802c5ca0d2124edc1c7e043c6992.jpg"
            alt=""
          />
          <div className="newmusic__item-group">
            <div className="newmusic__item-info">
              <p className="newmusic__item-name">Bí Mật Nhỏ</p>
              <p className="newmusic__item-singer">
                B Ray, Hoàng tôn, Bảo Hân helia
              </p>
            </div>
            <div className="newmusic__item-other">
              <p className="newmusic__item-trending">#4</p>
              <p className="newmusic__item-time">23.02.2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
