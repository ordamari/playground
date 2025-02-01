import { createContext } from 'react'
import Month from '../enums/month.enum'
import WeekDay from '../enums/week-days.enum'
import GetDayProps from '../types/getDayProps.type'

type CalendarContextType = {
    currentYear: number
    currentMonth: Month
    firstDayOfWeek: WeekDay
    getDayProps?: GetDayProps
}

const CalendarContext = createContext<CalendarContextType | null>(null)

export default CalendarContext
