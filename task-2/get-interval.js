function getInterval(beginDate, endDate) {
    const MONTH_IN_YEAR = 12;
    
    const diffrent = {
        years: 0, 
        months: 0,
        days: 0
    }
    
    
    const yearDiff = endDate.getFullYear() - beginDate.getFullYear();

    if (yearDiff < 0) {
        throw new Error('The end date is earlier than the start date, the case cannot be processed');
    }

    const monthDiff = (!endDate.getMonth() ? endDate.getMonth() + 1 : endDate.getMonth()) - (!beginDate.getMonth() ? beginDate.getMonth() + 1 : beginDate.getMonth());
    const dayDiff = endDate.getDate() - beginDate.getDate(); 

    diffrent.years = monthDiff < 0 && yearDiff > 0 ? yearDiff - 1 : yearDiff;

    function getDayInMonth(date) {
        const isMonthIsFebruary = date.getMonth() === 1;
        const isLeapYear = new Date(date.getFullYear(), 2, 0).getDate() === 29;
        return!isMonthIsFebruary ? 
            (new Date(date.getFullYear(), date.getMonth(), 31).getMonth() === date.getMonth()) ? 31 : 30
            : isMonthIsFebruary && isLeapYear ? 29 : 28;
    }

    const daysInMonth = getDayInMonth(endDate)

    const daysBeforeEndOfMonth = daysInMonth - endDate.getDate();
    const daysAfterBeginMonth = beginDate.getDate() - 1;

    if (monthDiff < 0) {    
        diffrent.months = dayDiff < 0 ? MONTH_IN_YEAR - Math.abs(monthDiff - 1) : MONTH_IN_YEAR - Math.abs(monthDiff);
        
        if (daysBeforeEndOfMonth === daysAfterBeginMonth) {
            diffrent.months++;
        }
        
    } else {
        diffrent.months = daysBeforeEndOfMonth === daysAfterBeginMonth ? monthDiff + 1 : monthDiff;
    }


    if (dayDiff < 0) {
        diffrent.days =  monthDiff <= 0 
            ? ((getDayInMonth(beginDate) - beginDate.getDate()) + endDate.getDate() + 1) + 1
            : getDayInMonth(beginDate) === getDayInMonth(endDate) 
                ? getDayInMonth(beginDate) - Math.abs(dayDiff)
                : getDayInMonth(beginDate) - Math.abs(dayDiff) + 1;
        
    } else {
        diffrent.days = dayDiff + 1;

        if (diffrent.days === getDayInMonth(endDate)) {
            diffrent.days = 0;
        }
    }
    
    return diffrent;

}

module.exports = {
    getInterval
}
