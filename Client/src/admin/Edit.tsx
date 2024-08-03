import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import schemaProduct from '../schema';
import axiosInstance from '../axios';
import { useParams } from 'react-router';
import { DataConText } from '../context/Data';


const Edit = () => {
    const context = useContext(DataConText);
    const {brands,handleEdit:onEdit} = context;
    const { register, handleSubmit, formState: { errors }, reset,setValue } = useForm({
        resolver: zodResolver(schemaProduct)
    })

    const [image, setImage] = useState();
    const { id } = useParams();
    useEffect(() => {
        return () => {
            image && URL.revokeObjectURL(image.preview)
        }
    }, [image])
    const handlePrevewImage = (e) => {
        const file = e.target.files[0];
        console.log(file);
        file.preview = URL.createObjectURL(file)
        setImage(file)

    }
    const onSubmit = (data) => {
        if (image) {
            const formatData = {
                name: data.name,
                brandId: data.brand,
                price: data.price,
                description: data.description,
                category: 'Laptops',
                stock: data.stock,
                images: image.name,
                specifications: {
                    processor: data.processor,
                    ram: data.ram,
                    storage: data.storage,
                    display: data.display
                }
            }

            Swal.fire({
                title: "Do you want to save the changes?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Save",
                denyButtonText: `Don't save`
            }).then((result) => {

                if (result.isConfirmed) {
                    onEdit(formatData, id);
                    
                    Swal.fire("Saved!", "", "success");
                } else if (result.isDenied) {
                    Swal.fire("Changes are not saved", "", "info");
                }
            });

        }
        else {
            alert('Please select a image ');
        }
    }
    useEffect(() => {
        (async () => {
            const { data } = await axiosInstance.get(`/products/${id}`);

            (() => {
                const {
                    brandId,
                    category,
                    description,
                    id,
                    images,
                    name,
                    price,
                    specifications: {
                        processor,
                        ram,
                        storage,
                        display,
                        battery,
                        weight
                    },
                    stock
                } = data;

                // Tạo đối tượng mới với các thuộc tính đã destructured
                const flatProduct = {
                    brandId,
                    category,
                    description,
                    id,
                    images,
                    name,
                    price,
                    processor,
                    ram,
                    storage,
                    display,
                    battery,
                    weight,
                    stock
                };

                reset(flatProduct);
                setValue('brand', brandId); 
            })()

            setImage(data.images);
        })()
    }, [])

    return (
        <>
            <main className="main body p-5">
                <h1 className="text-light text-center">ADD PRODUCT</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="container form-1 p-5">
                        <div className="add-product">
                            <div className=" d-flex justify-content-between">
                                <div className="mb-3 w-50 px-5">
                                    <label htmlFor="name" className="form-label">
                                        Name product
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        aria-describedby="name"
                                        {...register('name', { required: true })}
                                    />
                                    {errors.name && <p className='text-danger'>{errors.name.message}</p>}
                                </div>
                                <div className="mb-3 w-50 px-5">
                                    <label htmlFor="price" className="form-label">
                                        Price
                                    </label>
                                    <input
                                        type="number"
                                        min={0}
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        {...register('price', { required: true, valueAsNumber: true })}
                                    />
                                    {errors.price && <p className='text-danger'>{errors.price.message}</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-4 form-1 p-5">
                                <div className=" w-100 px-5">
                                    <label htmlFor="image" className="form-label">
                                        Image
                                    </label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="image"
                                        aria-describedby="image"

                                        {...register('image', { required: true })}
                                        onChange={handlePrevewImage}

                                    />
                                    {errors.image && <p className='text-danger'>{errors.image.message}</p>}
                                    <div className="mt-3">
                                        {image && <img className="w-100" src={image.preview || `../../image/${image}`} alt="Preview..." />}

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 form-1 p-5">
                                <div className="w-100 px-5">
                                    <label htmlFor="brand" className="form-label">
                                        Brand
                                    </label>
                                    <select id="brand" defaultValue={''} className="form-select custom-select" {...register('brand', { required: true, valueAsNumber: true })}>
                                        <option disabled>
                                            Choose...
                                        </option>
                                        {brands.map((p, i) =>
                                            <option key={i} value={p.id}>{p.name}</option>

                                        )}
                                    </select>
                                    {errors.brand && <p className='text-danger'>{errors.brand.message}</p>}
                                </div>
                                <div className=" w-100 px-5 mt-4">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <label htmlFor="processor" className="form-label">
                                                Processor
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="processor"
                                                aria-describedby="processor"
                                                {...register('processor', { required: true })}
                                            />
                                            {errors.processor && <p className='text-danger'>{errors.processor.message}</p>}
                                        </div>
                                        <div className="col-lg-6">
                                            <label htmlFor="ram" className="form-label">
                                                Ram
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="ram"
                                                aria-describedby="ram"
                                                {...register('ram', { required: true })}
                                            />
                                            {errors.ram && <p className='text-danger'>{errors.ram.message}</p>}
                                        </div>
                                        <div className="col-lg-6">
                                            <label htmlFor="storage" className="form-label">
                                                Storage
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="storage"
                                                aria-describedby="storage"
                                                {...register('storage', { required: true })}
                                            />
                                            {errors.storage && <p className='text-danger'>{errors.storage.message}</p>}
                                        </div>
                                        <div className="col-lg-6">
                                            <label htmlFor="display" className="form-label">
                                                Display
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="display"
                                                aria-describedby="display"
                                                {...register('display', { required: true })}
                                            />
                                            {errors.display && <p className='text-danger'>{errors.display.message}</p>}
                                        </div>
                                        <div className="col-lg-12">
                                            <label htmlFor="stock" className="form-label">
                                                Stock
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="stock"
                                                aria-describedby="stock"
                                                {...register('stock', { required: true, valueAsNumber: true })}
                                            />
                                            {errors.stock && <p className='text-danger'>{errors.stock.message}</p>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container form-1 p-5">
                        <div className="add-product">
                            <div className=" d-flex justify-content-between">
                                <div className="mb-3 w-100 px-5">
                                    <label htmlFor="description" className="form-label">
                                        Description
                                    </label>
                                    <textarea
                                        className="form-control custom-textarea"
                                        id="description"
                                        rows={5}
                                        placeholder="Write product description here..."
                                        defaultValue={""}
                                        {...register('description')}
                                    />
                                    <div className="d-flex justify-content-end"> <button className='btn btn-light mt-4 px-4'>SAVE</button></div>
                                </div>

                            </div>

                        </div>

                    </div>

                </form>
            </main>

        </>
    )
}

export default Edit
