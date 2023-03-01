import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faArrowLeft,
  faArrowRight,
  faSearchDollar,
  faCancel,
  faTShirt,
  faDiamond,
  faIndustry,
  faUser,
  faDownload,
  faL,
} from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

Headers.propTypes = {};

function Headers(props) {
  const [text, setText] = useState("");
  const [box, setBox] = useState(false);
  const inputUseRef = useRef(null);
  useEffect(() => {
    if (box) {
      inputUseRef.current.focus();
    }
  }, [box]);
  const handleCancel = () => {
    setText("");
  };
  return (
    <div className="Headers">
      <div className="Headers__left">
        {" "}
        <div className="Headers__translate">
          <button className="Headers__translate--left">
            {" "}
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button className="Headers__translate--right">
            {" "}
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        {/* imput */}
        {box === false ? (
          <div className="Headers__input">
            <button type="text" className="Headers__input--search">
              <FontAwesomeIcon icon={faSearchDollar} />
            </button>
            <input
              type="text"
              value={text}
              className="Headers__input--box"
              placeholder="Tìm kiếm bài hát, lời bài hát, nghệ sĩ,..."
              onChange={(e) => {
                setText(e.target.value);
              }}
              onClick={() => {
                setBox(true);
                inputUseRef.current.focus();
              }}
              onBlur={() => {
                setBox(false);
              }}
            />
            {text.length >= 1 && (
              <FontAwesomeIcon icon={faCancel} onClick={handleCancel} />
            )}
          </div>
        ) : (
          <div className="Headers__inputForcus">
            <div className="Headers__inputForcus--posi">
              <div className="Headers__inputForcus--input">
                <button type="text" className="Headers__inputForcus--search">
                  <FontAwesomeIcon icon={faSearchDollar} />
                </button>
                <input
                  type="text"
                  value={text}
                  className="Headers__inputForcus--box"
                  placeholder="Tìm kiếm bài hát, lời bài hát, nghệ sĩ,..."
                  ref={inputUseRef}
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                />
                {text.length >= 1 && (
                  <FontAwesomeIcon icon={faCancel} onClick={handleCancel} />
                )}
              </div>
              <div className="Headers__list">
                <div className="Headers__list--title">Đề xuất cho bạn</div>
                <div className="Headers__list--menu">
                  <ul className="Headers__list--suggest">
                    <li>
                      <a href="">bí mật nhỏ</a>
                    </li>
                    <li>
                      <a href="">#zingchart</a>
                    </li>
                    <li>
                      <a href="">Top nổi bật</a>
                    </li>
                    <li>
                      <a href="">Nhạc trẻ</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="Headers__right">
        {" "}
        <button className="Headers__dowload">
          <FontAwesomeIcon icon={faDownload} className="faDowload" />
          <p className="Headers__dowloadTitle"> tải bản Window</p>
        </button>
        <div className="Headers__icon">
          <div className="Headers__icon--wrap">
            {" "}
            <FontAwesomeIcon icon={faTShirt} />
          </div>
          <div className="Headers__icon--wrap">
            {" "}
            <FontAwesomeIcon icon={faDiamond} />
          </div>
          <div className="Headers__icon--wrap">
            {" "}
            <FontAwesomeIcon icon={faIndustry} />
          </div>
          <div className="Headers__icon--wrap">
            {" "}
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Headers;
