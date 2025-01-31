import React from 'react'

function Product(props) {
   // const {productName, price} = props;
  return (
    <div>
      <div>ÜRÜN BİLGİLERİ</div>
      <div>
        <div>İsim : {props.productName}</div>
        <div>Fiyat : {props.price} TL</div>
      </div>
    </div>
  )
}

export default Product
