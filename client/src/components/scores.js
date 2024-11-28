import "../output.css";
import React, { useState, useRef, useEffect } from "react";
import "../css/scores.css";

const Score = ({ score }) => {
    const [lifeScore, setLifeScore] = useState(40);
    const [counter, setCounter] = useState(0);
    const timerRef = useRef();
    const isLongPress = useRef();
    const [coords, setCoords] = useState({ x: -1, y: -1 });
    const [isRippling, setIsRippling] = useState(false);

    const startPressTimer = () => {
        isLongPress.current = false;
        timerRef.current = setTimeout(() => {
            isLongPress.current = true;
            console.log("longpress");
        }, 500);
    };

    useEffect(() => {
        if (isLongPress.current) {
            setCounter(counter + 1);
        }
    }, [isLongPress]);

    const handleLife = (val) => {
        console.log("mouse up");
        clearTimeout(timerRef.current);
        if (isLongPress.current) {
            setLifeScore(lifeScore + val * 10);
        } else {
            setLifeScore(lifeScore + val);
        }
    };

    const checkLong = (e) => {
        startPressTimer();
        console.log("Mouse down");
        const rect = e.target.getBoundingClientRect();
        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        console.log(coords);
        //onClick && onClick(e);
    };

    useEffect(() => {
        //console.log("Check coords and set isRippling");
        if (coords.x !== -1 && coords.y !== -1) {
            setIsRippling(true);
            console.log("rippling");
            setTimeout(() => setIsRippling(false), 300);
        } else setIsRippling(false);
    }, [coords]);

    useEffect(() => {
        //console.log("Reset Coords");
        if (!isRippling) {
            //setCoords({ x: -1, y: -1 });
        }
    }, [isRippling]);

    return (
        <div id="lifescore" class="bg-white flex flex-row relative">
            {/* <div class="grow bg-slate-500 opacity-0 z-10 active:opacity-50" onClick={() => handleLife(-1)}></div>
            <div class="grow bg-slate-500 opacity-0 z-10 active:opacity-50" onClick={() => handleLife(1)}></div> */}
            <div
                id="subtract"
                class="grow bg-slate-500 opacity-0 z-10 "
                onMouseDown={(e) => checkLong(e)}
                //data-twe-ripple-init
                onMouseUp={() => handleLife(-1)}
            ></div>
            {isRippling ? (
                <span
                    id="ripple"
                    style={{
                        left: coords.x,
                        top: coords.y,
                    }}
                >
                    "rippling so hard rn"
                </span>
            ) : (
                <p class=" bg-slate-950 z-20 text-black opacity-100">
                    not rippling
                </p>
            )}
            <div
                id="add"
                class="grow bg-slate-500 opacity-0 z-10 active:opacity-50"
                //onMouseDown={checkLong}
                onMouseUp={() => handleLife(1)}
            ></div>
            <div class="text-center select-none text-9xl absolute right-0 left-0 top-0 bottom-0 m-auto w-40 h-40">
                {lifeScore}
            </div>
        </div>
    );
};

export default Score;

/*function rippleEffect(event) {
  const btn = event.currentTarget;
  
	const circle = document.createElement("span");
	const diameter = Math.max(btn.clientWidth, btn.clientHeight);
	const radius = diameter / 2;

	circle.style.width = circle.style.height = `${diameter}px`;
	circle.style.left = `${event.clientX - (btn.offsetLeft + radius)}px`;
	circle.style.top = `${event.clientY - (btn.offsetTop + radius)}px`;
	circle.classList.add("ripple");

	const ripple = btn.getElementsByClassName("ripple")[0];

	if (ripple) {
		ripple.remove();
	}

	btn.appendChild(circle);
}

const btn = document.getElementById("bt");
btn.addEventListener("click", rippleEffect); 

css
span.ripple {
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  animation: ripple 600ms linear;
  background-color: rgba(255, 255, 255, 0.7);
}
@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
*/
