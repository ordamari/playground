import Month from '../enums/month.enum'

function getPrevMonthYear(currentMonth: Month, currentYear: number) {
    return currentMonth === Month.JAN ? currentYear - 1 : currentYear
}

export default getPrevMonthYear
