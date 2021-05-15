import { createGlobalStyle } from 'styled-components';

const BaseStyle = createGlobalStyle`
    :root{
        --font-size-px: 18;

        --box: 2000px;
    }

    html{
        font-size: 36px;
    }

    body{
        font-size: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        background: black;
    }

    html, body{
        color: black;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        max-width: 100vw;
        min-height: 100vh;
        overflow: hidden;
        width: 100%;
    }

    canvas{
        display: none;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        color: inherit;
        font-size: inherit;
        list-style: none;
        margin: 0;
        padding: 0;
        transition: all 0.3s ease-in-out;

        &:focus,
        &:outline,
        &::-moz-focus-outer {
            outline: 0;
        }
    }

    img,
    picture,
    svg,
    video {
        max-width: 100%;
        object-fit: contain;
    }

    button,
    input,
    a,
    textarea {
        background: transparent;
        border-radius: 0;
        border: 0;
        outline: 0;

        &:hover {
            cursor: pointer;
            outline: 0;
        }
    }

    section{
        background: var(--bg);
        background-size: cover;
        background-position: center center;
        width: var(--box);
        height: var(--box);
        position: relative;
    }

    a,
    a:visited,
    a:focus {
        color: inherit;
        text-decoration: none;

        &:hover {
            color: inherit;
            cursor: pointer;
            text-decoration: none;
        }
    }
`;

export default BaseStyle;
