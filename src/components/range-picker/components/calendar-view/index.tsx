import { useState } from 'react'
import CalendarViewControlPanel from './components/calendar-view-control-panel'
import { isSameDay } from 'date-fns'
import getTwoDatesSorted from '../../utils/get-two-dates-sorted'
import CalendarList from './components/calendar-list'

type CalendarViewProps = {
    rangeDates: [Date, Date]
    onChange: (rangeDates: [Date, Date]) => void
    amountOfMonths: number
}

function CalendarView({
    rangeDates,
    onChange,
    amountOfMonths,
}: CalendarViewProps) {
    const [calenderViewDate, setCalendarViewDate] = useState(
        new Date(rangeDates[0])
    )
    const [startDate, endDate] = rangeDates
    const isRangeDateSameDate = isSameDay(startDate, endDate)

    const onDayClicked = (date: Date) => {
        if (isRangeDateSameDate) {
            const sortedDates = getTwoDatesSorted([startDate, date])
            onChange(sortedDates)
        } else {
            onChange([date, date])
        }
    }

    return (
        <div className="">
            <CalendarViewControlPanel
                calenderViewDate={calenderViewDate}
                setCalendarViewDate={setCalendarViewDate}
            />

            <CalendarList
                onDayClicked={onDayClicked}
                calenderViewDate={calenderViewDate}
                amountOfMonths={amountOfMonths}
                rangeDates={rangeDates}
            />
        </div>
    )
}

export default CalendarView
