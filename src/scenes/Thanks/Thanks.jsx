import React, { useState } from 'react';
import Img from '../../components/Img';
import MagicText from '../../components/MagicText';
import Scene from '../../components/Scene';
import TextBox from '../../components/TextBox';
import useKeyboardKey from '../../hooks/useKeyboardKey';

import bg from './img/bg.png';

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
        <Scene bg={bg} onShow={() => setVisible(true)}>
            {visible && <Img fadeIn></Img>}

            <TextBox>
                <MagicText
                    text={
                        'Thanks for playing.\n S.O.S Colombia because our government kill us for asking for our rights.\n Press enter to go back...'
                    }
                    onDone={() => setTextReady(true)}
                ></MagicText>
            </TextBox>
        </Scene>
    );
};

export default Thanks;
