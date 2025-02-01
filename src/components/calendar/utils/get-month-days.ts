import Month from '../enums/month.enum'

function getMonthDays(month: Month, year: number) {
    const amountOfDays = _getAmountOfDaysInMonth(month, year)
    return Array.from({ length: amountOfDays }).map((_, index) => {
        const day = index + 1
        return day
    })
}

function _getAmountOfDaysInMonth(month: Month, year: number) {
    return new Date(year, month + 1, 0).getDate()
}

export default getMonthDays
