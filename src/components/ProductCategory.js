import React from 'react'

import { Container, Card, Col, MDBCardTitle } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import clothes from '../assets/image/clothes.jpg'
import furnitures from '../assets/image/furnitures.jpg'
import electronic from '../assets/image/electronic.jpg'
import skincare from '../assets/image/skincare.jpg'
import grocery from '../assets/image/grocery.jpg'

const ProductCategory = props => {

    let img;

    const settings = {
        dots: true,
        infinite: false,
        arrow: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
    

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>

            <Container>
                <div className="clearfix mt-5 mb-2">
                    <h4 className="float-left">Categories</h4>

                </div>
                <Slider {...settings}>
                    {props.categories.map(function (category) {

                        if (category === "clothes") img = clothes
                        else if (category === "furnitures") img = furnitures
                        else if (category === "electronic") img = electronic
                        else if (category === "skincare") img = skincare
                        else if (category === "grocery") img = grocery


                        return (
                            <React.Fragment>
                                <Link to={`/category/${category}`}>
                                    <Col>
                                        <Card className="shadow-none" >
                                            <img
                                                variant="top"
                                                src={img}
                                                style={{
                                                    width: "12rem",
                                                    height: "12rem",
                                                    objectFit: "cover",
                                                    display: "block",
                                                    margin: "2px"

                                                }}
                                                alt=""
                                            />
                                        </Card>
                                        <Card.Title className="mt-5 ml-5">{category}</Card.Title>
                                    </Col>
                                </Link>
                            </React.Fragment>
                        );
                    })}
                </Slider>
            </Container>
        </>
    )
}

export default ProductCategory
