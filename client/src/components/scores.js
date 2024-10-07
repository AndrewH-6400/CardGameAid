import "../output.css";
import { useState } from "react";

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

    const handleLife = (val) => {
        setLifeScore(lifeScore+val);
    };

    return(
        <div id="lifescore1" class="bg-white flex flex-row">
            <div class="grow" onClick={() => handleLife(-1)}></div>
            <p class="self-center text-9xl">{lifeScore}</p>
            <div class="grow" onClick={() => handleLife(1)}></div>
        </div>
    )
};

export default Score;