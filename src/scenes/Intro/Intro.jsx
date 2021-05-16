import { animated, useSpring } from '@react-spring/web';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MagicText from '../../components/MagicText';
import TextBox from '../../components/TextBox';
import bg from './img/bg.png';
import kid from './img/kid.png';
import dialogs from './dialogs';
import Select from '../../components/Select';

import whistle from '../../sounds/whistle.mp3';
import useVolume from '../../hooks/useVolume';
import Scene from '../../components/Scene';

const AnimatedImg = styled(animated.img)`
    position: absolute;
    bottom: 0;
    left: 0;
`;

const Intro = ({ setStep, setFinalF, setFinalL }) => {
    const [startText, setStartText] = useState(false);
    const [kidStart, setKidStart] = useState(false);
    const [questionStart, setQuestionStart] = useState(false);
    const [out, setOut] = useState(false);
    const { play, volumeDown } = useVolume(whistle);

    const kidAppear = useSpring({
        from: { translateX: '-200px', opacity: 0 },
        to: [
            { translateX: '200px' },
            {
                opacity: 1,
            },
        ],
        delay: 500,
        onRest: () => {
            setTimeout(() => {
                setStartText(true);
            }, 3000);
        },
    });

    const nextScreen = (finalL) => {
        setOut(true);

        setTimeout(() => {
            if (finalL) {
                setFinalL((prev) => prev + 1);
                setStep('KidCries');
            } else {
                setFinalF((prev) => prev + 1);
                setStep('ScareZoom');
            }
        }, 300);
    };

    const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 300,
    });

    useEffect(() => {
        if (startText) {
            play();
            setTimeout(() => {
                volumeDown();
            }, 3000);
        }
    }, [startText, play]);

    return (
        <Scene bg={bg} out={out} onShow={() => setKidStart(true)}>
            {kidStart && <AnimatedImg src={kid} style={kidAppear} />}
            <TextBox>
                <div>
                    {startText && (
                        <MagicText
                            text={dialogs.firstQuestion.text}
                            onDone={() => setQuestionStart(true)}
                        ></MagicText>
                    )}

                    <br />
                    <br />

                    {questionStart && (
                        <div style={fadeIn}>
                            <Select
                                options={dialogs.firstQuestion.options}
                                onSelect={nextScreen}
                            ></Select>
                        </div>
                    )}
                </div>
            </TextBox>
        </Scene>
    );
};

export default Intro;
