import styled from "styled-components";
import backgroundHero from '../../../assets/images/hero.png'


export const Hero = styled.div`
`
export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--dark-30);
    height: 64px;

    p {
        font-size: 24px;
        font-weight: 500;
    }
`


export const HeroBackground = styled.div`
    display: flex;
    background-image: url(${backgroundHero});
    background-size: cover;
    background-repeat: no-repeat;
    height:400px;
    color: var(--dark-30);

`

export const HeroContent = styled.div`
    margin: 0 auto;
    width: 1216px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const TextBox = styled.div`
    max-width: 557px;
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    font-size: 25px;
`
export const Title = styled.p`
    font-size: 32px;
`
export const Descripton = styled.p`
    font-weight: 400;
    font-size: 24px;
    line-height: 33.6px;
`