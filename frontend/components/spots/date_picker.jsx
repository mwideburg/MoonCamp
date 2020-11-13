import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const Example = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const onChange = dates => {
        const [start, end] = dates;
        setStartDate(start);
        
        if(startDate === null){
            return null
        }
        setEndDate(end);
        
    };
    return (
        <div  id="calendar-search">
            <DatePicker
                selected={startDate}
                id="calendar-search"
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                minDate={new Date()}
                selectsRange
                placeholderText="Select Dates"
                showDisabledMonthNavigation
                className="btn-dropdown"
            />
        </div>
    );
};