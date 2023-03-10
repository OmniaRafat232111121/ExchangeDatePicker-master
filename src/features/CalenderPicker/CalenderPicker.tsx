import React,{ useState} from 'react'
import { FC } from 'react';
//styles
import './CalenderPicker.css';
import '../Calender/Calender.css'
//package calender
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface calenderPicker {
    id: string;
    title: string;
    getDate: (date: Date) => void;
    active: string;
    setActive: (active: string) => void;
}
const CalendarPicker: FC<calenderPicker> = ({
  id,
  title,
  getDate,
  active,
  setActive,
}: calenderPicker) => {

    const [date,setDate]=useState(null);
  return (
    <div className='calender_picker'>
       
      <div className='calender-title'>
      {title}
      </div>
      

        <Calendar
        className='calender'
        value={date}
        // selectRange={true}
        onChange={(e: any) => {
          setDate(e);
        }}

        onClickDay={(e: Date) => {
          getDate(e);
          setTimeout(() => {
            if (id === 'start') {
              setActive('end');
            }
            if (id === 'end') {
              setActive('start');
            }
          }, 400);
        }}
      />
      
     
    </div>
  )
}

export default CalendarPicker

