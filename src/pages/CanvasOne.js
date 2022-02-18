import React, { useEffect, useRef, useState } from 'react';


function CanvasOne(){

    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth * 2;
        canvas.height = window.innerHeight * 2;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;

        const context = canvas.getContext('2d');
        context.scale(2,2);
        context.lineCap = 'round';
        context.strokeStyle = 'black';
        context.lineWidth = 2;
        contextRef.current = context;

    }, [])

    const animate = () => {
        contextRef.current.lineTo(400 + Math.sin(0.1) * 10, 200);
        console.log('animating');
    }

    const startDrawing = ({nativeEvent}) => {
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        setIsDrawing(true)
    }

    const finishDrawing = () => {
        contextRef.current.closePath();
        setIsDrawing(false)
    }

    const draw = ({nativeEvent}) => {
        if(!isDrawing){
            return
        }
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY);        
        contextRef.current.stroke()
        animate();
        
    }

    return( 
    <canvas
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
    />
    );
}

export default CanvasOne;