import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryCreateOrUpdate() {
  return (
    <div class="card">
      <div className='card-header'>
        <h3>Add Category
          <Link to="/admin/categories" className='btn btn-primary float-right'>Back</Link>
        </h3>
      </div>
      <div class="card-body">
        <form>
          <div class="mb-3">
            <label htmlFor="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Category Name" />
          </div>
          <div class="mb-3">
            <label htmlFor="slug" class="form-label">Slug</label>
            <input type="text" class="form-control" id="slug" placeholder="Category Slug" />
          </div>
          
          <div class="mb-3">
            <label for="image" class="form-label">Image</label>
            <input class="form-control" type="file" id="image" />
          </div>
         
          <div class="mb-3">
            <label htmlFor="status" class="form-label">Status</label>
            <select class="form-control form-select-lg mb-3" aria-label="Large select example">
              <option selected>Select Status</option>
              <option value="1">Active</option>
              <option value="0">Inactive</option>
            </select>
          </div>

          <button className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </div>
  )
}
