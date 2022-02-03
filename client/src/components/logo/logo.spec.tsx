import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import 'jest-styled-components';

import { Logo } from './logo.component';

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    });
  });
  it('should render a black label when color black is provided', () => {
    renderWithTheme(<Logo color="black" />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    });
  });
  it('should render a normal logo by default', () => {
    renderWithTheme(<Logo />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem'
    });
  });
  it('should render a big logo', () => {
    renderWithTheme(<Logo size="large" />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem'
    });
  });
  it('render a biiger logo withou text if hideOnMobile', () => {
    renderWithTheme(<Logo size="large" hideOnMobile />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 768px)'
      }
    );
  });
});
