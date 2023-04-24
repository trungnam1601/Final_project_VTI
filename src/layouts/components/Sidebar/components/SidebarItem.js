import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './SidebarItem.module.scss';

const cx = classNames.bind(styles);

function SidebarItem({ link, title }) {
    return (
        <NavLink to={link} className={(nav) => cx('item', { active: nav.isActive })}>
            {title}
        </NavLink>
    );
}

export default SidebarItem;
