import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { DataConText } from '../context/Data';

const ProductsPage = () => {
  const context = useContext(DataConText);
  const [dataProducts, setdataProducts] = useState([]);
  
  const { products, brands }  = context;
  
  const [init, setInit] = useState([]);
 
  useEffect(() => {
    const brandsSort = brands.sort((a, b) => a.id - b.id)
    const productsMap = products.map((product) => {

      const brand = binarySearch(brandsSort, product.brandId);

      return { ...product, brandName: brand ? brand.name : 'Không xác định' };
    })
    setdataProducts(productsMap);
    setInit(productsMap)
  }, [products,brands])
  function sort(e){  
    const type = e.target.value;
    let sortedProducts = [...dataProducts]; 
    if (type === "low_price") {
      sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
    }
    if (type === "high_price"){
      sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
    }
   setdataProducts(sortedProducts);
  }
  function filter(e){  
    const type = e.target.value;
    let sortedProducts = [...init]; 
    if (type === "") {
      setdataProducts(init);
      return;
    }
    if (type){
        const a = sortedProducts.filter((p) => p.brandName === type);
        setdataProducts(a)
     
    }
 
  }

  function binarySearch(arr, targetId) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid].id === targetId) {
        return arr[mid];
      } else if (arr[mid].id < targetId) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    return null;
  }

  return (
    <>
      <div className="main-content-product py-5">
        <div className="container ">
          <div className="head py-4">
            <h1 className="fw-bold">Find Your Products</h1>
            <div className="option d-flex justify-content-between">
              <div className="filter">
                <select onChange={filter} name="filter" id="filter">
                  <option  value="">All filters</option>
                  {brands.map((p,i) => <option key={i} value={p.name}>{p.name}</option>)}
                </select>
              </div>
              <div className="sort d-flex">
                <span>Sort By :</span>
                <select onChange={sort} name="sort" id="sort">
                  <option value="low_price">Low Price</option>
                  <option value="high_price">High Price</option>
                 
                </select>
              </div>
            </div>
          </div>
          <div className="body-list-product">
            <div className="row g-5">
              {dataProducts.map((p, i) =>
                <div className="col-lg-3" key={i}>
                 
                    <div className="card card-product">
                      <div className="images">
                      <Link to={`/detail-product/${p.id}`} >
                      <img src={`../image/638142979510381825_msi-gaming-cyborg-15-a12-den-dd.jpg`} className="card-img-top" alt="..." />
                      </Link>
                       
                        <a href="#" className="btn py-2">
                          Add to cart
                        </a>
                      </div>
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <p className="card-text">{p.brandName}</p>
                          <i>
                            <i className="bi bi-heart" />
                          </i>
                        </div>
                        <h5 className="card-title">{p.name}</h5>
                        <div className="d-flex justify-content-between">
                          <span>
                            <i className="bi bi-star-fill" /> 5.0 (28)
                          </span>
                          <span className="price fw-bold">${p.price}</span>
                        </div>
                      </div>
                    </div>

                  
                </div>
              )}
            </div>
            <div className="d-flex justify-content-center pt-4">

              <a href="#" className="btn btn-load text-light">
                Load More
              </a>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default ProductsPage
