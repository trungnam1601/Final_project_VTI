import React from 'react';
import styles from './ArticleDetail.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../assets/images/images';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);
function ArticleDetail({ title, createdDate, content, coverImageUrl, avatarUrl, fullName, estduration }) {
    return (
        <Col className={cx('wrapper')}>
            <div className={cx('image')}>
                <img src={coverImageUrl} alt="contentImage" />
            </div>
            <div className={cx('inner')}>
                <h2 className={cx('title')}>{title}</h2>
                <div className={cx('information-create')}>
                    <img src={avatarUrl} className={cx('user_img')} alt="img" />
                    <span className={cx('fullname')}>{fullName}</span>
                    <span className={cx('create-date')}>{createdDate}</span>
                    <img src={images.book} alt="book" />
                    <span className={cx('time-read')}>{estduration} phút đọc</span>
                </div>
                <p className={cx('content')}>
                    {content} <br /> {content}
                </p>
            </div>
            <div className={cx('favourite')}>
                <FontAwesomeIcon icon={faHeart} className={cx('icon')} />
                <p>Yêu thích</p>
            </div>
        </Col>
    );
}

export default ArticleDetail;
