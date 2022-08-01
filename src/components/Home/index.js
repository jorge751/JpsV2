
import React from 'react';
import Form from './form';
import Carrusel from './carrusel';

function Compo() {

	const cssParrafo = {
		fontSize: '25px',
		fontWeight: 'bold',
		textAlign: 'right',
		backgroundColor: 'white',
		padding: '20px'
	}

	return (
		<main>

			<div className='row'>
				<h1 className='my-3'>Bienvenidos!</h1>
			</div>

			<div className='row'>
				<div className='col text-left'>
					<img src='./logoJPSwall.png'></img>
				</div>
				<div className='col mx-5 my-1'>
					<p style={cssParrafo}>
						Somos una organización joven de
						<b> desarrollo Web y Escritorio </b>
						con mucho talento y deseamos que
						seas parte de nuestro crecimiento.
					</p>
				</div>
			</div>

			<div className='row'>
				<div className='d-flex justify-content-center'>
					<p style={{...cssParrafo, textAlign: 'center'}}>
						Apostamos a que nuestras licencias,
						servicios y contratos aseguren productividad
						en tu negocio.
					</p>
				</div>
			</div>

			<div className='row'>
				<div className='col mx-4 my-5'>
					<Carrusel />
				</div>
			</div>

			<div className='row'>
				<div className='col mx-4 mb-5'>
					<Form />
				</div>
			</div>

		</main>
 	);
}

export default Compo;
