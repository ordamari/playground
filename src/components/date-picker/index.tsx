import { LegacyRef, forwardRef } from 'react'
import { format } from 'date-fns'
import CalendarView from './components/calendar-view'

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
            <CalendarView value={value} onChange={onChange} />
            <input
                type="date"
                value={format(value, 'yyyy-MM-dd')}
                ref={ref}
                onChange={(ev) => {
                    const date = new Date(ev.target.value)
                    onChange(date)
                }}
            />
        </div>
    )
}

const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(_DatePicker)

export default DatePicker
