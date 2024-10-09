import { Box, Button, Dialog } from "@mui/material";
import { addDays, subDays } from "date-fns";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "../../types/data";

export interface DatePickerModalProps {
    open: boolean;
    selectedValue?: string;
    onClose: (value: string) => void;
    onDateRangeSelect: (dateRange: DateRange) => void;
}

const DatePickerModal = (props: DatePickerModalProps) => {
    const { onClose, selectedValue, open, onDateRangeSelect } = props;

    const [state, setState] = useState([
        {
            startDate: subDays(new Date(), 0),
            endDate: addDays(new Date(), 0),
            key: "selection"
        }
    ]);

    const [tempState, setTempState] = useState(state);

    const handleOnChange = (ranges: any) => {
        const { selection } = ranges;
        setTempState([selection]);
    };

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleFilter = () => {
        const currentRange = state[0];
        const newRange = tempState[0];
        if (
            currentRange.startDate.getTime() === newRange.startDate.getTime() &&
            currentRange.endDate.getTime() === newRange.endDate.getTime()
        ) {
            handleClose();
            return;
        }
        onDateRangeSelect({
            start: newRange.startDate,
            end: newRange.endDate
        });
        setState(tempState);
        handleClose();
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <Box>
                <DateRangePicker
                    onChange={handleOnChange}
                    moveRangeOnFirstSelection={false}
                    months={1}
                    ranges={tempState}
                    direction="horizontal"
                    staticRanges={[]}
                    inputRanges={[]}
                    className="custom-date-range-picker"
                    maxDate={new Date()}
                />
                <Box sx={{ textAlign: 'right', padding: 1.5, display: "flex", alignItems: "center", gap: "12px" }}>
                    <Button
                        sx={{ fontSize: "12px", flexGrow: 1, width: "100%" }}
                        variant="contained"
                        color="primary"
                        onClick={handleFilter}
                    >
                        Filter
                    </Button>
                    <Button
                        sx={{ fontSize: "12px", flexGrow: 1, width: "100%" }}
                        variant="contained"
                        color="error"
                        onClick={handleFilter}
                    >
                        Cancel
                    </Button>
                </Box>
            </Box>
        </Dialog>
    );
};

export default DatePickerModal;
