import { ButtonHTMLAttributes } from 'react'

type MonthDayProps = {
    day: number
} & ButtonHTMLAttributes<HTMLButtonElement>

function MonthDay({ day, ...buttonProps }: MonthDayProps) {
    return <button {...buttonProps}>{day}</button>
}

export default MonthDay
