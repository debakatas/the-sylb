import { useSpring } from '@react-spring/core';
import React, { useEffect, useState } from 'react';
import Box from '../../components/Box';
import Img from '../../components/Img';
import MagicText from '../../components/MagicText';
import Scene from '../../components/Scene';
import TextBox from '../../components/TextBox';
import useVolume from '../../hooks/useVolume';
import useWhistle from '../../hooks/useWhistle';

import scream from '../../sounds/scream.mp3';

import bg from './img/bg.png';
import ghost from './img/fantasma.png';

const FinalL = ({ setStep }) => {
    const [visible, setVisible] = useState(false);

    const [grow, api] = useSpring(() => ({
        from: { scale: 0.5, translateY: 0 },
    }));

    const {
        play: playWhistle,
        isPlaying,
        volumeDown,
    } = useWhistle({
        volume: 0.8,
        interrupt: false,
    });
    const { play: playScream } = useVolume(scream, { volume: 1 });

    useEffect(() => {
        if (visible) {
            playWhistle();
        }
    }, [visible, playWhistle]);

    useEffect(() => {
        if (isPlaying) {
            setTimeout(() => {
                volumeDown(1300);

                setTimeout(() => {
                    setStep('Thanks');
                }, 2000);
            }, 1000);
        }
    }, [isPlaying, volumeDown]);

    return (
        <Scene
            bg={bg}
            onShow={() => {
                setVisible(true);
            }}
            style={{ backgroundPosition: 'center -390px' }}
        >
            {visible && (
                <Box style={grow}>
                    <Img
                        fadeIn
                        src={ghost}
                        onRest={() => {
                            api.start({ scale: 1.5, translateY: 120 });
                            playScream();
                        }}
                    ></Img>
                </Box>
            )}

            <TextBox>
                <MagicText text="..."></MagicText>
            </TextBox>
        </Scene>
    );
};

export default FinalL;
