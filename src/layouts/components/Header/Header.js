import React from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import NavbarItem from './components/NavbarItem/NavbarItem';
import config from '../../../config/config';
// import images from '../../../assets/images/images';
const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('navbar')}>
                    <Link className={cx('logo')} to="/">
                        VTI Blog
                    </Link>
                    <div className={cx('navbar_item')}>
                        <NavbarItem link={config.routes.home} title={'Trang chủ'} />
                        <NavbarItem link={config.routes.favourite} title={'Yêu Thích'} />
                        <NavbarItem link={'/github'} title={'GitHub'} />
                    </div>
                </div>
                <div className={cx('user_NosignIn')}>
                    <NavbarItem link={config.routes.register} title={'Đăng Ký'} />
                    <NavbarItem link={config.routes.login} title={'Đăng Nhập'} />
                </div>

                {/* <div className={cx('user_signIn')}>
                    <NavbarItem link={config.routes.login} title={'Admin'} />
                    <NavbarItem link={config.routes.login} title={'Đăng Xuất'} />
                    <img src={images.imageUser} alt="userImage" />
                </div> */}
            </div>
        </header>
    );
}

export default Header;
