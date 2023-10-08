import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './NavBar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;
    const t = useTranslation;

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to={"/"} className={cls.navLink} theme={AppLinkTheme.SECONDARY}>{t('Main Page')}</AppLink>
                <AppLink to={"/about"} className={cls.navLink} theme={AppLinkTheme.SECONDARY}>{t('About Page')}</AppLink>
            </div>
        </div>
    );
};
