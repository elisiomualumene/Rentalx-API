import { IDateProvider } from "../IDateProvider";
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"

dayjs.extend(utc)

export class DayJsDateProviderImpl implements IDateProvider {
    compareInHours(start_date: Date, end_date: Date): number {
        const start_date_convert_utc = this.convertToUTC(start_date);
        
        const end_date_convert_utc = this.convertToUTC(end_date);

        const date = dayjs(end_date_convert_utc).diff(start_date_convert_utc, 'hours')

        return date;
    }
    
    convertToUTC(date: Date): string {
        return dayjs(date).utc().local().format();
    }
}