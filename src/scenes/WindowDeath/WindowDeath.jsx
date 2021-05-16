import { useSpring } from '@react-spring/core';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Box from '../../components/Box';
import Img from '../../components/Img';
import MagicText from '../../components/MagicText';
import Scene from '../../components/Scene';
import TextBox from '../../components/TextBox';
import useKeyboardKey from '../../hooks/useKeyboardKey';
import useVolume from '../../hooks/useVolume';
import useWhistle from '../../hooks/useWhistle';
import bg from './img/1/bg.png';
import man from './img/1/senor.png';
import top from './img/1/top.png';

import bg2 from './img/2/bg.png';
import man2 from './img/2/senor.png';

import glass from '../../sounds/glass.mp3';

const StyledBox = styled(Box)`
    transform-origin: left bottom;
`;

const WindowDeath = ({ setStep }) => {
    const [visible, setVisible] = useState(false);
    const [textReady, setTextReady] = useState(false);
    const [second, setSecond] = useState(false);
    const [volume, setVolume] = useState(0.3);
    const { play } = useWhistle({ volume, loop: true });
    const { play: playGlass } = useVolume(glass, { volume: 0.7 });

    useKeyboardKey('Enter', () => {
        if (textReady) {
            setVolume(0.1);
            setTimeout(() => {
                setStep('TextIntro');
            }, 1000);
        }
    });

    const [movement, api] = useSpring(() => ({
        from: { rotate: '-10deg' },
    }));

    useEffect(() => {
        if (second) {
            playGlass();
        }
    }, [second]);

    return (
        <Scene bg={second ? bg2 : bg}>
            {second ? (
                <StyledBox style={movement}>
                    <Img
                        src={man2}
                        fadeIn
                        delay={300}
                        onRest={() => {
                            api.start({ rotate: '40deg' });
                        }}
                    />
                </StyledBox>
            ) : (
                <>
                    <Img
                        src={man}
                        fadeIn
                        onRest={() => {
                            play();
                            setVisible(true);
                        }}
                    />
                    <Img src={top} />
                </>
            )}

            <TextBox>
                {visible && (
                    <MagicText
                        onDone={() => {
                            if (second) {
                                setVolume(0.2);
                                setTextReady(true);
                            } else {
                                setTimeout(() => {
                                    setSecond(true);
                                }, 1500);
                            }
                        }}
                        text={
                            second
                                ? 'Press enter to continue...'
                                : 'The closer the further, the further the closer, I can’t take it anymore.'
                        }
                    ></MagicText>
                )}
            </TextBox>
        </Scene>
    );
};

export default WindowDeath;
