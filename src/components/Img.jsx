import { animated } from '@react-spring/web';
import styled from 'styled-components';

const Img = styled(animated.img).attrs({ alt: "I ain't no time for alt" })`
    position: absolute;
    bottom: 0;
    left: 0;
`;

export default Img;
