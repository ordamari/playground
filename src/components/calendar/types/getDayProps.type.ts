import { ButtonHTMLAttributes } from 'react'
import Month from '../enums/month.enum'

type GetDayProps = (
    day: number,
    month: Month,
    year: number
) => ButtonHTMLAttributes<HTMLButtonElement>

export default GetDayProps
