import { JordanIcon } from "../../../assets/icons"
import { Descripton, Header, Hero, HeroBackground, HeroContent, Logo, TextBox, Title } from "./styles"

function HeroComponent() {
    return (
        <Hero>
            <Header>
                <p>Frete grátis para todo o Brasil</p>
            </Header>
            <HeroBackground>
                <HeroContent>
                    <TextBox>
                        <Logo><JordanIcon /> JordanShoes</Logo>
                        <Title>A melhor loja de Jordan</Title>
                        <Descripton>
                            O tênis Jordan é fruto de uma velha e forte
                            parceria entre a Nike e o jogador Michael Jordan.
                        </Descripton>
                    </TextBox>
                </HeroContent>
            </HeroBackground>
        </Hero>


    )
}

export default HeroComponent