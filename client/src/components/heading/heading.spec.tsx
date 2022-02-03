import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import 'jest-styled-components';
import { Heading } from './heading.component';

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Head</Heading>);

    expect(screen.getByRole('heading', { name: /Head/i })).toHaveStyle({
      color: '#FAFAFA'
    });
  });
  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading color="black">Head</Heading>);

    expect(screen.getByRole('heading', { name: /Head/i })).toHaveStyle({
      color: '#030517'
    });
  });
  it('should render a heading with a border left', () => {
    renderWithTheme(
      <Heading color="black" lineLeft>
        Head
      </Heading>
    );

    expect(screen.getByRole('heading', { name: /Head/i })).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1'
    });
  });
  it('should render a heading with a line is bottom', () => {
    renderWithTheme(
      <Heading color="black" lineBottom>
        Head
      </Heading>
    );

    expect(screen.getByRole('heading', { name: /Head/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: '::after'
      }
    );
  });
});
