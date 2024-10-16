import "../output.css";
import { useState, useRef, useEffect } from "react";


const Score = ({score}) => {

        // const [userName, setUserName] = useState("");
    // useEffect(() => {
    //     const token = localStorage.getItem("token");
    //     if (token) {
    //         const decoded = jwtDecode(token);
    //         setUserName(decoded.name);
    //         console.log(decoded);
    //     }
    // }, []);
    const [lifeScore, setLifeScore] = useState(40);
    const [counter, setCounter] = useState(0);
    const timerRef = useRef();
    const isLongPress = useRef();

    const startPressTimer = () => {
        isLongPress.current = false;
        timerRef.current = setTimeout(() => {
            isLongPress.current = true;
            console.log('longpress')
        },500)
    }

    useEffect(() => {
        if (isLongPress.current) {
            setCounter(counter+1)
        }
    }, [isLongPress])

    const handleLife = (val) => {
        console.log("mouse up")
        clearTimeout(timerRef.current)
        if (isLongPress.current) {
            setLifeScore(lifeScore+(val*10))
        } else{
            setLifeScore(lifeScore+(val))
        }
        
    };

    const checkLong = () => {
        console.log("Mouse down")
        startPressTimer();
    };

    //here as leftover from testing for now, if this code becomes a custom hook this may be needed
    // const checkClick = () => {
    //     console.log("click")
    //     if ( isLongPress.current ) {
    //         console.log('Is long press - not continuing.');
    //         return;
    //       }
    // }


    return(
        
        <div id="lifescore" class="bg-white flex flex-row relative">
            {/* <div class="grow bg-slate-500 opacity-0 z-10 active:opacity-50" onClick={() => handleLife(-1)}></div>
            <div class="grow bg-slate-500 opacity-0 z-10 active:opacity-50" onClick={() => handleLife(1)}></div> */}
            <div class="grow bg-slate-500 opacity-0 z-10 active:opacity-50" onMouseDown={checkLong} onMouseUp={() => handleLife(-1)} ></div>
            <div class="grow bg-slate-500 opacity-0 z-10 active:opacity-50" onMouseDown={checkLong} onMouseUp={() => handleLife(1)} > </div>
            <div class="text-center select-none text-9xl absolute right-0 left-0 top-0 bottom-0 m-auto w-40 h-40">{lifeScore}</div>
        </div>
    )
};

export default Score;