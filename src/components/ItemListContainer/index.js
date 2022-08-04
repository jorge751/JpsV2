
//
//	Renderiza datos del proyecto de portfolio de parámetro y
//	Lee items del proyecto y lanza el ItemListContainernente-listador
//

import { useState, useEffect} from 'react';
import { BotonComprar, ItemList } from "../index";

//	Principal
function ItemListContainer({ proyecto }) {

	const [useProyecto, SetUseProyecto] = useState(proyecto)

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

	//	Items del proyecto
	const [items, setItems] = useState([]);
	useEffect(() => {

		//	Devuelve JSON public de UN item del proyecto
		const getJsonItem = async (numTarjeta) => {
			const respuesta = await fetch(`/${proyecto}/tarjeta${numTarjeta}/datos.json`,)
			const ret = await respuesta.json();
			return ret;
		};

		//	Crea array de items para luego renderizar
		const loadItems = [];
		for (let i=1; i<=cantTarjetas; i++) {
			getJsonItem(i)
				.then(objJSON => {
					objJSON['id'] = proyecto + i;
					objJSON['imagen'] = `tarjeta${i}/imagen.png`;
					loadItems.push(objJSON);
					setItems(loadItems);
				})
		}
	}, [cantTarjetas, titulo, descripcion]);

    return (
		<main>
			<h2>{titulo}</h2>
			<p className='bg-white mx-5 p-2'>{descripcion}</p>
			<div>
				<BotonComprar />
			</div>
			<ItemList itemList={items} />
		</main>

    );
}

export default ItemListContainer;
