import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const Calendar = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div className='h-screen'>
            <div className='flex justify-center'>
                <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                />;

            </div>
            <h2 className='text-4xl my-5 text-center'>You have selected {format(date, 'PP')}</h2>
        </div>
    );
};

export default Calendar;