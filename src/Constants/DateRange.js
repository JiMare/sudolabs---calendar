import moment from "moment";

export const DEFAULT_RANGE = {
  startDate: new Date(),
  endDate: moment().endOf("isoWeek").toDate(),
  key: "selection",
};
