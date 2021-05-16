import React, { useEffect, useState } from 'react';
import Img from '../../components/Img';
import MagicText from '../../components/MagicText';
import Scene from '../../components/Scene';
import TextBox from '../../components/TextBox';

import top from './img/1/top.png';
import man from './img/1/senor.png';
import useWhistle from '../../hooks/useWhistle';
import Select from '../../components/Select';

import bg from './img/2/mesa.png';
import man2 from './img/2/papa.png';
import top2 from './img/2/top.png';

const Blank = ({ setStep }) => {
    const [visible, setVisible] = useState(false);
    const [volume, setVolume] = useState(0.8);
    const [textReady, setTextReady] = useState(false);
    const [manReady, setManReady] = useState(false);
    const [first, setFirst] = useState(true);

    const { play, volumeDown, isPlaying } = useWhistle({ volume, loop: true });

    useEffect(() => {
        play();
    }, [play]);

    useEffect(() => {
        if (isPlaying) {
            setTimeout(() => {
                setVolume(0.6);
            }, 400);

            setTimeout(() => {
                setVolume(0.4);
            }, 800);

            setTimeout(() => {
                setVolume(0.2);
            }, 1200);
        }
    }, [isPlaying]);

    useEffect(() => {
        if (!first) {
            setTimeout(() => {
                setManReady(true);
            }, 1000);
        }
    }, [first]);

    return (
        <Scene
            onShow={() => setVisible(true)}
            style={{ backgroundColor: '#c2c2c2' }}
        >
            {first ? (
                <>
                    {visible && <Img fadeIn src={man}></Img>}
                    <Img src={top}></Img>
                </>
            ) : (
                <>
                    <Img fadeIn src={bg}></Img>
                    {manReady && <Img fadeIn src={man2}></Img>}
                    <Img fadeIn src={top2}></Img>
                </>
            )}

            <TextBox>
                {visible && first && (
                    <MagicText
                        onDone={() => {
                            setTextReady(true);
                        }}
                        text="The closer the further, the further the closer, but what about if I can't hear it?"
                    ></MagicText>
                )}

                {manReady && (
                    <MagicText
                        onDone={() => {
                            setTimeout(() => {
                                volumeDown();
                                setStep('Thanks');
                            }, 2000);
                        }}
                        text="Who said you hear that with your ears?"
                    ></MagicText>
                )}

                <br />
                <br />

                {textReady && first && (
                    <Select
                        options={['Silence the noise', 'Silence the noise']}
                        onSelect={() => setFirst(false)}
                    ></Select>
                )}
            </TextBox>
        </Scene>
    );
};

export default Blank;
