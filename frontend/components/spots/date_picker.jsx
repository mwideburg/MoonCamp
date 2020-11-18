import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

export const Example = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const placeHolder = <FontAwesomeIcon icon={faCalendar}/> 
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
                placeholderText="Enter Dates"
                showDisabledMonthNavigation
                className="btn-dropdown"
            />
        </div>
    );
};