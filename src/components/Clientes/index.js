
import React, { useState, useEffect } from 'react';
import cfg from './datos.json';
import fileContenido from './contenido.txt';
import BotonComprar from '../BotonComprar';

function Compo() {

	//	Crea contenido de texto
	const [contenido, setContenido] = useState();
	useEffect(() => {
		fetch(fileContenido)
			.then((respuesta) => respuesta.text())
			.then((contenido) => setContenido(contenido));
	}, [])

	const cssDiv = {display: 'inline-block'};

	return (
		<main>
			<h2>{cfg.titulo}</h2>
			<p className='bg-white mx-5 p-2'>{contenido}</p>
			<div style={cssDiv}>
				<BotonComprar />
			</div>
		</main>
	);
}

export default Compo;
