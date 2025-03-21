import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"

dayjs.extend(utc)
export const formatTimeToUTC = <T>(time: string, format: string = "YYYY/MM/DD HH:mm:ss"): T | undefined | string => {
  if (!time) return
  return dayjs.utc(time).format(format)
}
