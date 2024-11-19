import React from 'react';
import { RandomizedTextEffect } from './text-randomized.jsx';
function RandomText() {
    return (
        <>
            <div className=" py-10 rounded-md">
                <h1 className="font-departure text-8xl relative z-10 text-center h-[120px] md:h-auto leading-tight">
                    <RandomizedTextEffect text="Contact Aman Jha" />
                </h1>
            </div>
        </>
    );
}
export default RandomText;
