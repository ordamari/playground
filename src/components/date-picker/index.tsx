import { LegacyRef, forwardRef } from 'react'
import { format } from 'date-fns'
import CalendarView from './components/calendar-view'

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '../ui/button'

type DatePickerProps = {
    value: Date
    onChange: (date: Date) => void
}

function _DatePicker(
    { value, onChange }: DatePickerProps,
    ref: LegacyRef<HTMLInputElement>
) {
    return (
        <div className="">
            <input
                className="w-0 h-0 opacity-0"
                type="date"
                value={format(value, 'yyyy-MM-dd')}
                ref={ref}
                onChange={(ev) => {
                    const date = new Date(ev.target.value)
                    onChange(date)
                }}
            />

            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline">
                        {format(value, 'dd-MM-yyyy')}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                    <CalendarView value={value} onChange={onChange} />
                </PopoverContent>
            </Popover>
        </div>
    )
}

const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(_DatePicker)

export default DatePicker
