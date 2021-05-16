import { useSpring } from '@react-spring/core';
import React, { useState } from 'react';
import Img from '../../components/Img';
import Scene from '../../components/Scene';
import TextBox from '../../components/TextBox';
import useWhistle from '../../hooks/useWhistle';
import bg from './img/1/bg.png';
import man from './img/1/senor.png';
import top from './img/1/top.png';

const WindowDeath = () => {
    const [visible, setVisible] = useState(false);
    const [volume, setVolume] = useState(0.3);
    const { play } = useWhistle({ volume });

    const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 800,
    });

    return (
        <Scene bg={bg} onShow={() => setVisible(true)}>
            <Img src={man} style={fadeIn} />
            <Img src={top} />

            <TextBox />
        </Scene>
    );
};

export default WindowDeath;
