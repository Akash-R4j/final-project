import React from 'react'
import { Link } from 'react-router-dom'

export default function Products() {
  return (
    <div class="card">
      <div className='card-header'>
        <h3>Products
          <Link to="/admin/product/create" className='btn btn-primary float-right'>Add Product</Link>
        </h3>
      </div>
      <div class="card-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
      </div>
    </div>
  )
}
