
import './Detail.css'
import { BsFillCartFill } from "react-icons/bs";
const Detail = (props) => {

    const { img, id, name, price } = props.item

    const { Cart } = props

    return (

        <div className='product'>


            <img className='img' src={img} alt="" />

            <div className='product-info'>
                <h3 className='product-detail'>Name: <small>{name}</small> </h3>
                <p ><strong>Price</strong>: $ {price}</p>
            </div>

            <button onClick={() => Cart(props.item)} className='btn-cart'><p className='btn-text'>add to cart</p>
                <BsFillCartFill />
            </button>
        </div >


    );
};



export default Detail;