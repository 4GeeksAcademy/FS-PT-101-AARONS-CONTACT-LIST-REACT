import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { Contacto } from "../components/Contacto.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import AgendasApi from "../services/AgendasApi.js";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		loadData()
		loadAgendaBySlug()
	}, []);

	const loadData = async () => {
		try {
			const resp = await AgendasApi.getAllAgendas();
			dispatch({ type: 'get_all_agendas', payload: resp.agendas })
		} catch (error) {
			console.log(error);
		}
	}

	const loadAgendaBySlug = async () => {
		try {
			const resp = await AgendasApi.getAgendaSlut('Ezequiel');
			dispatch({ type: 'get_agenda_by_slug', payload: resp.contacts })
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<div className="text-center mt-5">
			{store.agenda?.map(el => <Contacto key={el.id} cid={el.id} name={el.name} address={el.address} phone={el.phone} email={el.email} />)}
		</div>
	);
}; 