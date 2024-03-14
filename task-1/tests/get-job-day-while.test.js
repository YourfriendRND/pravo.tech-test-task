const { getJobDay } = require('../get-job-day-while')

describe(`test of function ${getJobDay.name}`, () => {
    test('now is 22.02.2023 then next work day is 27.02.2023', () => {
        const targetDate = new Date(2023, 1, 27);
        targetDate.setMinutes(targetDate.getMinutes() - targetDate.getTimezoneOffset())
        expect(getJobDay(new Date(2023, 1, 22))).toEqual(targetDate)
    })

    test('now is 31.01.2021 then next work day is 10.01.2022', () => {
        const targetDate = new Date(2022, 0, 10);
        targetDate.setMinutes(targetDate.getMinutes() - targetDate.getTimezoneOffset())
        expect(getJobDay(new Date(2021, 11, 31))).toEqual(targetDate)
    })

    test('now is 06.03.2022 then next work day is 09.03.2022', () => {
        const targetDate = new Date(2022, 2, 9);
        targetDate.setMinutes(targetDate.getMinutes() - targetDate.getTimezoneOffset())
        expect(getJobDay(new Date(2022, 2, 6))).toEqual(targetDate)
    })

    test('now is 04.04.2023 then next work day is 05.04.2023', () => {
        const targetDate = new Date(2023, 3, 5);
        targetDate.setMinutes(targetDate.getMinutes() - targetDate.getTimezoneOffset())
        expect(getJobDay(new Date(2023, 3, 4))).toEqual(targetDate)
    })

    test('now is 05.05.2023 then next work day is 10.05.2023', () => {
        const targetDate = new Date(2023, 4, 10);
        targetDate.setMinutes(targetDate.getMinutes() - targetDate.getTimezoneOffset())
        expect(getJobDay(new Date(2023, 4, 5))).toEqual(targetDate)
    })
})