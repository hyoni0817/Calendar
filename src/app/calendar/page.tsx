import React from 'react';

const Calendar = () => {
    const date = new Date();
    const dayOfTheWeek = ['일', '월', '화', '수', '목', '금', '토'];
    const lastDayOfTheMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const currentYear = Number(date.getFullYear());
    const currentMonth = Number(date.getMonth());
    const currentDate = Number(date.getDate());
    const startDay = new Date(currentYear, currentMonth, 1).getDay(); // 1일에 해당하는 요일 
    const endDay = new Date(currentYear, currentMonth, lastDayOfTheMonth[currentMonth]).getDay();
    const numOfWeek = Math.floor(lastDayOfTheMonth[currentMonth] / 7) + (new Date(currentYear, currentMonth, 1).getDay() > 4 ? 2 : 1); // 1일이 금요일부터 시작되면 한 주를 더 해준다.

    return (
        <div>
            <h1>{currentMonth+1}월</h1>
            <table>
                <thead>
                    <tr>
                        {dayOfTheWeek.map((day) => <th key={day}>{day}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {
                        React.Children.toArray(Array(numOfWeek).fill('').map((num, weekIdx) => <tr>
                            {React.Children.toArray(Array(7).fill('').map((num, dateIdx) => {
                                const dateValue = (weekIdx * 7 - startDay) + (dateIdx + 1);
                                if (dateValue > 0 && dateValue <= lastDayOfTheMonth[currentMonth]) {
                                    return <td>{dateValue}</td>
                                }
                                if (dateValue <= 0) {
                                    return <td>-</td>
                                }
                                if (dateValue > lastDayOfTheMonth[currentMonth]) {
                                    return <td>-</td>
                                }
                            }))}
                    </tr>))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Calendar;