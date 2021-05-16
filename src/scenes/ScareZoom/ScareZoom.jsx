import React, { useEffect, useState } from 'react';
import Img from '../../components/Img';
import MagicText from '../../components/MagicText';
import Scene from '../../components/Scene';
import TextBox from '../../components/TextBox';
import useVolume from '../../hooks/useVolume';
import whistle from '../../sounds/whistle.mp3';

import top from './img/top.png';
import man from './img/scared-man.png';
import useKeyboardKey from '../../hooks/useKeyboardKey';
import { useSpring } from '@react-spring/core';

const ScareZoom = ({ setStep }) => {
    const [visible, setVisible] = useState(false);
    const { play, volumeDown } = useVolume(whistle);
    const [nextReady, setNextReady] = useState(false);
    const [out, setOut] = useState(false);

    const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 2000,
    });

    useKeyboardKey('Enter', () => {
        if (nextReady) {
            setOut(true);

            setTimeout(() => {
                setStep('WindowDeath');
            }, 500);
        }
    });

    useEffect(() => {
        play();
    }, [play]);

    return (
        <Scene onShow={() => setVisible(true)}>
            <Img src={man} />

            {visible && <Img src={top} style={fadeIn} />}

            <TextBox>
                {visible && (
                    <MagicText
                        speed={200}
                        text={
                            nextReady
                                ? `Press enter to continue...`
                                : '... ... ... ...'
                        }
                        onDone={() => setNextReady(true)}
                    />
                )}
            </TextBox>
        </Scene>
    );
};

export default ScareZoom;
