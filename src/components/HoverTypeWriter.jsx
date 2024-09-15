import { useEffect, useState } from "react";

export default function HoverTypeWriter({ defaultText, newText, speed }){
    const [text, setText] = useState(defaultText);
    const [isAnimating, setIsAnimating] = useState(false);
    const [blink, setBlink] = useState("|");
    
    const animationPlayState = text === newText ? 'paused' : 'initial';

    return(
        <span style={{animationPlayState: animationPlayState}} className="json" 
        onMouseEnter={() => 
            ResetText(defaultText, isAnimating, setIsAnimating, setText, newText, defaultText, setBlink)
        }>
            {text}<BlinkPipe blink={blink} setBlink={setBlink} />
        </span>
    );
}

const ResetText = (str, isAnimating, setIsAnimating, setText, newText, defaultText, setBlink) => {
    if(isAnimating) return;

    setBlink("|");

    let counter = str.length;

    setIsAnimating(true);

    const interval = setInterval(() => {

        setText(str.substring(0, counter));

        if(counter > 0) return counter--;

        clearInterval(interval);
        setIsAnimating(false);
        TypeText(
            str === newText ? defaultText : newText, 
            defaultText, 
            newText, 
            setText, 
            isAnimating, 
            setIsAnimating,
            setBlink
        );
    }, 30);
}

const TypeText = (text, defaultText, newText, setText, isAnimating, setIsAnimating, setBlink) => {
    let counter = 0;

    if(isAnimating) return;

    setBlink("|");

    setIsAnimating(true);

    const interval = setInterval(() => {
        setText(text.substring(0, counter));

        if(counter < text.length) return counter++;

        clearInterval(interval);
        setIsAnimating(false);
        if (text === defaultText) return;
        //Looks redundant but it's necessary to prevent the text from entering an infinite loop
        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false);
            ResetText(
                text, 
                isAnimating, 
                setIsAnimating, 
                setText, 
                newText, 
                defaultText,
                setBlink
            );
        }, 3000);
    }, 40);
}

const BlinkPipe = ({ blink, setBlink }) => {
        
    useEffect(() => {
        const interval = setInterval(() => {
            setBlink(prev => (prev === "|" ? "" : "|"));
        }, 500);
        return () => clearInterval(interval);
    });

    return(blink);
}