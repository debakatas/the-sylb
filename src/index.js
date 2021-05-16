import React from 'react';
import ReactDOM from 'react-dom';
import BaseStyle from './components/BaseStyle';
import Canvas from './components/Canvas';

import * as imgs from './imgs';

window.preloadedData = Object.values(imgs).map((picture) => {
    const img = new Image();
    img.src = picture;
    return img;
});

ReactDOM.render(
    <>
        <BaseStyle></BaseStyle>
        <Canvas />
    </>,
    document.body
);
