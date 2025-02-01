import { compareAsc } from 'date-fns'

function getTwoDatesSorted(twoDates: [Date, Date]) {
    return twoDates.sort(compareAsc) as [Date, Date]
}

export default getTwoDatesSorted
