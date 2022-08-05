
import React from 'react';
import Form from './form';
import Carrusel from './carrusel';
import './index.css'

function Home() {

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
					<p className='parrafo-home'>
						Somos una organización joven de
						<b> desarrollo Web y Escritorio </b>
						con mucho talento y deseamos que
						seas parte de nuestro crecimiento.
					</p>
				</div>
			</div>

			<div className='row'>
				<div className='d-flex justify-content-center'>
					<p className='parrafo-home'>
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

export default Home;
