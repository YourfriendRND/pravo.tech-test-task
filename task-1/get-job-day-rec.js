const {
    SATURDAY_AS_NUMBER,
    SUNDAY_AS_NUMBER,
    HOLIDAYS
} = require('./const');

// * Вариант решения через рекурсию
function getJobDayRec(date) {

    const nextWorkDay = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    nextWorkDay.setDate(date.getDate() + 1);
    const dayOfWeek = nextWorkDay.getDay();

    if (dayOfWeek === SATURDAY_AS_NUMBER || dayOfWeek === SUNDAY_AS_NUMBER) {
        return getJobDayRec(nextWorkDay);
    }


    const [nextDateString] = nextWorkDay.toISOString().split('T');
    const isWeekend = HOLIDAYS.some((holiday) => holiday === nextDateString);
    if (isWeekend) {
        return getJobDayRec(nextWorkDay);
    }
    
    return nextWorkDay;
}

module.exports = {
    getJobDayRec
}