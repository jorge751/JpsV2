
//
//	Renderiza datos del proyecto-de-portfolio de parámetro
//

import { useState, useEffect} from 'react';
import { BotonComprar, ItemListContainer } from '../index';

//	Principal
function Proyecto({ proyecto }) {

	//	Título y cantidad de tarjetas del proyecto
	const [titulo, setTitulo] = useState('');
	const [cantTarjetas, setCantTarjetas] = useState(0);
	const getdatosJson = async () => {
		const fileJson =
			require(`../../pages/${proyecto}/datos.txt`)
		const respuesta = await fetch(fileJson, {
			method: 'GET',
			cache: 'no-cache',
			headers: {'Content-Type': 'application/json'}})
		const objJson = await respuesta.json();
		setTitulo(objJson.titulo);
		setCantTarjetas(objJson.cantTarjetas);
	}
	useEffect(() => {
		getdatosJson();
	}, [])
	
	//	Descripción del proyecto
	const [descripcion, setDescripcion] = useState('');
	const getDescripcion = async () => {
		const fileContenido =
			require(`../../pages/${proyecto}/contenido.txt`);
		const texto = await fetch(fileContenido)
			.then((respuesta) => respuesta.text())
		setDescripcion(texto);
	}
	useEffect(() => {
		getDescripcion();
	}, [])

    return (
		<main>
			<h2>{titulo}</h2>
			<p className='bg-white mx-5 p-2'>{descripcion}</p>
			<div>
				<BotonComprar />
			</div>
			<ItemListContainer
				proyecto={proyecto}
				cantTarjetas={cantTarjetas}
			/>
		</main>
    );
}

export default Proyecto;

