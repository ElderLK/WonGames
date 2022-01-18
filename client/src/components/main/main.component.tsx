import * as Styles from './main.styles';

type Props = {
  title?: string;
  description?: string;
};

export const Main: React.FC<Props> = ({
  title = 'Next boilerplate',
  description = 'NextJS, TypeScript e Styled Components'
}) => {
  return (
    <Styles.Wrapper>
      <Styles.Logo
        src="/images/logo/next-js.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />
      <Styles.Title>{title}</Styles.Title>
      <Styles.Description>{description}</Styles.Description>
    </Styles.Wrapper>
  );
};
