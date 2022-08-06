
//	React y App
import React, { useEffect } from 'react';
import './App.css';

//	Básicos
import { About, Home, Navbar, Footer } from './components';

//	Portfolio
import { SaasPage, VentasPage, FacturacionPage, ColegioPage, ClientesPage,
	WebPage } from './pages';

//	Router
import { Routes, Route } from 'react-router-dom';

//	Contador de compra tipo Context
import { ContadorCompra } from './components';

function App() {

	//	Limpia contador de compra
	useEffect(() => {
		localStorage.removeItem('contador_compra');
	}, [])

	return (
		<div className='App'>
			<header>
				<ContadorCompra>
					<Navbar />
					<Routes>
						<Route path='/about' element = {<About />} />
						<Route path='/' element = {<Home />} />
						<Route path='/saas' element = {<SaasPage />} />
						<Route path='/ventas' element = {<VentasPage />} />
						<Route path='/facturacion' element = {<FacturacionPage />} />
						<Route path='/colegio' element = {<ColegioPage />} />
						<Route path='/clientes' element = {<ClientesPage />} />
						<Route path='/web' element = {<WebPage />} />
					</Routes>
				</ContadorCompra>
			</header>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
