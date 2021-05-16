import React, { useState } from 'react';
import Img from '../../components/Img';
import MagicText from '../../components/MagicText';
import Scene from '../../components/Scene';
import TextBox from '../../components/TextBox';
import useKeyboardKey from '../../hooks/useKeyboardKey';
import top from '../ScareZoom/img/top.png';

import bg from './img/bg.jpeg';

const Thanks = ({ setStep }) => {
    const [visible, setVisible] = useState(false);
    const [textReady, setTextReady] = useState(false);

    useKeyboardKey('Enter', () => {
        if (textReady) {
            localStorage.clear();
            setStep('Intro');
        }
    });

    return (
        <Scene
            bg={bg}
            onShow={() => setVisible(true)}
            style={{
                filter: 'grayscale(1)',
                backgroundSize: 'contain',
                backgroundPosition: '60% center',
            }}
        >
            {visible && (
                <Img
                    fadeIn
                    src={top}
                    style={{
                        transform: 'rotate(180deg) scale(1.3) translateX(-10%)',
                    }}
                ></Img>
            )}

            <TextBox>
                <MagicText
                    text={
                        'Thanks for playing.\n S.O.S Colombia because our government kill us for asking for our rights.\n Press enter to go back...\n Team deBakatas 🌵'
                    }
                    onDone={() => setTextReady(true)}
                ></MagicText>
            </TextBox>
        </Scene>
    );
};

export default Thanks;
