import { useLayoutEffect, useState } from "react";

const STATIC_GAP_BETWEEN_WINDOW_EDGE = -20;

interface IHookArguments {
    targetElementWidth : number;
    baseElementXPosition : number;
}

function useCrossoverViewportDetection({ targetElementWidth , baseElementXPosition } : IHookArguments) : number {
    const [leftPosition, setLeftPosition] = useState(0);

    useLayoutEffect(function detectCardCrossoverViewPortHandler() {
        if(baseElementXPosition) {
            const viewportWidth = window.innerWidth;
            const haveCrossOverViewport = (baseElementXPosition + targetElementWidth) > viewportWidth;

            if(haveCrossOverViewport) {
                const negativeCrossoverSize = (window.innerWidth - (625.3375244140625 + 640)) + STATIC_GAP_BETWEEN_WINDOW_EDGE;
                setLeftPosition(negativeCrossoverSize);
            }
        }
    } , []);

    return leftPosition;
}


export default useCrossoverViewportDetection;