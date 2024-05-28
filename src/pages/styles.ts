import styled from "styled-components";
import { device } from "../utils";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 0 auto;

    @media (${device.sm}) {
    width: 375px;
  }

  @media (${device.md}) {
    width: 768px;
  }

  @media (${device.lg}) {
    width: 1216px;
  }
`

export const Cards = styled.div`
  display: grid;
  margin: 0 auto;
  margin-left: 0;
 

  @media (${device.sm}) {
    grid-template-columns: repeat(1, 319px);
  }

  @media (${device.md}) {
    grid-template-columns: repeat(2, 336px);
  }

  @media (${device.lg}) {
    grid-template-columns: repeat(3, 384px);
  }
`