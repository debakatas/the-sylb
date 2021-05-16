import { animated, useSpring, config } from '@react-spring/web';
import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';

const AnimatedSection = styled(animated.section)`
    ${({ out }) =>
        out
            ? css`
                  opacity: 0 !important;
              `
            : ''}
`;

const Scene = ({ children, bg, onShow, out = false, onOut }) => {
    const screenAppear = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 1000,
        config: config.wobbly,
    });

    useEffect(() => {
        setTimeout(() => {
            onShow?.();
        }, 1500);
    }, []);

    useEffect(() => {
        if (out) {
            setTimeout(() => {
                onOut?.();
            }, 500);
        }
    }, [out]);

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
