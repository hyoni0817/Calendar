import React from 'react';

const Calendar = () => {
    const date = new Date();
    const dayOfTheWeek = ['일', '월', '화', '수', '목', '금', '토'];
    const lastDayOfTheMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const currentYear = Number(date.getFullYear());
    const currentMonth = Number(date.getMonth());
    const numOfWeek = Math.floor(lastDayOfTheMonth[currentMonth] / 7) + (new Date(currentYear, currentMonth, 1).getDay() > 4 ? 2 : 1); // 1일이 금요일부터 시작되면 한 주를 더 해준다.
    // 25, 26, 27, 28, 19, 30, 1
    // 2, 3, 4, 5, 6, 7, 8
    // 9, 10, 11, 12, 13, 14, 15,
    // 16, 17, 18, 19, 20, 21, 22,
    // 23, 24, 25, 26, 27, 28, 29,
    // 30, 31, 1, 2, 3, 4, 5
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
                        React.Children.toArray(Array(numOfWeek).fill('').map((num, idx) => <tr>
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
                    </tr>))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Calendar;