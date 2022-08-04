
//	React y App
import React from 'react';
import './App.css';

//	Layout
import { About, Home, Navbar, Footer } from './components';

//	Portfolio
import { SaasPage, VentasPage, FacturacionPage, ColegioPage, ClientesPage,
	WebPage } from './pages';

//	Router
import { Routes, Route } from 'react-router-dom';

//	Contador de widget de compra con 'Context'
import ContCompraProvider from './components/ContadorCompra';

function App() {
	return (
		<div className='App'>
			<ContCompraProvider>
				<header>
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
				</header>
			</ContCompraProvider>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
