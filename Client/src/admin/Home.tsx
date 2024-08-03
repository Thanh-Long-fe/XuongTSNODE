import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Fuse from 'fuse.js';
import { DataConText } from '../context/Data';

const Home = () => {
  const context = useContext(DataConText);
  const {products,brands,handleRemove} = context;
  const [dataAdmin, setdataAdmin] = useState([])
 
  
 
  const [initialDataAdmin, setInitialDataAdmin] = useState([]);

  useEffect(() => {
    const brandsSort = brands.sort((a, b) => a.id - b.id)
    const productsMap = products.map((product) => {

      const brand = binarySearch(brandsSort, product.brandId);

      return { ...product, brandName: brand ? brand.name : 'Không xác định' };
    })
    setInitialDataAdmin(productsMap);
    setdataAdmin(productsMap);
  }, [products,brands])

  function handleSearch(e) {
    const query = e.target.value.trim();
    if (query === '') {
      setdataAdmin(initialDataAdmin)
      return;
    }

    const options = {
      keys: ['name'],
      threshold: 0.1, 
    };


    const fuse = new Fuse(dataAdmin, options);

    // Hàm tìm kiếm
    function searchProducts(query) {
      return fuse.search(query).map(result => result.item);
    }
    setdataAdmin(searchProducts(query));


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
  function truncateString(str, num) {
    if (str) {
      if (str.length <= num) {
        return str;
      }
      return str.slice(0, num) + '...';
    }
  }




  return (
    <>
      <main className="main body ">
        <div className="container table-responsive py-5">
          <div className="d-flex py-4 head ">
            <Link to={'/admin/add-products'} className="btn btn-primary ">Thêm</Link>
            <div className="option">
              <div className="search-container">
                <input type="text" className="search-input" placeholder="Search..." onInput={handleSearch} />
                <i className="fas fa-search search-icon" />
              </div>
            </div>
          </div>
          <table className="table table-dark table-bordered">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name Product</th>
                <th scope="col">Brand</th>
                <th scope="col">Price</th>
                <th scope="col">Stock</th>
                <th scope="col">Description</th>
                <th scope="col">Image</th>
                <th scope="col">Option</th>
              </tr>
            </thead>
            <tbody>
              {dataAdmin.map((p, i) =>
                <tr key={i}>
                  <th scope="row">{p.id}</th>
                  <td>{p.name}</td>
                  <td>{p.brandName}</td>
                  <td>{p.price}</td>
                  <td>{p.stock}</td>
                  <td>{truncateString(p.description, 50)}</td>
                  <td><img src={`../image/${p.images}`} alt="..." style={{ maxWidth: '50px' }} /></td>
                  <td><div className="d-flex justify-content-around"><Link to={`/admin/edit-products/${p.id}`} className="btn btn-warning d-flex justify-content-center"><span>Sửa</span></Link>
                    <button onClick={() => {
                      const swalWithBootstrapButtons = Swal.mixin({
                        customClass: {
                          confirmButton: "btn btn-success",
                          cancelButton: "btn btn-danger"
                        },
                        buttonsStyling: false
                      });
                      swalWithBootstrapButtons.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonText: "Yes, delete it!",
                        cancelButtonText: "No, cancel!",
                        reverseButtons: true
                      }).then((result) => {
                        if (result.isConfirmed) {
                          handleRemove(p.id)
                          swalWithBootstrapButtons.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                        } else if (
                       
                          result.dismiss === Swal.DismissReason.cancel
                        ) {
                          swalWithBootstrapButtons.fire({
                            title: "Cancelled",
                            text: "Your imaginary file is safe :)",
                            icon: "error"
                          });
                        }
                      });

                    }}
                      className="btn btn-danger d-flex justify-content-center">
                      <span>Xóa</span>
                    </button>
                  </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </main>

    </>
  )
}

export default Home
