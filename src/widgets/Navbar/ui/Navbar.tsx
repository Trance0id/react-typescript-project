import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './NavBar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to="/" className={cls.navLink} theme={AppLinkTheme.SECONDARY}>Main Page</AppLink>
                <AppLink to="/about" className={cls.navLink} theme={AppLinkTheme.SECONDARY}>About Page</AppLink>
            </div>
        </div>
    );
};
