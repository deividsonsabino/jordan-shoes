import { JordanIcon } from "../../../assets/icons"
import { Container, Content, Descripton, Header, Hero, HeroBackground, Logo, TextBox, Title } from "./styles"

function HeroComponent() {
    return (
        <Hero>
            <Header>
                <p>Frete grátis para todo o Brasil</p>
            </Header>
            <HeroBackground>
                <Container>
                    <Content>
                        <TextBox>
                            <Logo><JordanIcon /> JordanShoes</Logo>
                            <Title>A melhor loja de Jordan</Title>
                            <Descripton>
                                O tênis Jordan é fruto de uma velha e forte
                                parceria entre a Nike e o jogador Michael Jordan.
                            </Descripton>
                        </TextBox>
                    </Content>
                </Container>

            </HeroBackground>
        </Hero>


    )
}

export default HeroComponent