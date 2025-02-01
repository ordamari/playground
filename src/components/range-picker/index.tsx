import { format } from 'date-fns'
import { LegacyRef } from 'react'
import getTwoDatesSorted from './utils/get-two-dates-sorted'
import CalendarView from './components/calendar-view'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '../ui/button'

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
            <input
                type="date"
                value={format(startDate, 'yyyy-MM-dd')}
                ref={startDateRef}
                onChange={(ev) => {
                    const date = new Date(ev.target.value)
                    const sortedDates = getTwoDatesSorted([date, endDate])
                    onChange(sortedDates)
                }}
                className="w-0 h-0 opacity-0"
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
                className="w-0 h-0 opacity-0"
            />
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline">
                        {format(startDate, 'dd-MM-yyyy')} -{' '}
                        {format(endDate, 'dd-MM-yyyy')}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                    <CalendarView
                        amountOfMonths={amountOfMonths}
                        rangeDates={rangeDates}
                        onChange={onChange}
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}

export default RangePicker
