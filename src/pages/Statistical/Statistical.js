import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

import styles from './Statistical.module.scss';
import classNames from 'classnames/bind';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            font: {
                size: 18,
            },
            color: '#000',
            text: 'Tuần 22 (22 Tháng 4 - 29 Tháng 4 2023)',
        },
    },
};
const cx = classNames.bind(styles);
function Statistical() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h2>Thống kê số lượt xem theo tuần</h2>
                <Bar
                    data={{
                        labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ Nhật'],
                        datasets: [
                            {
                                label: 'Lượt xem',
                                backgroundColor: '#3cba9f',
                                data: [12, 40, 34, 65, 71, 22, 55],
                            },
                        ],
                    }}
                    options={options}
                />
            </div>
        </div>
    );
}

export default Statistical;
