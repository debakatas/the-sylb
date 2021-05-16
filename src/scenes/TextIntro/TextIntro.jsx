import React, { useEffect, useState } from 'react';
import Img from '../../components/Img';
import MagicText from '../../components/MagicText';
import Scene from '../../components/Scene';
import TextBox from '../../components/TextBox';

import bg from './img/bg.png';
import bg2 from './img/familia-2.png';
import dialogs from './dialogs';

const TextIntro = ({ setStep, finalF, finalL }) => {
    const [visible, setVisible] = useState(false);
    const [part, setPart] = useState(0);

    useEffect(() => {
        if (part === dialogs.length) {
            setStep(finalF > finalL ? 'FinalF' : 'FinalL');
        }
    }, [part]);

    return (
        <Scene bg={bg} onShow={() => setVisible(true)}>
            {part && <Img fadeIn src={bg2}></Img>}

            <TextBox>
                {visible && (
                    <MagicText
                        text={dialogs[part] || ''}
                        onDone={() => {
                            if (part < dialogs.length) {
                                setTimeout(() => {
                                    setPart((prev) => prev + 1);
                                }, 1500);
                            }
                        }}
                    ></MagicText>
                )}
            </TextBox>
        </Scene>
    );
};

export default TextIntro;
