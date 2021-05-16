import { animated, useSpring } from '@react-spring/web';
import React from 'react';
import styled, { css } from 'styled-components';

const AnimatedSection = styled(animated.section)`
    ${({ out }) =>
        out
            ? css`
                  opacity: 0 !important;
              `
            : ''}
`;

const Scene = ({ children, bg, onShow, out = false }) => {
    const screenAppear = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 300,
        onResolve: onShow?.(),
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
