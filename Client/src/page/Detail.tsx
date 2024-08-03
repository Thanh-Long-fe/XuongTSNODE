import React, { useContext, useEffect, useState } from 'react'

import { useParams } from 'react-router'
import axiosInstance from '../axios';
import { DataConText } from '../context/Data';



const Detail = () => {
  const [value, setValue] = useState(0);
  const [image, setImage] = useState('../image/638142979510381825_msi-gaming-cyborg-15-a12-den-dd.jpg');
  const context = useContext(DataConText);
  const {brands} = context
    const {id} = useParams();
    const [product, setProduct] = useState(null)
    useEffect(() => {
        (async () => {
            const {data} = await axiosInstance.get(`/products/${id}`);
          if (brands.length > 0) {
            upBrand(data,brands)
            
          }
        
        })()
    },[id,brands])
    
    
    function upBrand(data,arr){
       let result = null;
       for (let index = 0; index < arr.length; index++) {
        if (arr[index].id === data.brandId) {
            result = {...data, brandName: arr[index].name}
            break;
        }
        
       }
       setProduct(result)

    }
    function handleCong(){
      if (value < Number(product.stock)) {
        setValue(pre => pre + 1)
      }
    
     
    }
    function handleTru(){
      setValue(pre => pre >= 1 ? pre - 1 : pre)
     
   
    }
   

    if (!product) {
        return (
            <div>Loading...</div>
        )
    }
    function changeImg(event){
      setImage(event.target.src)
    }
     

    

    console.log(value);
  return (
    <>
    <main className="main-detail detail py-5" style={{backgroundColor:"white"}}>
  <div className="container">
    <div className="row">
      <div className="col-lg-6 px-5">
        <div className="image-preview">
          <img
            className="img-pre"
            src={image}
            alt=""
          />
        </div>
        <div className="d-flex list-img">
          <div className="item">
            <img onClick={changeImg} className="img-item" src="../image/aff.jpg" alt="" />
          </div>
          <div className="item">
            <img onClick={changeImg}
              className="img-item"
              src="../image/acernitrolaptop-1650914214505.jpg"
              alt=""
            />
          </div>
          <div className="item">
            <img onClick={changeImg}
              className="img-item"
              src="../image/cac-loai-kich-thuoc-man-hinh-laptop.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="px-4">
          <p className="brand h3 fw-500">{product.brandName}</p>
          <h1 className=" name fw-bold">{product.name}</h1>
          <p className="description pt-4">
          {product.description}
          </p>
          <ul>
            <li>{product.specifications.processor}</li>
            <li>{product.specifications.ram}</li>
            <li>{product.specifications.storage}</li>
            <li>{product.specifications.display}</li>
          </ul>
          <div className="d-flex py-4">
            <div className="price h2 fw-bold">${product.price}</div>
            <div className="sale">-50%</div>
          </div>
          <p>Quantity : {product.stock}</p>
          <h6
            className="price-pre fw-bold text-decoration-line-through"
            style={{ color: "rgb(169, 169, 169)" }}
          >
            $10000
          </h6>
          <div className="d-flex ">
            <div className="number-input d-flex ">
              <button onClick={handleTru} className="btn fw-bold" id='tru'>-</button>
              <input
                style={{ border: "none", outline: "none" }}
                type="number"
                className="form-control input-sl"
                onFocus={() => {setValue('')}}
                onBlur={(e) => {
                  if (value ===  "" ) {
                    setValue(1)
                  }
                }}
                onChange={(e) => {
                  const newValue = e.target.value;
                  if (newValue === '' || !isNaN(newValue) && newValue > 0 && newValue < Number(product.stock)) {
                 
                    setValue(parseInt(newValue))
                   }
                  
                }}
                value={value}
              />
              <button onClick={handleCong} className="btn fw-bold" id='cong'>+</button>
            </div>
            <button className="add-cart btn btn-danger ms-4">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div> 
  </div>
</main>

    </>
  )
}

export default Detail
