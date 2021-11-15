import { useEffect, useState } from 'react'

import Header from '../components/Header'
import Hero from '../components/Hero'
import ProductCategory from '../components/ProductCategory'
import BestSellers from '../components/BestSellers'
import Footer from '../components/Footer'


const HomePage = props => {


    const [categories, setCategories] = useState([]);


    useEffect(() => {

        fetch(`${process.env.REACT_APP_BACKEND_API_DOMAIN}/products?isBestSeller=yes`)
            .then(response => response.json())
            .then(json => {
                props.setProducts(json.data)
                console.log(json.data)
            })
            .catch(err => {
                console.log(`Error ${err}`)
            })


    }, []);


    useEffect(() => {

        fetch(`${process.env.REACT_APP_BACKEND_API_DOMAIN}/products/categories`)
            .then(response => response.json())
            .then(json => {
                console.log(`useEffect`)
                setCategories(json.data)

            })
            .catch(err => {
                console.log(`Error ${err}`)
            })


    }, []);



    return (
        <>
            <Header />
            <main>
            <Hero />
            <BestSellers products={props.products} setProducts={props.setProducts} />
            <ProductCategory categories={categories} setCategories={setCategories} />
            </main>
            <Footer />
        </>
    )
}

export default HomePage
