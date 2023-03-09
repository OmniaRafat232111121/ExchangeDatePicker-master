import React,{ReactElement, useState} from 'react'
import './CalenderPicker.css';
import '../Calender/Calender.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface calenderPicker  {
    id: string;
    title: string;
    getDate: (date: Date) => void;
    active: string;
    setActive: (active: string) => void;
}

function CalenderPicker (props: calenderPicker):ReactElement {
    const {id,title,getDate,active,setActive}=props;
    const [date,setDate]=useState(null);
  return (
    <div className='calender_picker'>
        <div
        // ADD ACTIVE CLASS DINAMICALLY USING TERNARY-OPERATOR
        className=
        {`.calender_picker_title
        ${props.active === id ? 'active' : ''}`}
        id={id}
      >
        {title}
      </div>
        

        <Calendar
        className='calender'
        value={date}
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
          }, 300);
        }}
      />
     
    </div>
  )
}

export default CalenderPicker

