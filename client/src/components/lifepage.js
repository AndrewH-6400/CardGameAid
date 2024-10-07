import "../output.css";
import Score from "./scores";
import { useState } from "react";

const LifePage = () => {
    // const [userName, setUserName] = useState("");
    // useEffect(() => {
    //     const token = localStorage.getItem("token");
    //     if (token) {
    //         const decoded = jwtDecode(token);
    //         setUserName(decoded.name);
    //         console.log(decoded);
    //     }
    // }, []);

   
    

    return(
        <div class="h-lvh flex flex-col bg-red-300">
            <div>Put the icon that will drop down to the get you to other pages or to edit this one here</div>
            <div id="Scores" class="grid grid-cols-2 justify-items-stretch gap-1 size-full bg-slate-500">
                <Score />
                <Score score={"22"}/>
                <Score score={"39"}/>
                <Score score={"40"}/>
            </div>
        </div>
    )
};

export default LifePage;