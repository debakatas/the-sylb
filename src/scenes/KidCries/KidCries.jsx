import React, { useState } from 'react';
import Img from '../../components/Img';
import MagicText from '../../components/MagicText';
import Scene from '../../components/Scene';
import TextBox from '../../components/TextBox';
import bg from '../../scenes/Intro/img/bg.png';
import happyKid from '../../scenes/Intro/img/kid.png';

const KidCries = () => {
    const [visible, setVisible] = useState(false);

    return (
        <Scene bg={bg} onShow={() => setVisible(true)}>
            <Img src={happyKid} />

            <TextBox>{visible && <MagicText text="..." />}</TextBox>
        </Scene>
    );
};

export default KidCries;
