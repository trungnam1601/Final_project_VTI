import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArticleRow from './Component/ArticleRow/ArticleRow';
import classNames from 'classnames/bind';
import styles from './AdminPage.module.scss';
import { Button } from '@mui/material';
import { Table } from 'react-bootstrap';
const cx = classNames.bind(styles);

function AdminPage() {
    const navigate = useNavigate();
    return (
        <div className={cx('wrapper')}>
            <h2> Danh sách bài viết</h2>

            <div className={cx('fillter')}>
                <div className={cx('input')}>
                    <input placeholder="Nhập vào tiêu đề"></input>
                    <input type="date" placeholder="Ngày đăng"></input>
                    <input type="date" placeholder="Ngày đăng đến ngày"></input>
                </div>

                <div className={cx('button')}>
                    <Button variant="contained" className={cx('find', 'btn')}>
                        Tìm kiếm
                    </Button>
                    <Button
                        variant="contained"
                        className={cx('add', 'btn')}
                        onClick={() => navigate('/admin/them-bai-viet')}
                    >
                        Thêm mới
                    </Button>
                </div>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên Bài Viết</th>
                        <th>Tác Giả</th>
                        <th>Ngày Đăng</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <ArticleRow />
                </tbody>
            </Table>
        </div>
    );
}

export default AdminPage;
