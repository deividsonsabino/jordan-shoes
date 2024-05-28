import { Sneaker } from "../../../interfaces";
import { Card, Image, Model, Brand, Price } from "./styles";

function CardComponent(props: Sneaker) {
    return (
        <Card>
            <Image src={props.image} alt={props.image} />
            <Model>{props.model}</Model>
            <Brand>{props.brand}</Brand>
            <Price>R$ {props.price}</Price>
        </Card>
    )
}

export default CardComponent;