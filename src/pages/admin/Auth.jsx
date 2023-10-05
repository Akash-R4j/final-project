import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Auth() {
  return (
    <div className='container my-4'>
      <div className='row'>
        <div className='col-sm-3'>
          <ul className="list-group">
            <li className="list-group-item active">Sidebar</li>
            <li className="list-group-item">
              <Link to="/admin/profile">Profile</Link>
            </li>
            <li className="list-group-item">
              <Link to="/admin/products">Products</Link>
            </li>
            <li className="list-group-item">
              <Link to="/admin/categories">Category</Link>
            </li>
            <li className="list-group-item">
              <Link to="/admin/order">Order</Link>
            </li>
            <li className="list-group-item">
              <Link to="/admin/users">Users</Link>
            </li>
          </ul>
        </div>
        <div className='col-sm-9'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
