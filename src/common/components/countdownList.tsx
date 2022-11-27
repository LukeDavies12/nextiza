import { useState, useEffect } from "react";
import { ICountdown } from "@customTypes/types";
import { getCountdowns, deleteCountdown } from "@utils/countdowns";

export const CountdownList = () => {
    const [countdowns, setCountdowns] = useState<ICountdown[]>([]);

    useEffect(() => {
        setCountdowns(getCountdowns());
        console.log(countdowns);
    }, []);
    
    return (
        <div>
            {countdowns.map((countdown) => (
                <div key={countdown.id}>
                    <h1>{countdown.title}</h1>
                    <p>{countdown.date.toString()}</p>
                    <button onClick={() => deleteCountdown(countdown.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};