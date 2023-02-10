/* eslint-disable testing-library/no-node-access */
import { renderTheme } from '../../styles/reder-theme';
import Home from './index';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/themes';


test('renders learn react link', () => {
  renderTheme(<Home />);
  // eslint-disable-next-line no-unused-vars
  const { debug } = renderTheme(<Home />);
  const headingContainer = screen.getByRole('heading', { name: 'Hello' })
    .parentElement;
  expect(headingContainer).toHaveStyle({
    background: theme.colors.mainBg,
  });
  expect(headingContainer).toMatchSnapshot();
  expect(headingContainer).toHaveStyleRule('background', 'red');
});
