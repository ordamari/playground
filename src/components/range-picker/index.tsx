import { format } from 'date-fns'
import { LegacyRef } from 'react'
import getTwoDatesSorted from './utils/get-two-dates-sorted'
import CalendarView from './components/calendar-view'

type RangePickerProps = {
    rangeDates: [Date, Date]
    onChange: (rangeDates: [Date, Date]) => void
    startDateRef?: LegacyRef<HTMLInputElement>
    endDateRef?: LegacyRef<HTMLInputElement>
    amountOfMonths?: number
}

function RangePicker({
    rangeDates,
    onChange,
    startDateRef,
    endDateRef,
    amountOfMonths = 1,
}: RangePickerProps) {
    const [startDate, endDate] = rangeDates

    return (
        <div className="">
            <CalendarView
                amountOfMonths={amountOfMonths}
                rangeDates={rangeDates}
                onChange={onChange}
            />
            <input
                type="date"
                value={format(startDate, 'yyyy-MM-dd')}
                ref={startDateRef}
                onChange={(ev) => {
                    const date = new Date(ev.target.value)
                    const sortedDates = getTwoDatesSorted([date, endDate])
                    onChange(sortedDates)
                }}
            />
            <input
                type="date"
                value={format(endDate, 'yyyy-MM-dd')}
                ref={endDateRef}
                onChange={(ev) => {
                    const date = new Date(ev.target.value)
                    const sortedDates = getTwoDatesSorted([startDate, date])
                    onChange(sortedDates)
                }}
            />
        </div>
    )
}

export default RangePicker
