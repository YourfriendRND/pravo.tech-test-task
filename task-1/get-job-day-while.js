const {
    SATURDAY_AS_NUMBER,
    SUNDAY_AS_NUMBER,
    HOLIDAYS
} = require('./const');

// * Вариант решения через цикл
function getJobDay(date) {
    let nextDay = 1;
    while(true) {
        const nextWorkDay = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        nextWorkDay.setDate(date.getDate() + nextDay);
        const dayOfWeek = nextWorkDay.getDay();

        if (dayOfWeek === SATURDAY_AS_NUMBER || dayOfWeek === SUNDAY_AS_NUMBER) {
            nextDay++
            continue;
        }


        const [nextDateString] = nextWorkDay.toISOString().split('T');
        const isWeekend = HOLIDAYS.some((holiday) => holiday === nextDateString);
        if (isWeekend) {
            nextDay++
            continue;
        }
        
        return nextWorkDay;
    }

}

module.exports = {
    getJobDay
}
