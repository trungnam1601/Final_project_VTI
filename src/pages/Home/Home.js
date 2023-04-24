import React from 'react';

import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { Container, Row } from 'react-bootstrap';
import Article from './components/Article/Article';
import images from '../../assets/images/images';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div classNames={cx('wrapper')}>
            <Container>
                <Row>
                    <Article
                        title={'Mối quan hệ biện chứng giữa Redux và Context trong ReactJS'}
                        createdDate={'9 Tháng 4 2022'}
                        estduration={'10'}
                        content={
                            'Xin chào tất cả các bạn, chào mừng các bạn đã đến với VTI Blog, tiếp nối về chủ đề ReactJS, hôm nay chúng ta tiếp tục tìm hiểu về một chủ đề ...'
                        }
                        coverImageUrl={images.reactvsredux}
                    />

                    <Article
                        title={'Mối quan hệ biện chứng giữa Redux và Context trong ReactJS'}
                        createdDate={'9 Tháng 4 2022'}
                        estduration={'10'}
                        content={
                            'Xin chào tất cả các bạn, chào mừng các bạn đã đến với VTI Blog, tiếp nối về chủ đề ReactJS, hôm nay chúng ta tiếp tục tìm hiểu về một chủ đề ...'
                        }
                        coverImageUrl={images.reactvsredux}
                    />
                </Row>
            </Container>
        </div>
    );
}

export default Home;
