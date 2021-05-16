import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useScreenSize from '../hooks/useScreenSize';
import Intro from '../scenes/Intro/Intro';
import KidCries from '../scenes/KidCries/KidCries';
import ScareZoom from '../scenes/ScareZoom/ScareZoom';
import useLocalStorage from 'use-local-storage-state';

const MagicCanvas = styled.main`
    width: var(--box);
    height: var(--box);
    min-height: var(--box);
    min-width: var(--box);
    background-color: black;
    flex-shrink: 0;
    flex-grow: 0;
    transition: all 0s linear;
`;

const steps = {
    Intro,
    KidCries,
    ScareZoom,
};

const Canvas = () => {
    const { width, height } = useScreenSize();
    const [scale, setScale] = useState(1);
    const [step, setStep] = useLocalStorage('step', 'Intro');
    const [finalF, setFinalF] = useLocalStorage('finalF', 0);
    const [finalL, setFinalL] = useLocalStorage('finalL', 0);

    const Step = steps[step];

    useEffect(() => {
        const min = Math.min(width, height);

        setScale(min / 2000);
    }, [width, height]);

    return (
        <MagicCanvas style={{ transform: `scale(${scale})` }}>
            <Step {...{ setFinalF, setStep, setFinalL, finalF, finalL }} />
        </MagicCanvas>
    );
};

export default Canvas;
