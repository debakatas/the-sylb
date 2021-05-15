import { animated, useSpring } from '@react-spring/web';
import React, { useState } from 'react';
import styled from 'styled-components';
import MagicText from '../../components/MagicText';
import TextBox from '../../components/TextBox';
import bg from './img/bg.png';
import kid from './img/kid.png';
import dialogs from './dialogs';
import Select from '../../components/Select';

const AnimatedSection = styled(animated.section)``;

const AnimatedImg = styled(animated.img)`
    position: absolute;
    bottom: var(--text-box);
    left: 20%;
`;

const Intro = () => {
    const [currentDialog, setCurrentDialog] = useState(0);
    const [startText, setStartText] = useState(false);

    const props = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 300,
        onRest: () => setStartText(true),
    });

    return (
        <AnimatedSection style={{ '--bg': `url(${bg})`, ...props }}>
            <AnimatedImg src={kid} />
            <TextBox>
                {startText && (
                    <MagicText text={dialogs[currentDialog]}></MagicText>
                )}

                <Select options={['changua', 'caldo']} />
            </TextBox>
        </AnimatedSection>
    );
};

export default Intro;
