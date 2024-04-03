import {React, useEffect, useState} from 'react';
import "react-datepicker/dist/react-datepicker.css";
import './App.css';
import ReactDatePicker from 'react-datepicker';
// Utilizado componente ReactDatePicker -> https://github.com/Hacker0x01/react-datepicker


export default function App() {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [dateTotal, setDateTotal] = useState(0);

  useEffect(() => {
      calDataTimeTotal(startDate, endDate);
  });

  function calDataTimeTotal(startDate, endDate) {
    let totalTime = endDate.getTime() - startDate.getTime();
    totalTime = Math.round(totalTime / (1000 * 3600 * 24));
    setDateTotal(totalTime);
  }

  return (
    <div className="App">
        <h1>Calendário</h1>
      <div className='DatePicker'>
        <ReactDatePicker
          showIcon
          selected={startDate}
          onChange={data => setStartDate(data)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
      </div>
      <div className='DatePicker'>
        <ReactDatePicker
          showIcon
          selected={endDate}
          onChange={data => setEndDate(data)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
      </div>

      <h1>Dias Total: {dateTotal} </h1>
    </div>
  );
}
