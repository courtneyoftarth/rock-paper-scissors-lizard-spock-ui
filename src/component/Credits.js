import React from 'react';

const sources = {
    lizard: 'https://www.istockphoto.com/vector/friendly-green-iguana-in-flat-style-vector-gm862153016-142888289',
    paper: 'https://www.pinclipart.com/pindetail/Txmmx_counseling-clipart-student-meeting-paper-black-and-white/',
    rock: 'https://clipartart.com/categories/rock-clipart-free.html',
    scissors: 'http://www.clipartpanda.com/clipart_images/scissors-clipart-5181114',
    spock: 'https://www.pinclipart.com/pindetail/ohwhox_star-trek-spock-fallout-star-trek-spock-fallout/'
};

const Credits = () => (
    <div>
        <h2>Credits</h2>
        Pictures taken from
        <ul>
            {
                Object.keys(sources).map(move => <li><a href={sources[move]}>{move}</a></li>)
            }
        </ul>
    </div>
);

export default Credits;