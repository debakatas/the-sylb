import { animated, useSpring } from '@react-spring/web';
import styled from 'styled-components';

const StyledImg = styled(animated.img).attrs({
    alt: "I ain't no time for alt",
})`
    position: absolute;
    bottom: 0;
    left: 0;
`;

const Img = ({ fadeIn = false, onRest, style = {}, delay = 800, ...props }) => {
    const fadeInAnimation = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay,
        onRest: () => onRest?.(),
    });

    const augmentedStyled = {
        ...(fadeIn ? fadeInAnimation : {}),
        ...style,
    };

    return <StyledImg {...props} style={augmentedStyled}></StyledImg>;
};

export default Img;
