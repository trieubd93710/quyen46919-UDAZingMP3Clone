import React from "react";
import "./styles.scss";
import SongListSlide from "../../components/SongListSlide";
import RecentList from "../../components/RecentList";
Home.propTypes = {};

function Home(props) {
  return (
    <div className="home">
      <SongListSlide />
      <RecentList />
    </div>
  );
}

export default Home;
