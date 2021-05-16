import React, { useEffect, useState } from 'react';

const MagicText = ({ text: propText, speed = 70, onDone }) => {
    const [visible, setVisible] = useState(false);
    const [text, setText] = useState('');
    const [step, setStep] = useState(-2);

    useEffect(() => {
        if (visible) {
            setText('');
            setStep(-2);
        }
    }, [visible, propText]);

    useEffect(() => {
        setVisible(true);
    }, [setVisible]);

    useEffect(() => {
        if (visible && text.length < propText.length) {
            setTimeout(() => {
                setText((prev) => `${prev}${propText[step + 1] || ''}`);
                setStep((prev) => prev + 1);
            }, speed);
        }

        if (text.length === propText.length) {
            onDone?.();
        }
    }, [step, visible]);

    return text;
};

export default MagicText;
