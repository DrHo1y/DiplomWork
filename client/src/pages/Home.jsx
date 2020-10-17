import React from 'react'
import { Row, Col, Carousel } from 'react-materialize'
export const Home = () => {
    return (
        <Row>
            <Col
                className="teal white-text"
                l={10}
                s={12}
                offset='l1'
            >
                <div className="content">
                    <Carousel
                        carouselId="Carousel-2"
                        className="white-text center"
                        options={{
                            fullWidth: true,
                            indicators: true
                        }}
                    >
                        <div className="red">
                            <h2>
                                First Panel
                            </h2>
                            <p>
                                This is your first panel
                            </p>
                        </div>
                        <div className="amber">
                            <h2>
                                Second Panel
                        </h2>
                            <p>
                                This is your second panel
                        </p>
                        </div>
                        <div className="green">
                            <h2>
                                Third Panel
                            </h2>
                            <p>
                                This is your third panel
                            </p>
                        </div>
                        <div className="blue">
                            <h2>
                                Fourth Panel
                            </h2>
                            <p>
                                This is your fourth panel
                            </p>
                        </div>
                    </Carousel>
                </div>
            </Col>
            <Col
                className="teal white-text"
                l={10}
                s={12}
                offset='l1'
            >
                <div className="text-lol">
                    <p>Популярные товары</p>
                </div>
            </Col>
        </Row>
    )
}