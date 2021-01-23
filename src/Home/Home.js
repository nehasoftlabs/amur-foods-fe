import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import './Home.css'
import CarouselGallery from './Carousel_gallery'
import Ftco_section from '../ftco-section'
import Footer from '../Footer/Footer'
import SetStarRating from '../setStarRating'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Redux/Actions/HomeAction'
import axios from "axios";
import { Increase } from '../Redux/Actions/UpdateCartAction'

import {Button} from '@material-ui/core'

function Home() {
    const [quantity,setQuantity] = useState(0)
    const AddToCart = (product) => {
        dispatch(addToCart(product))
    }

    const increase = (product) => {
        dispatch(Increase(product))
    }
    const productURL = `https://amurfoods-staging.herokuapp.com/app/home`;

    const dispatch = useDispatch();
    const [vegetables, setVegetables] = useState([])
    const [fruits, setFruits] = useState([])
    useEffect(() => {
        axios.get(productURL).then(res => {
            setVegetables(res.data.data.vegetables)
            setFruits(res.data.data.fruits)
            console.log(res.data.data)
        });

    }, [])
    return (
        <Container fluid>

            <CarouselGallery />
            
            <Ftco_section />
            <section>
                <div style={{ textAlign: "center" }} className='container'>
                    <Row>
                        <Col>
                            <span className='feature-subheading'>Featured products</span>
                            <h2 className='heading-section-h2'>Our Products</h2>
                        </Col>
                    </Row>
                </div>
                <div className='container'>
                    <Row>
                        {vegetables.map((vegetable, index) => (

                            <Col lg='3' md='6' key={index} >
                                <div className='product'>
                                    <div>
                                        <img className='product-img' alt='products' src={vegetable.image} />
                                        <span className='status'>{vegetable.discount_percent}</span>
                                    </div>
                                    <div className='vegetable-details'>
                                        <span style={{ color: "black", display: "block", fontSize: "17px" }} className='fontxl mt-2'>{vegetable.name}</span>
                                        <span style={{ color: "gray", display: "block", fontSize: "14px" }}>{vegetable.display_unit}</span>
                                        <div >
                                            <del style={{ color: "gray" }}>
                                                
                                                {vegetable.discount_percent === 0 ?
                                                    ''
                                                    :
                                                    <div>
                                                        Rs 
                                                        {vegetable.selling_price}
                                                    </div>
                                                }
                                            </del>
                                            <span>
                                                Rs 
                                                {vegetable.effective_price}
                                            </span>
                                            <div className='mt-3'>


                                                <Button variant='contained' color='primary' onClick={() => { AddToCart(vegetable); increase(vegetable) }}>Add to cart</Button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                        {fruits.map((fruit, index) => (

                            <Col lg='3' md='6' key={index} >
                                <div className='product'>
                                    <div>
                                        <img className='product-img' alt='products' src={fruit.image} />
                                        <span className='status'>{fruit.discount_percent}</span>
                                    </div>
                                    <div className='vegetable-details'>
                                        <span style={{ color: "black", display: "block", fontSize: "17px" }} className='fontxl mt-2'>{fruit.name}</span>
                                        <span style={{ color: "gray", display: "block", fontSize: "14px" }} className='fontxl'>{fruit.display_unit}</span>
                                        <div >
                                            <del style={{ color: "gray" }}>
                                                {fruit.discount_percent === 0 ?
                                                    ''
                                                    :
                                                    <div>
                                                        Rs 
                                                        {fruit.selling_price}
                                                    </div>
                                                }
                                            </del>
                                            <span>
                                                Rs 
                                                {fruit.effective_price}
                                            </span>
                                            <div className='mt-3'>


                                                <Button variant='contained' color='primary' onClick={() => { AddToCart(fruit); increase(fruit) }}>Add to cart</Button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </section>
            <Footer />
        </Container>
    );
}


export default Home;

