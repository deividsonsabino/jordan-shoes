import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 0 auto;

    max-width: 1216px;
`

export const Cards = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(3, 384px);
`