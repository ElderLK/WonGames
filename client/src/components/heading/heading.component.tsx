import * as Styles from './heading.styles';

export type Props = {
  children: React.ReactNode;
  color?: 'white' | 'black';
  lineLeft?: boolean;
  lineBottom?: boolean;
};

export const Heading: React.FC<Props> = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false
}) => {
  return (
    <Styles.Wrapper color={color} lineLeft={lineLeft} lineBottom={lineBottom}>
      {children}
    </Styles.Wrapper>
  );
};
