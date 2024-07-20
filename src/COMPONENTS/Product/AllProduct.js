import React, { useEffect } from 'react'
import ProductCard from './ProductCard'

import './AllProduct.css'
import { productActions } from '../../reduxStore/productsSlice'
import { useDispatch, useSelector } from 'react-redux'
const AllProduct = () => {


    const productsReduxState = useSelector(state => state)

    const dispatch = useDispatch()
    // console.log(productsReduxState);
    // Still pass action objects to `dispatch`, but they're created for us
    // store.dispatch()
    let succsessState;







    useEffect(() => {


        const token = localStorage.getItem("token");
        fetch("http://talabat.runasp.net/api/Product", {
            method: "Get", headers: {

                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => {
                if (response.status === 200) //success
    //eslint-disable-next-line
                    succsessState = true;
                return response.json();

            })

            .then((jsonData) => {

                if (succsessState) {
                    // console.log(productActions.setProducts(jsonData.data));

                    dispatch(productActions.setProducts(jsonData.data))

                }

                // Handle your response data here (e.g., update state, redirect, etc.)
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle any error that occurred during fetch
            });

    },[])

    return (
        <div className='allproducts'>
            {productsReduxState.filteredProducts && <div className='products'>
                {

                    productsReduxState.filteredProducts.map((item, index) => {

                        return (
                            <ProductCard data={item} key={index} />
                        )
                    })
                }
            </div>}
        </div>
    )
}

export default AllProduct