import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ products }) => {
    return (
        <div>
            <Container style={{ display: "flex" }}>
                {products.map((singleProduct) => (
                    <div key={singleProduct.id} className='card mb-3' style={{ width: "20%", margin: ".5rem" }}>
                        <h3 className='card-header'>{singleProduct.title}</h3>
                        <img src={singleProduct.img} alt='foto producto' style={{ width: "200px", height: "150px", margin: "0 auto" }} />
                        <div className='card-body'>
                            <p>{singleProduct.description}</p>
                            <h5 className='card-title'><strong>${singleProduct.price}</strong></h5>
                        </div>
                        <div className='gap-1 text-center mb-3'>
                            <Link to={`/detalle/${singleProduct.id}`}>
                                <button type='button' className='btn-sm btn btn-outline-info'>
                                    Ver detalle
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </Container>
        </div>
    );
};

export default Item;
