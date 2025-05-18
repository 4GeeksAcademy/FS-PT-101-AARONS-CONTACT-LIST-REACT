import React from "react";
import AgendasApi from "../services/AgendasApi";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";

export const Contacto = props => {
    console.log("Contacto props:", props);
    const {store, dispatch} = useGlobalReducer();
    const navigate = useNavigate();
    const handleDelete=async ()=>{
        try {
            const resp = await AgendasApi.DeleteContact('Ezequiel', props.cid)
            dispatch({ type: 'get_agenda_by_slug', payload: resp.contacts })
        } catch (error) {
            
        }
    }
    const handleEdit=()=>{
        navigate('/edit_contact/'+props.cid)
    }
    return (
        <div className="card mb-3 p-3">
            <div className="row">
                <div className="col-4">
                    <img className="img-fluid rounded-circle" src="https://www.freeiconspng.com/uploads/blue-user-icon-32.jpg" alt="user" />
                </div>
                <div className="col-4 text-start d-flex flex-column align-content-center">
                    <h5 className="card-title">{props.name}</h5>
                    <p>{props.address}</p>
                    <p>{props.phone}</p>
                    <p>{props.email}</p>
                </div>
                <div className="col-4">
                    <div className="d-flex justify-content-around align-items-center">
                        <button className="btn btn-outline-primary" onClick={handleEdit} ><i className="fa-solid fa-square-pen"></i></button>
                        <button className="btn btn-outline-danger" onClick={handleDelete}><i className="fa-solid fa-trash"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}