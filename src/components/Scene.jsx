import { animated, useSpring } from '@react-spring/web';
import React from 'react';
import styled, { css } from 'styled-components';

const AnimatedSection = styled(animated.section)`
    opacity: 1;

    ${({ out }) =>
        out
            ? css`
                  opacity: 0;
              `
            : ''}
`;

const Scene = ({ children, bg, onShow, out = false }) => {
    const screenAppear = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 300,
        onRest: onShow?.(),
    });

    return (
        <AnimatedSection
            style={{ '--bg': `url(${bg})`, ...screenAppear }}
            out={out}
        >
            {children}
        </AnimatedSection>
    );
};

export default Scene;
