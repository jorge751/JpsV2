
import React, { useState, useEffect } from 'react';
import cfg from './datos.json';
import fileContenido from './contenido.txt';
import BotonComprar from '../BotonComprar';
import Tarjeta from '../TarjetaItem';

function Compo() {

	//	Crea contenido de texto
	const [contenido, setContenido] = useState();
	useEffect(() => {
		fetch(fileContenido)
			.then((respuesta) => respuesta.text())
			.then((contenido) => setContenido(contenido));
	}, [])

	//	Crea tarjetas
	const [tarjetas, setTarjetas] = useState([]);
	useEffect(() => {
		const loadTarjetas = []
		let objJSON;
		for (let i=1; i<=cfg.cantTarjetas; i++) {
			fetch(`/web/tarjeta${i}/datos.json`, {mode: 'no-cors'})
				.then(respuesta => respuesta.json())
				.then(objJSON => {
					objJSON['key'] = i;
					objJSON['imagen'] = `tarjeta${i}/imagen.png`;
					loadTarjetas.push(objJSON);
					setTarjetas(loadTarjetas);
				})
		}
	}, []);

	const cssDivTarjetas = {
		display: 'inline-flex',
		flexFlow: 'row wrap',
		alignItems: 'center',
		justifyContent: 'center'
	}

	return (
		<main>
			<h2>{cfg.titulo}</h2>
			<p className='bg-white mx-5 p-2'>{contenido}</p>
			<div>
				<BotonComprar />
			</div>
			<div style={cssDivTarjetas}>
				{tarjetas.map((objTarjeta) => {
					return <Tarjeta {...objTarjeta} />;
				})};
			</div>
		</main>
	);
}

export default Compo;
