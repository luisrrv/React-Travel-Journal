import React from 'react'
import { Link, useLocation } from 'react-router-dom';


// const images = require.context('../../public/images', true);

const Details = (props) => {
    const item = useLocation().state;
    console.log(item);
    return (
        <div className="details">
            <Link to='/' >{"<Travels list"}</Link>
            <h1>{item.title}</h1>
        </div>
    )
}

export default Details;
