import React from 'react';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import images from './../../../assets/images/images';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import SidebarItem from './components/SidebarItem';
const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('user')}>
                    <img src={images.imageUser} alt="user" />
                    <span>Mạc Trung Nam</span>
                </div>
                <div className={cx('list')}>
                    <SidebarItem link={'/admin/them-bai-viet'} title={'Danh sách bài viết'} />
                    <SidebarItem link={'/admin/thong-ke'} title={'Thống kê'} />
                </div>

                <div className={cx('logOut')}>
                    <div>
                        <FontAwesomeIcon icon={faRightFromBracket} className={cx('icon')} />
                    </div>
                    <span>Đăng Xuất</span>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
