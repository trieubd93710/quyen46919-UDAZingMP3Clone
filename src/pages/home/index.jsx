import React from "react";
import NewMusic from "../../components/NewMusic";
import "./styles.scss";

Home.propTypes = {};

function Home(props) {
  return (
    <div className="home">
      <NewMusic />
    </div>
  );
}

export default Home;
