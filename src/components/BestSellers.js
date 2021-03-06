import React from 'react'

import { Container, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const BestSellers = props => {
    const settings = {
        dots: true,
        infinite: false,

        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
       
        cssEase: "linear",

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
                    <h4 className="float-left">Best Sellers</h4>

                </div>
                <Slider {...settings}>
                    {props.products.map(function (product) {
                        return (
                            <React.Fragment>
                                <Link to={`/product/details/${product._id}`}>
                                    <Col>
                                        <Card >
                                            <Card.Img
                                                variant="top"
                                                src={product.photoURL}
                                                style={{
                                                    width: "12rem",
                                                    height: "12rem",
                                                    objectFit: "cover",
                                                    display: "block",
                                                    margin: "2px"

                                                }}
                                            />

                                        </Card>
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

export default BestSellers
