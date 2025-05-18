const AgendasApi = {}

AgendasApi.getAllAgendas = async () =>{
    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas')
        if(!resp.ok) throw new Error ('Error en el server')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

AgendasApi.getAgendaSlut = async (slug) =>{
    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas/'+slug)
        if(!resp.ok) throw new Error ('Error en el server')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

AgendasApi.CreateContact = async (slug, FormData) =>{
    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas/'+slug+'/contacts', {
            method: 'POST', headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(FormData)
        })
        if(!resp.ok) throw new Error ('Error en el server')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

AgendasApi.DeleteContact = async (slug, id) =>{
    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas/'+slug+'/contacts/'+id,
            {method: 'DELETE'}
        )
        if(!resp.ok) throw new Error ('Error del server')
        return AgendasApi.getAgendaSlut(slug)
    } catch (error) {
        console.log(error);
    }
}

AgendasApi.EditContact = async (slug, id, FormData) =>{
    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas/'+slug+'/contacts/'+id , {
            method: 'PUT', headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(FormData)
        })
        if(!resp.ok) throw new Error ('Error en el server')
        const data = await resp.json()
        return AgendasApi.getAgendaSlut(slug)
    } catch (error) {
        console.log(error);
    }
}

export default AgendasApi;