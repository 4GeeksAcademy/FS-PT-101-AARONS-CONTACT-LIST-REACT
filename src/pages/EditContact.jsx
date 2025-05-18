import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AgendasApi from "../services/AgendasApi";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const EditContact = () => {
    const navigate = useNavigate();
    const params = useParams();
    const {store, dispatch} = useGlobalReducer();
    const [formData, setFormData] = useState(store.agenda.find(el=> el.id == params.id));

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
        setFormData(store.agenda.find(el=> el.id == params.id));
    }

    const handleSubmit=e=>{
        e.preventDefault();
        AgendasApi.EditContact('Ezequiel', params.id, formData)
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