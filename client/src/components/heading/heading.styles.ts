import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';
import { Props } from './heading.component';

const wrapperModifier = {
  lineLeft: (theme: DefaultTheme) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors.secondary};
  `,
  lineBottom: (theme: DefaultTheme) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      position: absolute;
      left: 0;
      bottom: -1rem;
      content: '';
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors.primary};
    }
  `
};

export const Wrapper = styled.h2<Props>`
  ${({ theme, color, lineLeft, lineBottom }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors?.[color!]};

    ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.xxlarge};
    `}

    ${lineLeft && wrapperModifier.lineLeft(theme)}
    ${lineBottom && wrapperModifier.lineBottom(theme)}
  `}
`;
