import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routerConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

export function AppRouter() {
    const { t } = useTranslation();

    return (
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    element={(
                        <Suspense fallback={<PageLoader />}>
                            <div className="page-wrapper">
                                {element}
                            </div>
                        </Suspense>
                    )}
                    path={path}
                />
            ))}
        </Routes>
    );
}
