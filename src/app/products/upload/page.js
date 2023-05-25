
"use client"
import axios from "axios"
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik"
import React, { useEffect, useState } from "react"
import * as Yup from "yup"
import Image from "next/image"

const metadata = {
    title: "Upload Page",
    description: "This is the home page",
  };


//  create new product validation
const validationSchema = Yup.object({
  title: Yup.string().required("title required"),
  price: Yup.number().required("price required"),
  description: Yup.string().required("description required"),
  categoryId: Yup.number().required("categoryId required"),
  file: Yup.mixed()
    .test("fileSize", " File ធំជាង 5MB", (value) => {
      if (!value) {
        return true
      }
      return value.size <= FILE_SIZE
    })
    .test("filsFormat", "Unsupported format", (value) => {
      if (!value) {
        return true
      }
      return SUPPORTED_FORMATS.includes(value.type)
    })
    .required("required"),
})

// for upload file
const FILE_SIZE = 1024 * 1024 * 5 // 5MB

const SUPPORTED_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/gif",
  "image/png",
  "image/webp",
]

const handleUploadImage = async (values) => {
  try {
    const response = await axios.post(
      "https://api.escuelajs.co/api/v1/files/upload",
      values.file
    )
    console.log(response)

    return (
      response.data.location ||
      "https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"
    )
  } catch (error) {
    console.log(error)
  }
}

// handle fetch category
export async function getCategory() {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories")
  const data = await res.json()
  // console.log(data)
  return data
}

// handle upload file
function CustomInput({ field, form, isSubmitting, ...props }) {
  const [preview, setPreview] = useState(null)
  //   for reset imageds
  useEffect(() => {
    if (isSubmitting) {
      setPreview(null)
    }
  }, [isSubmitting])
  return (
    <div className=""
    
     >
      <input
        type='file'
        onChange={(event) => {
          form.setFieldValue(field.name, event.currentTarget.files[0])
          setPreview(URL.createObjectURL(event.currentTarget.files[0]))
        }}
        // {...props} is use to pass all props from Formik Field component
        {...props}
      />
      {preview && (
        <div className='avatar'>
          <div className='w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
            <Image
              src={preview}
              alt='dummy'
              width='100'
              height='100'
            />
          </div>
        </div>
      )}
    </div>
  )
}

const page = async () => {

  const handleCreateProduct = async (product) => {
    const { title, price, description, categoryId, images } = product
    let myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    let raw = JSON.stringify({
      title,
      price,
      description,
      categoryId,
      images: [images],
      // images: ["https://placeimg.com/640/480/any"],
    })

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    }

    fetch("https://api.escuelajs.co/api/v1/products/", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result), alert("create product success"))

      .catch((error) => console.log("error", error))
  }

  //   fetch category
  const categories = await getCategory()
  console.log(categories)
  return (
    <div className=""
    style={{backgroundImage: `url(https://wallpapercave.com/wp/wp6689710.jpg)` }}
    >
    <Formik
      initialValues={{
        title: "",
        price: 0,
        description: "",
        categoryId: 1,
        images: ["https://placeimg.com/640/480/any"],
        file: undefined,
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const formData = new FormData()
        formData.append("file", values.file)
        const images = await handleUploadImage({ file: formData })
        values.images = images
        setTimeout(() => {
          handleCreateProduct(values)
          setSubmitting(false)
          resetForm()
        }, 500)
      }}
    >
      {({ isSubmitting, setFieldValue }) => (
    <div className="flex justify-center h-screen w-full  bg-slate-400">
        <Form className="flex flex-col items-center justify-center ">
          <h1 className="text-center font-bold text-3xl mb-5">Upload Product</h1>
          <Field
            className='input w-full  mb-5'
            name='title'
            type='text'
            placeholder='title'
          />{" "}
          <br />
          <ErrorMessage
            className='text-red-500 text-xs italic'
            name='title'
            component='div'
          />
          {/* price   */}
          <Field
            className='input w-full  mb-5'
            name='price'
            type='number'
            placeholder='price'
          />{" "}
          <br />
          <ErrorMessage
            className='text-red-500 text-xs italic'
            name='price'
            component='div'
          />
          {/* description */}
          <Field
            className='input w-full  mb-5'
            name='description'
            type='text'
            placeholder='description'
          />{" "}
          <br />
          <ErrorMessage
            className='text-red-500 text-xs italic'
            name='description'
            component='div'
          />
          {/* categoryId */}
          <Field
            as='select'
            name='categoryId'
            className='select select-primary w-full '
          >
            <option
            selected
            disabled
              
            >
              choose category
            </option>
            {categories.map((cate) => (
              <option
                key={cate.id}
                value={cate.id}
              >
                {cate.name}
              </option>
            ))}
          </Field>
          <ErrorMessage
            className='text-red-500 text-xs italic'
            name='categoryId'
            component='div'
          />
          {/* file for avarta */}
          <Field
            className=' my-3 file-input file-input-bordered file-input-info w-full '
            name='file'
            type='file'
            title='Select a file'
            setFieldValue={setFieldValue} // Set Formik value
            component={CustomInput} // component prop used to render the custom input
            isSubmitting={isSubmitting}
          />
          <ErrorMessage
            name='file'
            component='h1'
            className='text-red-500 text-xs italic'
          />
           <button
              disabled={isSubmitting}
              type="submit"
              className={`${
                isSubmitting
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-700"
              } text-white font-bold py-2 px-4 rounded`}
            >
              Submit
            </button>
        </Form>
        </div>
      )}
    </Formik>
    </div>
  )
}

export default page