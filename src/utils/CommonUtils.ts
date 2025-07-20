import moment from 'moment'
import { DEFAULT_NO_IMAGE_URL } from '../constants/CommonConstants'

export const parseAndFormatDate = (isoDateString: string) => {
    return moment(isoDateString).format('MMMM, DD YYYY hh:mm A');
}

export const noImageHandler = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement
    target.onerror = null; // Prevents infinite loop
    target.src = DEFAULT_NO_IMAGE_URL
}