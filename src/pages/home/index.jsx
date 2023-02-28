import React from "react";
import "./styles.scss";
import NewMucic from "./../../components/NewMusic/index";

Home.propTypes = {};

function Home(props) {
    return (
        <div className="home">
            <NewMucic />
        </div>
    );
}

export default Home;
