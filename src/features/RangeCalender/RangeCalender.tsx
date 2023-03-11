import { FC, useState } from 'react';
import moment from 'moment';
import CalendarPicker from '../CalenderPicker/CalenderPicker'

import './RangeCalender.css'
//type can be any
 type CalendarRangeProps = {
    setDate: (date: any) => void;
  };
  
const RangeCalender: FC<CalendarRangeProps> = ({setDate}: CalendarRangeProps) => {
  // add next active Class
  const [activeCalendar, setActiveCalendar] = useState('start');

  // StartDate
  const getStartDate = (startDate: Date) => {
    setDate((state: Date) => {
      return {
        ...state,
        startDate: moment(startDate).format('YYYY-MM-DD'),
      };
    });
  };

  // EndDate
  const getEndDate = (endDate: Date) => {
    setDate((state: Date) => {
      return {
        ...state,
        endDate: moment(endDate).format('YYYY-MM-DD'),
      };
    });
  };

  return (
    <div className='calender-picker'>
  <div className='calendar__range '>
       
       <CalendarPicker
         id='start'
         title='StartDate'
         active={activeCalendar}
         setActive={setActiveCalendar}
         getDate={getStartDate}
       />
     
 
       <CalendarPicker
         id='end'
         title='EndDate'
         active={activeCalendar}
         setActive={setActiveCalendar}
         getDate={getEndDate}
       />
     </div>
    </div>
  
  );
};

export default RangeCalender;
