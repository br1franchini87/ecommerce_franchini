import React, { useEffect, useState } from "react";
import Item from "./Item";
import { Container } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { collection, getFirestore, getDocs, query, where } from "firebase/firestore";

const ItemList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const db = getFirestore();
            const queryCollection = collection(db, "items");
            const queryCollectionFilter = query(queryCollection, where("category", "==", id));
            getDocs(queryCollectionFilter)
                .then((data) => setProducts(data.docs.map((item) => ({ id: item.id, ...item.data() }))), setLoading(true))
                .catch((error) => console.log(error))
                .finally(setLoading(false));
        } else {
            const db = getFirestore();
            const queryCollection = collection(db, "items");
            getDocs(queryCollection)
                .then((data) => setProducts(data.docs.map((item) => ({ id: item.id, ...item.data() }))), setLoading(true))
                .catch((error) => console.log(error))
                .finally(setLoading(false));
        }
    }, [id]);

    return (
        <div>
            {loading ? (
                <Container style={{ display: "flex", justifyContent: "center" }}>
                    <Spinner animation='border' role='status' />
                </Container>
            ) : (
                <Item products={products} />
            )}
        </div>
    );
};

export default ItemList;
