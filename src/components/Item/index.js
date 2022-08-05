
//
//	Renderiza un item de un proyecto de portfolio
//

import { useState, useEffect } from 'react';
import './index.css'

//	Tarjeta bootstrap
import Card from 'react-bootstrap/Card';

function Item({ proyecto, numTarjeta, id, imagen }) {

	//	Obtiene título y contenido del item de archivo JSON 
	const [titulo, setTitulo] = useState('');
	const [contenido, setContenido] = useState('');
	useEffect(() => {

		//	Devuelve JSON en ./public del item del proyecto
		const getJsonItem = async () => {
			const respuesta = await fetch(`/${proyecto}/tarjeta${numTarjeta}/datos.json`,)
			return await respuesta.json();
		};

		getJsonItem()
			.then((objJson) => {
				setTitulo(objJson.titulo);
				setContenido(objJson.contenido);
			})

	}, [])

	return (
		<Card id={id}
				className='shadow-lg p-3 mb-5 rounded strong item-tarjeta'>
			<Card.Title>{titulo}</Card.Title>
			<Card.Img
				className='shadow-lg p-3 mb-2 bg-white rounded strong'
				variant='top'
				src={imagen}
			/>
			<Card.Body>
				<Card.Text>{contenido}</Card.Text>
				<button
					className='btn btn-info'
					onClick={() => ''}
				>
					Ver detalle
				</button>
			</Card.Body>
		</Card>
	);
}

export default Item;
