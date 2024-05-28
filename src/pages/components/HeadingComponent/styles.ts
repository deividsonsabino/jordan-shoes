import styled from "styled-components";
import { device } from "../../../utils";

export const Heading = styled.header`

    max-width: 593px;

    @media (${device.sm}) {
        max-width: 319px;
    }

    @media (${device.md}) {
        max-width: 520px;
    }



    :first-child {
        font-size: 32px;
        font-weight: 600;
        line-height: 34.82px;

        @media (${device.sm}) {
            font-size: 20px;
            font-weight: 600;
            line-height: 21.76px;
        }

        @media (${device.sm}) {
            font-size: 24px;
            font-weight: 600;
            line-height: 26.11px;
        }
    }

    

    p {
        font-size: 24px;
        font-weight: 400;
        line-height: 33.6px;
        text-align: center;

        @media (${device.sm}) {
            font-size: 14px;
            font-weight: 400;
            line-height: 19.6px;
        }

        @media (${device.sm}) {
            font-size: 16px;
            font-weight: 400;
            line-height: 22.4px;
        }
    }

`