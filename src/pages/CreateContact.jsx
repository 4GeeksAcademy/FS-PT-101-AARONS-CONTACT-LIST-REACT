import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AgendasApi from "../services/AgendasApi";

export const CreateContact = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        email: ''
    });

    const handleChange = e => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }
    const handleCancel = () => {
        navigate('/')
    }
    const handleReset = (e) => {
        e.preventDefault();
        setFormData({
            name: '',
            phone: '',
            address: '',
            email: ''
        })
    }

    const handleSubmit=e=>{
        e.preventDefault();
        AgendasApi.CreateContact('Ezequiel', formData)
        setFormData({
            name: '',
            phone: '',
            address: '',
            email: ''
        })
        navigate('/')
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="form-control">
                <input className="form-control" onChange={handleChange} value={formData.name} placeholder="Name" name="name" type="text" />
                <input className="form-control" onChange={handleChange} value={formData.phone} placeholder="phone number" name="phone" type="text" />
                <input className="form-control" onChange={handleChange} value={formData.address} placeholder="Address" name="address" type="text" />
                <input className="form-control" onChange={handleChange} value={formData.email} placeholder="example@example.com" name="email" type="text" />
                <input className="btn btn-primary" type="submit" />
                <input className="btn btn-warning" onClick={handleReset} type="reset" />
                <button className="btn btn-danger" onClick={handleCancel}>cancel</button>
            </form>
        </div>
    )
}