const addDays = (date, days) => {
    const convertDaysToMs = days => days * 24 * 60 * 60 * 1000;
    return new Date(Date.now()+convertDaysToMs(days));
}

console.log(addDays(new Date(), 42));

