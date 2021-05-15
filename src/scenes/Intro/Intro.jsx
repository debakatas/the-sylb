import { animated, useSpring } from '@react-spring/web';
import React from 'react';
import styled from 'styled-components';
import bg from './img/bg.png';

const AnimatedSection = styled(animated.section)``;

const Intro = () => {
    const props = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 300,
    });

    return (
        <AnimatedSection style={{ '--bg': `url(${bg})`, ...props }}>
            dk
        </AnimatedSection>
    );
};

export default Intro;
