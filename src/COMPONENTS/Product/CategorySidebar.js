import React, { useEffect, useState } from 'react'

import './CategorySidebar.css'
import { useDispatch } from 'react-redux'
import { productActions } from '../../reduxStore/productsSlice'

const CategorySidebar = () => {
    const dispatch = useDispatch()

    const [categorydata, setcategorydata] = useState()
    function filterProducts(catName) {
        dispatch(productActions.filterProductsBycat(catName))

    }
    useEffect(() => {
        const token = localStorage.getItem("token");
        fetch(`http://talabat.runasp.net/api/Product/Categories`, {
            method: "Get", headers: {

                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => {
                if (response.status === 200) //success
                    return response.json();

            })

            .then((jsonData) => {
                setcategorydata(jsonData)

                // Handle your response data here (e.g., update state, redirect, etc.)
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle any error that occurred during fetch
            });


    }, [])
    return (
        <div className='categorysidebar'>
            {
              categorydata &&  categorydata.map((item) => {
                    return (

                        <div className='category' key={item.id} onClick={() => { 
                            
                            filterProducts(item.name) }}>
                            {/* <img src={item.categoryimage} alt='categoryimage' /> */}
                            <h3>{item.name}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CategorySidebar