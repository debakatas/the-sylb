import { useCallback, useEffect, useState } from 'react';
import useSound from 'use-sound';

const useVolume = (sound, options = {}) => {
    const [volume, setVolume] = useState(options.volume || 0.5);

    const [play, props] = useSound(sound, { ...options, volume });

    const volumeDown = useCallback(
        (speed = 2000) => {
            const steps = speed / 100;
            const modifier = (1 - volume) / steps;

            Array.from({ length: steps }).forEach((_, index) => {
                setTimeout(() => {
                    setVolume((prev) => Math.max(prev - modifier, 0));
                }, 100 * (index + 1));
            });

            setTimeout(() => {
                props.stop();
            }, speed);
        },
        [volume, setVolume, props]
    );

    const volumeUp = useCallback(
        (speed = 2000) => {
            play();
            const steps = speed / 100;
            const modifier = (1 - volume) / steps;

            Array.from({ length: steps }).forEach((_, index) => {
                setTimeout(() => {
                    setVolume((prev) => Math.max(prev + modifier, 1));
                }, 100 * (index + 1));
            });
        },
        [volume, setVolume, props]
    );

    return {
        volumeUp,
        play,
        volumeDown,
        ...props,
    };
};

export default useVolume;
