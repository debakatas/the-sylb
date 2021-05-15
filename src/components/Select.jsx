import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const StyledOption = styled.div`
    &::before {
        content: '';
        vertical-align: baseline;
        margin-right: 0.5rem;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        border: 0.2rem solid white;
        display: inline-block;
        position: relative;
        top: 0.3rem;
        margin-bottom: 1rem;
        background: transparent;

        ${({ selected }) =>
            selected
                ? css`
                      background: currentColor;
                  `
                : ''}
    }
`;

const changeKeys = { ArrowUp: 1, ArrowDown: -1 };

const Select = ({ options }) => {
    const [pre, setPre] = useState(0);

    useEffect(() => {
        const listener = (e) => {
            const modifier = changeKeys[e.code];

            if (modifier) {
                setPre((previous) => {
                    let update = previous + modifier;

                    if (update >= 0 && update < options.length) {
                        return update;
                    }

                    if (update < 0) return options.length - 1;

                    return 0;
                });
            }
        };

        document.addEventListener('keyup', listener);

        return () => document.removeEventListener('keyup', listener);
    }, [setPre, options.length]);

    useEffect(() => {
        const listener = (e) => {
            const modifier = changeKeys[e.code];

            if (e.code === 'Enter') {
                setPre((previous) => {
                    let update = previous + modifier;

                    if (update >= 0 && update < options.length) {
                        return update;
                    }

                    if (update < 0) return options.length - 1;

                    return 0;
                });
            }
        };

        document.addEventListener('keyup', listener);

        return () => document.removeEventListener('keyup', listener);
    }, [setPre, options.length]);

    return (
        <>
            {options.map((o, index) => (
                <StyledOption selected={index === pre} key={o}>
                    {o}
                </StyledOption>
            ))}
        </>
    );
};

export default Select;
