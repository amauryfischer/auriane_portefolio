import styled, { css } from "styled-components"

const Flex = styled.div`
  display: flex;
  ${({ alignItems }) =>
    css`
      align-items: ${alignItems};
    `}
  ${({ justifyContent }) =>
    css`
      justify-content: ${justifyContent};
    `}
  ${({ gap }) =>
    css`
      gap: ${gap};
    `}
    ${({ flexDirection }) => css`
    flex-direction: ${flexDirection};
  `}
`

export default Flex
