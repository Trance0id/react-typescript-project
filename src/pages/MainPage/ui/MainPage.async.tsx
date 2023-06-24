import { lazy } from 'react';
// @ts-ignore
export const MainPageAsync = lazy(() => new Promise(resolve => { setTimeout(() => resolve(import('./MainPage')), 1500); }));
