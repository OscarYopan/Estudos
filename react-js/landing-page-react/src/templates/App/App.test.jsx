import { renderTheme } from '../../styles/reder-theme';
import Home from './index';
import { screen } from '@testing-library/react';


test('renders learn react link', () => {
  renderTheme(<Home />);
  const headingContainer = screen.getByRole('heading', { name: 'Hello' })
    .parentElement;
});
