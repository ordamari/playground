import useCalendarContext from '../../hooks/useCalendarContext'
import getWeekDays from '../../utils/get-week-days'

function WeekDays() {
    const { firstDayOfWeek } = useCalendarContext()
    const weekDays = getWeekDays(firstDayOfWeek)
    return (
        <>
            {weekDays.map((day) => {
                return (
                    <div className="text-center" key={day}>
                        day.{day}
                    </div>
                )
            })}
        </>
    )
}

export default WeekDays
