import { useState } from 'react'
import Calendar from '../../../calendar'
import CalendarViewControlPanel from './components/calendar-view-control-panel'
import { cn } from '@/lib/utils'
import { isSameDay, isSameMonth } from 'date-fns'

type CalendarViewProps = {
    value: Date
    onChange: (value: Date) => void
}

function CalendarView({ value, onChange }: CalendarViewProps) {
    const [calenderViewDate, setCalendarViewDate] = useState(new Date(value))
    const calendarViewMonth = calenderViewDate.getMonth()

    const onDayClicked = (date: Date) => {
        onChange(date)
        if (!isSameMonth(date, value)) setCalendarViewDate(date)
    }

    return (
        <div className="">
            <CalendarViewControlPanel
                calenderViewDate={calenderViewDate}
                setCalendarViewDate={setCalendarViewDate}
            />
            <Calendar
                year={calenderViewDate.getFullYear()}
                month={calendarViewMonth}
                getDayProps={(day, month, year) => {
                    const date = new Date(year, month, day)

                    return {
                        onClick: () => onDayClicked(date),
                        className: cn(
                            calendarViewMonth !== month && 'text-gray-300',
                            isSameDay(date, value) && 'bg-primary text-white'
                        ),
                    }
                }}
            />
        </div>
    )
}

export default CalendarView
