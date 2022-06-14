import React from "react";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
    const { img, title, stock, description, price } = product;

    const initial = 1;

    const onAdd = (count) => {
        console.log(count);
    };

    return (
        <div>
            <Row style={{ flexDirection: "column" }}>
                <Col md={3}>
                    <Image src={img} alt={title} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{title}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>{description}</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Precio :</Col>
                                    <Col>
                                        <strong>${price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>{stock > 0 ? <h6 style={{ color: "lightGreen", fontWeight: "bold" }}>Disponible</h6> : <h6 style={{ color: "red" }}>Sin Stock!</h6>}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item style={{ margin: "0 auto" }}>
                                <ItemCount initial={initial} stock={stock} onAdd={onAdd} />
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default ItemDetail;