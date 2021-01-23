import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Row, Col } from 'reactstrap'
function Cart() {
    const [cartProducts] = useState([useSelector(state => state.home.cartValue)]);
    const [total,setTotal] = useState(0)
    console.log(cartProducts[0].length)

    return (
        <div>

            <section style={{ top: "10vh", position: "relative" }}>
                <div className='container' >


                    <h3 >Shopping Cart</h3>
                    {cartProducts[0].length}
                    <hr />
                    {cartProducts[0].map((cartProduct, index) => (

                        <Row style={{ borderBottom: "1px solid #DDD", borderBottomStyle: 'dashed', margin: "10px 0px" }}>
                            <Col md='8' style={{ padding: "0" }} className='d-flex' >

                                <div style={{ width: "300px" }}>
                                    <img style={{ height: "170px" }} className='product-img' src={cartProduct.image} alt={cartProduct.name} />
                                </div>

                                <div style={{ marginLeft: "4rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                    <div style={{ fontSize: "20px" }}>
                                        {cartProduct.name}, &nbsp;
                                        {cartProduct.display_unit}
                                    </div>
                                    <div>
                                        <span style={{ color: "green" }}>In stock</span>
                                    </div>
                                    <div>
                                        <div>

                                            {
                                                cartProduct.discount_percent === 0 ?
                                                    ''
                                                    :
                                                    <>
                                                        <del>Rs {cartProduct.selling_price}</del> &nbsp;
                                                    <span style={{ color: "red" }}>{cartProduct.discount_percent}%</span>
                                                    </>
                                            }
                                            <div>
                                                Rs
                                                {cartProduct.effective_price}
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </Col>
                            <Col>
                                <div style={{ height: "100%", marginLeft: "4rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                    Subtotal :
                                    Rs
                                    {cartProduct.effective_price}
                                    
                                </div>
                            </Col>
                        </Row>

                    ))}
                    <Row>
                        <Col>
                        Total = {total}
                        </Col>
                    </Row>


                </div>
            </section>

        </div>
    );
}

export default Cart;