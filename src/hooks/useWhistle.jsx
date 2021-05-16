import useVolume from './useVolume';
import whistle from '../sounds/whistle.mp3';

const useWhistle = (props = {}) => {
    return useVolume(whistle, props);
};

export default useWhistle;
