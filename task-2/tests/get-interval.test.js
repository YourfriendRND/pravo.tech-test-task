const { getInterval } = require('../get-interval');

/**
    ```
    Периоды для проверки:
    ```
    10.01.2023 - 08.12.2023 // return { "years":0 ,"months":10, "days":29 }
    01.03.2023 - 18.07.2023 // return { "years":0 ,"months":4, "days":18 } * 1
    26.01.2023 - 23.06.2023 // return { "years":0 ,"months":4, "days":29 }
    01.03.2023 - 31.05.2023 // return { "years":0 ,"months":3, "days":0 }
    01.03.2023 - 18.07.2023 // return { "years":0 ,"months":4, "days":18 }
    25.09.2023 - 01.04.2024 // return { "years":0 ,"months":6, "days":8 }
    01.04.2023 - 24.09.2023 // return { "years":0 ,"months":5, "days":24 }
    01.03.2023 - 19.07.2023 // return { "years":0 ,"months":4, "days":19 }
    19.04.2023 - 29.02.2024 // return { "years":0 ,"months":10, "days":11 }
    01.04.2023 - 29.02.2024 // return { "years":0 ,"months":11, "days":0 }
    01.06.2023 - 29.02.2024 // return { "years":0 ,"months":9, "days":0 }
    26.01.2023 - 17.03.2024 // return { "years":1 ,"months":1, "days": 21 }
 * 
 */ 
 

describe(`test of function ${getInterval.name}`, () => {

    test('10.01.2023 - 08.12.2023 // return { "years":0 ,"months":10, "days":29 }', () =>  {
        expect(getInterval(new Date(2023, 0, 10), new Date(2023, 11, 8))).toEqual({ 
            years: 0, 
            months: 10, 
            days: 29
        })
    })

    test('01.03.2023 - 18.07.2023 // return { "years":0 ,"months":4, "days":18 }', () =>  {
        expect(getInterval(new Date(2023, 2, 1), new Date(2023, 6, 18))).toEqual({ 
            years: 0, 
            months: 4, 
            days: 18
        })
    })

    test('26.01.2023 - 23.06.2023 // return { "years":0 ,"months":4, "days":29 }', () =>  {
        expect(getInterval(new Date(2023, 0, 26), new Date(2023, 5, 23))).toEqual({ 
            years: 0, 
            months: 4, 
            days: 29
        })
    })

    test('01.03.2023 - 31.05.2023 // return { "years":0 ,"months":3, "days":0 }', () =>  {
        expect(getInterval(new Date(2023, 2, 1), new Date(2023, 4, 31))).toEqual({ 
            years: 0, 
            months: 3, 
            days: 0
        })
    })

    test('01.03.2023 - 18.07.2023 // return { "years":0 ,"months":4, "days": 18 }', () =>  {
        expect(getInterval(new Date(2023, 2, 1), new Date(2023, 6, 18))).toEqual({ 
            years: 0, 
            months: 4, 
            days: 18
        })
    })

    test('25.09.2023 - 01.04.2024 // return { "years":0 ,"months":6, "days":8 }', () =>  {
        expect(getInterval(new Date(2023, 8, 25), new Date(2024, 3, 1))).toEqual({ 
            years: 0, 
            months: 6, 
            days: 8
        })
    })

    test('01.04.2023 - 24.09.2023 // return { "years":0 ,"months":5, "days":24 }', () =>  {
        expect(getInterval(new Date(2023, 3, 1), new Date(2023, 8, 24))).toEqual({ 
            years: 0, 
            months: 5, 
            days: 24
        })
    })

    test('01.03.2023 - 19.07.2023 // return { "years":0 ,"months":4, "days":19 }', () =>  {
        expect(getInterval(new Date(2023, 2, 1), new Date(2023, 6, 19))).toEqual({ 
            years: 0, 
            months: 4, 
            days: 19
        })
    })

    test('19.04.2023 - 29.02.2024 // return { "years":0 ,"months":10, "days":11 }', () =>  {
        expect(getInterval(new Date(2023, 3, 19), new Date(2024, 1, 29))).toEqual({ 
            years: 0, 
            months: 10, 
            days: 11
        })
    })

    test('01.04.2023 - 29.02.2024 // return { "years":0 ,"months":11, "days":0 }', () =>  {
        expect(getInterval(new Date(2023, 3, 1), new Date(2024, 1, 29))).toEqual({ 
            years: 0, 
            months: 11, 
            days: 0
        })
    })

    test('01.06.2023 - 29.02.2024 // return { "years":0 ,"months":9, "days":0 }', () =>  {
        expect(getInterval(new Date(2023, 5, 1), new Date(2024, 1, 29))).toEqual({ 
            years: 0, 
            months: 9, 
            days: 0
        })
    })
    
})