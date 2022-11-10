import React, { useState } from "react";
import { Button, Popper, ClickAwayListener, Card } from "@mui/material";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DEFAULT_RANGE } from "../Constants/DateRange";
import { getDateRangeLength } from "../utils/getDateRangeLength";
import { generatePrices } from "../utils/generatePrices";

export const Calendar = ({ dateRange, handlePrices, handleDateRange }) => {
  const [dateRangePickerActivated, setDateRangePickerActivated] =
    useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const onOpenModal = (event) => {
    setDateRangePickerActivated(true);
    setAnchorEl(event.currentTarget);
    handleDateRange(DEFAULT_RANGE);
    handlePrices([]);
  };

  const onClose = () => {
    setDateRangePickerActivated(false);
  };

  const onApplyRange = () => {
    const difference = getDateRangeLength(
      dateRange.startDate,
      dateRange.endDate
    );
    handlePrices(generatePrices(difference + 1));
    onClose();
  };

  return (
    <div className="calendar-container">
      <Button onClick={onOpenModal}>Choose Date Range</Button>
      <Popper
        open={dateRangePickerActivated}
        anchorEl={anchorEl}
        placement="top"
      >
        <ClickAwayListener onClickAway={onClose}>
          <Card className="calendar">
            <DateRangePicker
              onChange={(item) => handleDateRange(item.selection)}
              showPreview
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={[dateRange]}
              direction="horizontal"
              minDate={new Date()}
              maxDate={new Date(Date.now() + 12096e5)}
            />
            <div className="calendar__buttons">
              <Button onClick={onClose}>Cancel</Button>
              <Button onClick={onApplyRange}>Apply</Button>
            </div>
          </Card>
        </ClickAwayListener>
      </Popper>
    </div>
  );
};
