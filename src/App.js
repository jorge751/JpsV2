
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import AboutPage from './components/About';
import HomePage from './components/Home';
import SaaSPage from './components/Saas';
import VentasPage from './components/Ventas';
import FacturacionPage from './components/Facturacion';
import ColegioPage from './components/Colegio';
import ClientesPage from './components/Clientes';
import WebPage from './components/Web';

import ContCompraProvider from './components/ContadorCompra';

function App() {

	return (
		<div className="App">
			<BrowserRouter>
				<ContCompraProvider>
					<header>
						<Navbar />
						<Routes>
							<Route exact path="/about" element = {<AboutPage />} />
							<Route exact path="/" element = {<HomePage />} />
							<Route exact path="/saas" element = {<SaaSPage />} />
							<Route exact path="/ventas" element = {<VentasPage />} />
							<Route exact path="/facturacion" element = {<FacturacionPage />} />
							<Route exact path="/colegio" element = {<ColegioPage />} />
							<Route exact path="/clientes" element = {<ClientesPage />} />
							<Route exact path="/web" element = {<WebPage />} />
						</Routes>
					</header>
				</ContCompraProvider>
				<footer>
					<Footer />
				</footer>
			</BrowserRouter>
		</div>
	);
}

export default App;
