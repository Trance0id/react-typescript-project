import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import { App } from './app/App';
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider';

import 'shared/config/i18n/i18n';

render(
    <StrictMode>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StrictMode>,
    document.getElementById('root'),
);
