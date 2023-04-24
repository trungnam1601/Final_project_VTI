import React from 'react';

import styles from './UserComment.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function UserComment({ avatarUrl, fullName, content }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('user')}>
                <img src={avatarUrl} alt="user" />
                <span>{fullName}</span>
            </div>
            <p>{content}</p>
        </div>
    );
}

export default UserComment;
