import { useSpring } from '@react-spring/core';
import React, { useState } from 'react';
import Img from '../../components/Img';
import MagicText from '../../components/MagicText';
import Scene from '../../components/Scene';
import TextBox from '../../components/TextBox';
import bg from '../../scenes/Intro/img/bg.png';
import sadKid from './img/n-triste.png';
import happyKid from './img/n-silba.png';
import top from './img/tension.png';
import { animated } from '@react-spring/web';
import styled from 'styled-components';
import useVolume from '../../hooks/useVolume';
import whistle from '../../sounds/whistle.mp3';

const Div = styled(animated.div)`
    width: var(--box);
    height: var(--box);
`;

const KidCries = ({ setStep }) => {
    const [visible, setVisible] = useState(false);
    const [change, setChange] = useState(false);
    const { play, volumeDown } = useVolume(whistle);
    const [out, setOut] = useState(false);

    const [movement, api] = useSpring(() => ({ translateX: 0, delay: 500 }));

    const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 600,
        onRest: () => {
            setTimeout(() => {
                api.start({ translateX: -1000 });
                play();

                setTimeout(() => {
                    volumeDown();
                    setOut(true);
                }, 600);
            }, 1200);
        },
    });

    return (
        <Scene
            bg={bg}
            onShow={() => {
                setVisible(true);
                setTimeout(() => {
                    setChange(true);
                }, 1000);
            }}
            out={out}
            onOut={() => setStep('WindowDeath')}
        >
            <Img src={top}></Img>

            <Img src={sadKid} style={{ opacity: change ? 0 : 1 }} />

            <Div style={movement}>
                {change && <Img style={fadeIn} src={happyKid}></Img>}
            </Div>

            <TextBox>{visible && <MagicText text="..." />}</TextBox>
        </Scene>
    );
};

export default KidCries;
