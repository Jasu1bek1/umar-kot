import axios from "axios";
import { useEffect, useState } from "react";
import './CategoryComponent'


const CategoryComponent = ({category, limit}) => {
    const [productList, setproductList] = useState([]);

    useEffect(()=> {
        axios(
            limit
            ?`https://fakestoreapi.com/products/category/${category}jewelery?limit=${limit}`
            : `https://fakestoreapi.com/products/category/${category}`
        )
        .then(({data})=> {
            setproductList(data)
            console.log(data);
        })
    },[])
    return(
        <div>
            <h1>{category}</h1>
            <div className="row">
                {
                    productList.map(item =>{
                        return <div key={item.id} className="col-4">
                            <div className="product-card">

                                <img src="" alt="" className="product-card-img" />
                                <h4 className="product-card-title">{item.title.length > 30
                                ? item.title.substr(0, 27).trim() + '...'
                                : item.title
                                }</h4>
                                <p className="product-card-text">{
                                    item.description.length > 40
                                    ? item.description.substr(0, 37).trim() + '...'
                                    : item.description
                                }</p>


                                <div className="product-catd-bottom">
                                 <p className="product-card-price">{item.price}</p>
                                 <button className="product-card-btn">buy</button>
                                 
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
            
        </div>
    )
}

export default CategoryComponent
