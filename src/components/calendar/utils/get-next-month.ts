import AMOUNT_MONTHS from '../constants/amount-months.constant'
import Month from '../enums/month.enum'

function getNextMonth(currentMonth: Month) {
    return (currentMonth + 1) % AMOUNT_MONTHS
}

export default getNextMonth
