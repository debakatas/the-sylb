import React, { useEffect, useState } from 'react';

const MagicText = ({ text: propText, speed = 70 }) => {
    const [visible, setVisible] = useState(false);
    const [text, setText] = useState('');
    const [step, setStep] = useState(-2);

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
    }, [step, visible]);

    return text;
};

export default MagicText;
