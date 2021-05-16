import React, { useState } from 'react';
import Img from '../../components/Img';
import MagicText from '../../components/MagicText';
import Scene from '../../components/Scene';
import TextBox from '../../components/TextBox';

import bg from './img/bg.png';

const TextIntro = () => {
    const [visible, setVisible] = useState(false);

    return (
        <Scene bg={bg} onShow={() => setVisible(true)}>
            {visible && <Img fadeIn></Img>}

            <TextBox>
                <MagicText text="..."></MagicText>
            </TextBox>
        </Scene>
    );
};

export default TextIntro;
