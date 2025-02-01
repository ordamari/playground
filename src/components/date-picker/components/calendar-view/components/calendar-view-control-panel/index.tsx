import { format, addMonths } from 'date-fns'
import { ArrowLeft, ArrowRight } from 'lucide-react'

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
            <button onClick={handlePrevMonth}>
                <ArrowLeft />
            </button>
            <div className="text-center">
                {format(calenderViewDate, 'MMMM yyyy')}
            </div>
            <button onClick={handleNextMonth}>
                <ArrowRight />
            </button>
        </div>
    )
}

export default CalendarViewControlPanel
