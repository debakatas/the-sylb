import React, { useState } from 'react';
import Img from '../../components/Img';
import Scene from '../../components/Scene';
import TextBox from '../../components/TextBox';
import bg from './img/1/bg.png';
import man from './img/1/senor.png';

const WindowDeath = () => {
    const [visible, setVisible] = useState(false);

    return (
        <Scene bg={bg} onShow={() => setVisible(true)}>
            <Img src={man} />

            <TextBox />
        </Scene>
    );
};

export default WindowDeath;
