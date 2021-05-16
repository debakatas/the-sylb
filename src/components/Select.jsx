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
        border: 0.2rem solid currentColor;
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

    ${({ selected, final }) =>
        selected && final
            ? css`
                  color: yellow;
              `
            : ''}
`;

const changeKeys = { ArrowUp: 1, ArrowDown: -1 };

const Select = ({ options, onSelect }) => {
    const [pre, setPre] = useState(0);
    const [final, setFinal] = useState(false);

    useEffect(() => {
        const listener = (e) => {
            if (final) return;

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
    }, [setPre, options.length, final]);

    useEffect(() => {
        const listener = (e) => {
            if (e.code === 'Enter') {
                setFinal(true);
            }
        };

        document.addEventListener('keyup', listener);

        return () => document.removeEventListener('keyup', listener);
    }, [setFinal]);

    useEffect(() => {
        if (final) {
            console.log('imgggas');

            setTimeout(() => {
                console.log(1123);
                onSelect?.(pre);
            }, 3000);
        }
    }, [final, pre]);

    return (
        <>
            {options.map((o, index) => (
                <StyledOption selected={index === pre} key={o} final={final}>
                    <label>{o}</label>
                </StyledOption>
            ))}
        </>
    );
};

export default Select;
