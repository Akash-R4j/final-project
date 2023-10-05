import React, { useState } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Link } from 'react-router-dom'
import { storage } from '../../../firebase-config';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const initialState = {
  name: '',
  slug: '',
  shortDescription: '',
  description: '',
  image: '',
  price: '',
  discount: '',
  quantity: '',
  status: ''
}

export default function ProductCreateOrUpdate() {
  const [formData, setFormData] = useState(initialState)

  let { name, slug, shortDescription, description, image, price, discount, quantity, status }
    = formData

  const inputChange = (event) => {
    setFormData((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value
    }))
  }

  const submit = (event) => {
    event.preventDefault()

    console.log(formData);
  }


  const uploadFile = (event) => {
    const storageRef = ref(storage, event.target.files[0].name);

    const uploadTask = uploadBytesResumable(storageRef, event.target.files[0]);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData((prevProps) => ({
            ...prevProps,
            image: downloadURL
          }))
        });
      }
    );
  }

  return (
    <div className="card">
      <div className='card-header'>
        <h3>Add Product
          <Link to="/admin/products" className='btn btn-primary float-right'>Back</Link>
        </h3>
      </div>
      <div className="card-body">
        <form onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Product Name"
              name='name'
              value={name}
              onChange={inputChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="slug" className="form-label">Slug</label>
            <input
              type="text"
              className="form-control"
              id="slug"
              placeholder="Product Slug"
              name='slug'
              value={slug}
              onChange={inputChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="shortDescription" className='form-label'>Short Description</label>
            <Editor
              id='shortDescription'
              className="form-control"
              apiKey='7c53bt2t7l5vh3iyqt76yp4jo2hlep4bxvxhidlji4lf93ah'
              initialValue={shortDescription}
              onChange={(event) => setFormData((prevProps) => ({
                ...prevProps,
                shortDescription: event.target.getContent()
              }))}
              init={{
                height: 200,
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount'
                ],
                toolbar: 'undo redo | formatselect | ' +
                  'bold italic backcolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className='form-label'>Description</label>
            <Editor
              id='description'
              className="form-control"
              apiKey='7c53bt2t7l5vh3iyqt76yp4jo2hlep4bxvxhidlji4lf93ah'
              initialValue={description}
              onChange={(event) => setFormData((prevProps) => ({
                ...prevProps,
                description: event.target.getContent()
              }))}
              init={{
                height: 200,
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount'
                ],
                toolbar: 'undo redo | formatselect | ' +
                  'bold italic backcolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image</label>
            <input 
              className="form-control" 
              type="file" 
              id="image"
              name='image'
              onChange={uploadFile} />

              <img src={image} style={{
                height: "50px"
              }} />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input
              type="number"
              step="any"
              className="form-control"
              id="price"
              placeholder="Product Price"
              name='price'
              value={price}
              onChange={inputChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="discount" className="form-label">Discount</label>
            <input
              type="number"
              step="any"
              className="form-control"
              id="discount"
              placeholder="Product Discount"
              name='discount'
              value={discount}
              onChange={inputChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">Quantity</label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              placeholder="Product Quantity"
              name='quantity'
              value={quantity}
              onChange={inputChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="status" className="form-label">Status</label>
            <select
              className="form-control form-select-lg mb-3"
              aria-label="Large select example"
              name='status'
              defaultValue={status}
              onChange={inputChange}>
              <option>Select Status</option>
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
