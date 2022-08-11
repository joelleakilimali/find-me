import { formatDistance } from "date-fns";

export const formateDate = (date: string | Date) => {
  return formatDistance(new Date(date), new Date(), {
    addSuffix: true,
    includeSeconds: true,
  });
};
