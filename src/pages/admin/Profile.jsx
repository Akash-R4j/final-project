import React from 'react'

export default function Profile() {
  return (
    <div class="card">
      <div className='card-header'>
        <h3>Profile</h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">Name</li>
          <li class="list-group-item">Email</li>
          <li class="list-group-item">Contact</li>
          <li class="list-group-item">Address</li>
        </ul>
      </div>
    </div>
  )
}
