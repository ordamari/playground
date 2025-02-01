import Month from '../enums/month.enum'

function getNextMonthYear(currentMonth: Month, currentYear: number) {
    return currentMonth === Month.DEC ? currentYear + 1 : currentYear
}

export default getNextMonthYear
