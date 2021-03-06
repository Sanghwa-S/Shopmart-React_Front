//export default ProductDescriptionPage


import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import ProductList from "../components/ProductList";
//import { useDispatch } from 'react-redux';


import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';

import Header from '../components/Header'


const ProductDescriptionPage = () => {


    // const params = useParams();         crashes
    let id = window.location.pathname;
    console.log("id : " + id);
    let arr = [];
    arr = id.split("/");
    console.log(arr[3]);
    id = arr[3];


    const [product, setProduct] = useState({
        name: "",
        price: 0,
        description: "",
        category: "",
        quantity: "",
        isBestSeller: true,
        photoURL: ""
    })


    useEffect(() => {

        //communicate with the backend!
        fetch(`${process.env.REACT_APP_BACKEND_API_DOMAIN}/products/${id}`)
            .then(response => response.json())
            .then(json => {

                //We updated the data returned from the Backed with the resort state
                setProduct(json.data);

            })
            .catch(err => {
                console.log(`Error ${err}`)
            })


    }, [])

    return (
        <>
            <Header />
            <MDBCard style={{ width: "70rem", margin: "auto auto auto auto" }} >
                <MDBRow className='g-0 align-items-center'>
                    <MDBCol md='6' >
                        <MDBCardImage src={product.photoURL} alt='...' fluid style={{ height: "30rem", "object-fit": "cover" }} />
                    </MDBCol>
                    <MDBCol md='6'>
                        <MDBCardBody>
                            <MDBCardTitle> {product.name}</MDBCardTitle>
                            <MDBCardText> {product.description} </MDBCardText>
                            <MDBCardText>
                                <small className='text-muted'>This is {product.isBestSeller ? "Best Seller" : "not best seller" } </small>
                            </MDBCardText>
                            <MDBCardText>
                                <small className='text-muted'>This is {product.isFeatured ? "featured product" : "not featured product" } </small>
                            </MDBCardText>
                            <MDBCardText>{product.category}  </MDBCardText>

                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
        </>

    )
}


export default ProductDescriptionPage