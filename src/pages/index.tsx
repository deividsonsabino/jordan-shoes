import { Fragment } from "react/jsx-runtime"
import { HeadingComponent, HeroComponent } from "./components"
import { Content, Cards } from "./styles"

import sneaker1 from "../assets/images/air-jordan-1-high-zoom-cmft-tropical-twist-1-400.png"
import sneaker2 from "../assets/images/air-jordan-1-mid-bright-citrus-1-10001.png"
import sneaker3 from "../assets/images/air-jordan-1-mid-dutch-green-1-400.png"
import sneaker4 from "../assets/images/air-jordan-1-mid-grey-camo-1-10001.png"
import sneaker5 from "../assets/images/air-jordan-1-mid-light-smoke-grey-gs-1-1000.png"
import sneaker6 from "../assets/images/air-jordan-1-retro-high-court-purple-w-1-400.png"

import CardComponent from "./components/CardComponent"

const sneakersData = [{
    "image": sneaker1,
    "model": "Air Jordan 1 Mid Dutch Green",
    "brand": "Tênis Air Jordan",
    "price": "1.199,99"
}, {
    "image": sneaker2,
    "model": "Air Jordan 1 High Zoom CMFT Tropical Twist",
    "brand": "Tênis Air Jordan",
    "price": "1.049,00"
}, {
    "image": sneaker3,
    "model": "Air Jordan 1 Mid Dutch Green",
    "brand": "Tênis Air Jordan",
    "price": "1.350,00"
}, {
    "image": sneaker4,
    "model": "Air Jordan 1 Mid GS 'Light Smoke Grey'",
    "brand": "Tênis Air Jordan",
    "price": "1.585,00"
}, {
    "image": sneaker5,
    "model": "Air Jordan 1 Mid SE Bright Citrus",
    "brand": "Tênis Air Jordan",
    "price": "949,99"
}, {
    "image": sneaker6,
    "model": "Air Jordan 1 Mid Grey Camo",
    "brand": "Tênis Air Jordan",
    "price": "999,99"
}]

function HomePage() {
    return (
        <Fragment>
            <HeroComponent />
            <Content>
                <HeadingComponent />
                <Cards>
                    {sneakersData.map(sneaker => (
                        <CardComponent {...sneaker} />
                    ))}
                </Cards>

            </Content>
        </Fragment>
    )
}

export default HomePage