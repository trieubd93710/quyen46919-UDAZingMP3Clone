import React from 'react';
import './styles.scss';
import NewRelease from '../../components/NewRelease';

Home.propTypes = {};

function Home(props) {
    return <div className="home">
        <NewRelease/>
    </div>;
}

export default Home;
