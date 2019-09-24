import React from 'react';
import { render } from '@testing-library/react';
import Button, { BUTTON_TEXT } from './Button';

const renderComponent = (props) => {
    return render(<Button {...props}/>);
};

describe('<Button/>', () => {
    it('should render the correct button text if type 0 or 1', () => {
        const { getByText } = renderComponent({ type: 0 });
        expect(getByText(BUTTON_TEXT.GET_QUOTE)).toBeDefined();
    });

    it('should render the correct button text if type 3', () => {
        const { getByText } = renderComponent({ type: 3 });
        expect(getByText(BUTTON_TEXT.BUY_NOW)).toBeDefined();
    });
});