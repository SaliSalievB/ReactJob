import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './CalendarStyles.css'; // Assuming you have your custom styles

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [attendanceType, setAttendanceType] = useState('Присъственно'); // Default value

  const handleChange = (date) => {
    setDate(date);
  };

  const handleAttendanceTypeChange = (event) => {
    setAttendanceType(event.target.value);
  };

  const handleSave = () => {
    // Handle save logic here
    console.log(`Date: ${date}, Attendance Type: ${attendanceType}`);
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <Calendar
          onChange={handleChange}
          value={date}
          minDate={new Date('2023-11-01')}
          maxDate={new Date('2023-12-31')}
        />
      </div>
      <div className="attendance-options">
        <label>
          <input
            type="radio"
            value="Присъственно"
            checked={attendanceType === 'Присъственно'}
            onChange={handleAttendanceTypeChange}
          />
          Присъственно
        </label>
        <label>
          <input
            type="radio"
            value="Дистанционно"
            checked={attendanceType === 'Дистанционно'}
            onChange={handleAttendanceTypeChange}
          />
          Дистанционно
        </label>
      </div>
      <button className="save-button" onClick={handleSave}>
        Запази
      </button>
    </div>
  );
};

export default MyCalendar;
