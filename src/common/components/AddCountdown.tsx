import { useState, useEffect } from "react";
import { addCoundown } from "@utils/countdowns";
import { v4 as uuidv4 } from 'uuid';

export const AddCountdown = () => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addCoundown({ id: uuidv4(), title, date: new Date(date) });
        setTitle("");
        setDate("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Date"
            />
            <button type="submit">Add Countdown</button>
        </form>
    );
};