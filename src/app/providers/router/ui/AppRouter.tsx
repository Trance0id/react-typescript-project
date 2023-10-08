import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routerConfig/routeConfig";


export function AppRouter() {
    const t = useTranslation;
    
    return (
        <Suspense fallback={<div className="page-wrapper">{t('Loading ...')}</div>}>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) =>
                    <Route
                        key={path}
                        element={
                            <div className="page-wrapper">
                                {element}
                            </div>}
                        path={path}
                    />)}
            </Routes>
        </Suspense>
    );
}
