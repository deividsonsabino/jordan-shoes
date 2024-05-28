import styled from "styled-components";
import { device } from "../../../utils";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 8px 0;
    p {
        margin: 0;
    }
`
export const Image = styled.img`
    background-color: var(--dark-20);
    padding: 50px;
    width: 225px;
    height: 135px;
`
export const Model = styled.p`
    padding-top: 18px;
    color: var(--dark-10);
    font-size: 18px;
    font-weight: 700;
    line-height: 23.4px;

    @media (${device.sm}) {
        font-size: 16px;
        font-weight: 700;
        line-height: 20.8px;
        text-align: left;
  }


`
export const Brand = styled.p`
    padding-top: 12px;
    color: var(--brand-color);
    font-size: 16px;
    font-weight: 500;
    line-height: 17.41px;
`
export const Price = styled.p`
    color: var(--dark-10);
    font-weight: 700;
    padding-top: 24px;
    font-size: 20px;
    line-height: 25.52px;
`