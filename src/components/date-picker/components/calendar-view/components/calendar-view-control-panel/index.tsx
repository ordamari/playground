import { format, addMonths } from 'date-fns'

type CalendarViewControlPanelProps = {
    setCalendarViewDate: (date: Date) => void
    calenderViewDate: Date
}

function CalendarViewControlPanel({
    setCalendarViewDate,
    calenderViewDate,
}: CalendarViewControlPanelProps) {
    const handleNextMonth = () => {
        setCalendarViewDate(addMonths(calenderViewDate, 1))
    }

    const handlePrevMonth = () => {
        setCalendarViewDate(addMonths(calenderViewDate, -1))
    }

    return (
        <div className="grid grid-cols-[auto_1fr_auto]">
            <button onClick={handlePrevMonth}>prev month</button>
            <div className="text-center">
                {format(calenderViewDate, 'dd/MM/yy')}
            </div>
            <button onClick={handleNextMonth}>next month</button>
        </div>
    )
}

export default CalendarViewControlPanel
