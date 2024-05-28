import styled from "styled-components";
import backgroundHero from "../../../assets/images/hero.png";
import { device } from "../../../utils";

export const Hero = styled.div``;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--dark-30);

  @media (${device.sm}) {
    height: 41px;
  }

  @media (${device.md}) {
    height: 41px;
  }

  @media (${device.lg}) {
    height: 64px;
  }

  p {
    @media (${device.sm}) {
      font-size: 14px;
      font-weight: 500;
    }

    @media (${device.md}) {
      font-size: 16px;
      font-weight: 500;
    }

    @media (${device.lg}) {
      font-size: 16px;
      font-weight: 500;
      line-height: 17.41px;
    }
  }
`;

export const HeroBackground = styled.div`
  display: flex;
  background-image: url(${backgroundHero});
  background-size: cover;
  background-repeat: no-repeat;
  height: 400px;
  color: var(--dark-30);
`;

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: start;
  align-items: center;

  @media (${device.sm}) {
    width: 375px;
  }

  @media (${device.md}) {
    width: 768px;
  }

  @media (${device.lg}) {
    width: 1216px;
  }
`;

export const Content = styled.div`
  display: flex;

  @media (${device.sm}) {
    width: 375px;
  }

  @media (${device.md}) {
    width: 768px;
  }

  @media (${device.lg}) {
    width: 1216px;
  }
`;

export const TextBox = styled.div`
  max-width: 557px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
`;
export const Title = styled.p`
  font-size: 32px;
`;
export const Descripton = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 33.6px;
`;
