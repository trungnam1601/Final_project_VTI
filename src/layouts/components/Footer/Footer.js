import React from 'react';

import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <span>Bản quyền thuộc về VTI FR03 @ Copyright 2023</span>
        </div>
    );
}

export default Footer;
