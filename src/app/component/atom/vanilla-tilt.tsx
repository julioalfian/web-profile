'use client'
import React, {useEffect, useRef} from 'react';
import VanillaTilts from 'vanilla-tilt';

interface IVanilaTitl {
    options: any
}

function VanillaTilt(props: IVanilaTitl) {
    const {options} = props;
    const tilt = useRef();

    useEffect(() => {
        VanillaTilts.init(tilt.current, options);
    }, [options]);

    return (
        <div ref={tilt}>
            {children}
        </div>
    );
}

export default VanillaTilt;