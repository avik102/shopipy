
import { useEffect, useState } from 'react';
import Detail from '../Detail/Detail';
import { BsFillCartFill } from "react-icons/bs";
import { AiOutlineClear } from "react-icons/ai"
import './Item.css'
const Item = () => {
    const [items, setItem] = useState([])
    console.log(items);
    useEffect(() => {

        fetch('products.json')
            .then(res => res.json())
            .then(data => setItem(data))


    }, [])

    const [products, setProduct] = useState([])
    const Cart = (props) => {

        const newCart = [...products, props]
        setProduct(newCart)

    }


    const Random = (props) => {


        const random = Math.floor(Math.random() * products.length);

        if (products[random]) {
            setProduct([products[random]]);
        }

    }

    const Clear = () => {


        setProduct([])
    }
    return (


        <div className='shop-container'>
            <div className="product-container">

                {
                    items.map(item => {
                        return <Detail key={item.id} item={item} Cart={Cart} ></Detail>

                    })
                }
            </div>
            <div className="cart-container">

                <h2>your items :</h2>

                {

                    products.map(product => {

                        return <h4>selected items : <small>{product.name}</small></h4>


                    })


                }
                < button className="cart-container" onClick={() => Random(products)}>
                    <p>choose one
                        <span><BsFillCartFill /></span>

                    </p>


                </button>

                < button className="cart-container" onClick={() => Clear(products)}>
                    <p>choose again
                        <span><AiOutlineClear /></span>

                    </p>


                </button>


            </div>
        </div >

    );
};

export default Item;