import React, { useEffect, useState } from 'react';

const useKeyboardKey = (key = 'Enter', onKey) => {
    const keys = Array.isArray(key) ? key : [key];

    useEffect(() => {
        const listener = (e) => {
            if (keys.includes(e.code)) {
                onKey(e);
            }
        };

        document.addEventListener('keyup', listener);

        return () => document.removeEventListener('keyup', listener);
    }, [keys, onKey]);
};

export default useKeyboardKey;
