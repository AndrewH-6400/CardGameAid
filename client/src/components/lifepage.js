import "../output.css";
import Score from "./scores";
import LifepageSettings from "./LifepageSettings";
import { useState } from "react";

const LifePage = () => {
    return (
        <div class="h-lvh flex flex-col bg-red-300">
            <LifepageSettings />
            <div
                id="Scores"
                class="grid grid-cols-2 justify-items-stretch gap-1 size-full bg-slate-500"
            >
                <Score />
                <Score />
                <Score />
                <Score />
            </div>
        </div>
    );
};

export default LifePage;
