import { useContext } from 'react'
import CalendarContext from '../context/Calendar.context'

function useCalendarContext() {
    const calendarContext = useContext(CalendarContext)

    if (!calendarContext)
        throw new Error(
            'useCalendarContext can be use only as children of CalendarContext provider'
        )

    return calendarContext
}

export default useCalendarContext
