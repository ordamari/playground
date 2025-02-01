import { addMonths } from 'date-fns'
import Calendar from '../../../../../calendar'
import { cn } from '@/lib/utils'
import { isWithinInterval } from 'date-fns'

type CalendarListProps = {
    calenderViewDate: Date
    amountOfMonths: number
    onDayClicked: (date: Date) => void
    rangeDates: [Date, Date]
}

function CalendarList({
    calenderViewDate,
    amountOfMonths,
    onDayClicked,
    rangeDates,
}: CalendarListProps) {
    return (
        <div className="flex flex-col">
            {Array.from({ length: amountOfMonths }).map((_, index) => {
                const indexViewDate = addMonths(calenderViewDate, index)
                const indexViewMonth = indexViewDate.getMonth()
                return (
                    <Calendar
                        className="flex-grow"
                        key={index}
                        year={indexViewDate.getFullYear()}
                        month={indexViewMonth}
                        getDayProps={(day, month, year) => {
                            const date = new Date(year, month, day)
                            return {
                                onClick: () => onDayClicked(date),
                                className: cn(
                                    'aspect-square',
                                    indexViewMonth !== month && 'text-gray-300',
                                    isWithinInterval(date, {
                                        start: rangeDates[0],
                                        end: rangeDates[1],
                                    }) && 'bg-primary text-white'
                                ),
                            }
                        }}
                    />
                )
            })}
        </div>
    )
}

export default CalendarList
