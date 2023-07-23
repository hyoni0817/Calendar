import React from 'react';

const Calendar = () => {
    const date = new Date();
    const dayOfTheWeek = ['일', '월', '화', '수', '목', '금', '토'];
    const lastDayOfTheMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const currentMonth = date.getMonth();

    return (
        <div>
            <h1>{currentMonth+1}월</h1>
            <table>
                <thead>
                    <tr>
                        {dayOfTheWeek.map((day) => <th key="day">{day}</th>)}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            1
                        </td>
                        <td>
                            2
                        </td>
                        <td>
                            3
                        </td>
                        <td>
                            4
                        </td>
                        <td>
                            5
                        </td>
                        <td>
                            6
                        </td>
                        <td>
                            7
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Calendar;