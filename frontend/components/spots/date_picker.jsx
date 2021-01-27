import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

export const Example = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const placeHolder = <FontAwesomeIcon icon={faCalendar}/> 
    const onChange = dates => {
        const [startDate, endDate] = dates;
        setStartDate(startDate);
        
        if(startDate === null){
            return null
        }
        setEndDate(endDate);
        
    };
    return (
        <div  id="calendar-search">
            <DatePicker
                selected={startDate}
                id="calendar-search"
                onChange={dates => onChange(dates)}
                startDate={startDate}
                endDate={endDate}
                minDate={new Date()}
                selectsRange
                placeholderText="Check In"
                showDisabledMonthNavigation
                className="btn-dropdown"
            />
            <DatePicker
                selected={endDate}
                id="calendar-search"
                onChange={dates => onChange(dates)}
                startDate={startDate}
                endDate={endDate}
                minDate={new Date()}
                selectsRange
                minDate={startDate}
                placeholderText="Check Out"
                showDisabledMonthNavigation
                className="btn-dropdown"
            />
        </div>
    );
};