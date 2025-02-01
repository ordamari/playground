import MonthDays from './components/month-days'
import NextMonthLastWeekDays from './components/next-month-first-week-days'
import PrevMonthLastWeekDays from './components/prev-month-last-week-days'
import WeekDays from './components/week-days'
import Month from './enums/month.enum'
import WeekDay from './enums/week-days.enum'
import CalendarContext from './context/Calendar.context'
import GetDayProps from './types/getDayProps.type'
import { cn } from '@/lib/utils'

type CalendarProps = {
    month?: Month
    year?: number
    firstDayOfWeek?: WeekDay
    getDayProps?: GetDayProps
    className?: string
}

const today = new Date()

function Calendar({
    month = today.getMonth(),
    year = today.getFullYear(),
    firstDayOfWeek = WeekDay.SUN,
    getDayProps,
    className,
}: CalendarProps) {
    return (
        <CalendarContext.Provider
            value={{
                currentMonth: month,
                currentYear: year,
                firstDayOfWeek,
                getDayProps,
            }}
        >
            <div className={cn('grid grid-cols-7', className)}>
                <WeekDays />
                <PrevMonthLastWeekDays />
                <MonthDays />
                <NextMonthLastWeekDays />
            </div>
        </CalendarContext.Provider>
    )
}

export default Calendar
