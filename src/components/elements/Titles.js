import styled from "styled-components";

export const Title = styled.h1`
  color: ${({ theme: { colors } }) => colors.neutrals[600]};
  font-family: ${({ theme: { fonts } }) => fonts.display[0]};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xl};

  text-align: center;
`;

export const Subtitle = styled.p`
  color: ${({ theme: { colors } }) => colors.neutrals[400]};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.regularPlus};
  text-align: center;
  padding-bottom: 2rem;
`;
