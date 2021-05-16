import React, { useState } from 'react';
import Img from '../../components/Img';
import MagicText from '../../components/MagicText';
import Scene from '../../components/Scene';
import TextBox from '../../components/TextBox';
import useVolume from '../../hooks/useVolume';
import bg from '../../scenes/Intro/img/bg.png';
import whistle from '../../sounds/whistle.mp3';

import man from './img/scared-man.png';

const ScareZoom = () => {
    const [visible, setVisible] = useState(false);
    const { play, volumeDown } = useVolume(whistle);

    return (
        <Scene bg={bg} onShow={() => setVisible(true)}>
            <Img src={man}></Img>

            <TextBox>
                {visible && (
                    <MagicText
                        speed={200}
                        text="... ... ... ..."
                        onDone={() => play()}
                    />
                )}
            </TextBox>
        </Scene>
    );
};

export default ScareZoom;
