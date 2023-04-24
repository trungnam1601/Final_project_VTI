import React from 'react';
import ArticleDetail from './components/ArticleDetail/ArticleDetail';
import UserComment from './components/UserComment/UserComment';
import images from '../../assets/images/images';
import { Button, Container, Row } from 'react-bootstrap';
import styles from './Detail.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Detail() {
    return (
        <Container>
            <Row>
                <ArticleDetail
                    title={'Mối quan hệ biện chứng giữa Redux và Context trong ReactJS'}
                    createdDate={'9 Tháng 4 2022'}
                    estduration={'10'}
                    content={
                        'Xin chào tất cả các bạn, chào mừng các bạn đến với blog VTI. Hm hm, cũng lâu rồi kể từ khi mình bắt đầu những bài viết đầu tiên trên blog, bắt đầu tìm đến thú vui gõ phím viết bài chém gió, à nhầm, thảo luận, cùng các bạn. Hôm nay mình sẽ lên cho các bạn một bài viết về chủ đề đã làm thổn thức bao trái tim của các Spring Developer cũng nói riêng cũng như Java developer nói chung. Đó chính là Spring AOP. AOP là cái chi chi và nó có mối quan hệ như thế nào với Transactional, liệu có phải biện chứng như cái tiêu đề mình đã đặt ở trên hay không? Trong bài viết này, mình sẽ giúp các bạn trả lời những câu hỏi đó nhé. Xin chào tất cả các bạn, chào mừng các bạn đến với blog VTI. Hm hm, cũng lâu rồi kể từ khi mình bắt đầu những bài viết đầu tiên trên blog, bắt đầu tìm đến thú vui gõ phím viết bài chém gió, à nhầm, thảo luận, cùng các bạn. '
                    }
                    fullName={'Nguyễn Khắc Tư'}
                    avatarUrl={images.imageUser}
                    coverImageUrl={images.reactvsredux}
                />
            </Row>
            <div className={cx('comment')}>
                <h3>Bình Luận</h3>
                <UserComment
                    avatarUrl={images.imageUser}
                    fullName={'Mạc Trung Nam'}
                    content="Hay quá anh ơi!!!!! Mong anh tiếp tục ra các bài viết tiếp theo về tối ưu hiệu năng trong ứng dụng ReactJS ạ."
                />

                <UserComment
                    avatarUrl={images.imageUser}
                    fullName={'Mạc Trung Nam'}
                    content="Hay quá anh ơi!!!!! Mong anh tiếp tục ra các bài viết tiếp theo về tối ưu hiệu năng trong ứng dụng ReactJS ạ."
                />

                <textarea className={cx('input')} placeholder="Nhập vào bình luận của bạn" />
                <div className={cx('button')}>
                    <Button className={cx('btn')}>Bình Luận</Button>
                </div>
            </div>
        </Container>
    );
}

export default Detail;
