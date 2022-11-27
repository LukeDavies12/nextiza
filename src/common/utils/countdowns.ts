import { ICountdown } from '@customTypes/types';

export const getCountdowns = (): ICountdown[] => {
    // get from local storage
    const countdowns = window.localStorage.getItem("countdowns");

    // if countdowns exist, check if any are expired, and remove them
    if (countdowns !== null) {
        const parsedCountdowns: ICountdown[] = JSON.parse(countdowns);

        parsedCountdowns.forEach(parsedCountdown => {
            if (checkExpired(parsedCountdown)) {
                deleteCountdown(parsedCountdown.id);
            }
        });
    }

    // return countdowns
    return countdowns !== null ? JSON.parse(countdowns) : [];
};

export const saveCountdowns = (countdowns: ICountdown[]): void => {
    // save to local storage
    window.localStorage.setItem("countdowns", JSON.stringify(countdowns));
};

// add a new countdown to local storage
export const addCoundown = (countdown: ICountdown) => {
    const countdowns = getCountdowns();
    countdowns.push(countdown);
    saveCountdowns(countdowns);
};

// save every countdown except the one with the given id
export const deleteCountdown = (id: string) => {
    const countdowns = getCountdowns();
    const filteredCountdowns = countdowns.filter((countdown) => countdown.id !== id);
    saveCountdowns(filteredCountdowns);
}

// check if a countdown has passed
export const checkExpired = (countdown: ICountdown) => {
    const now = new Date();
    const countdownDate = new Date(countdown.date);
    return countdownDate.getTime() < now.getTime();
};
