/* eslint-disable i18next/no-literal-string */
import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('rendering', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('class', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
