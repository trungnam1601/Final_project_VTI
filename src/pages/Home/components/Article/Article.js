import React from 'react';

import styles from './Article.module.scss';
import classNames from 'classnames/bind';
import { Col } from 'react-bootstrap';
import images from '../../../../assets/images/images';

const cx = classNames.bind(styles);
function Article({ title, createdDate, estduration, content, coverImageUrl }) {
    return (
        <Col className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h2 className={cx('title')}>{title}</h2>
                <div className={cx('information-create')}>
                    <span className={cx('create-date')}>{createdDate}</span>
                    <img src={images.book} alt="book" />
                    <span className={cx('time-read')}>{estduration} phút đọc</span>
                </div>
                <p className={cx('content')}>{content}</p>
            </div>
            <div className={'image'}>
                <img src={coverImageUrl} alt="contentImage" />
            </div>
        </Col>
    );
}

export default Article;
