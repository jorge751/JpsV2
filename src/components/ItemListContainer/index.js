
//
//	Lee array de items del proyecto y lanza el Componente-listador
//

import { useState, useEffect} from 'react';
import { ItemList } from "../index";

//	Principal
function ItemListContainer({ proyecto, cantTarjetas }) {

	//	Items del proyecto
	const [items, setItems] = useState([]);
	useEffect(() => {
		//	Crea array de items para luego renderizar
		const items = [];
		for (let i=1; i<=cantTarjetas; i++) {
			items.push({
				id: proyecto + i,
				imagen: `tarjeta${i}/imagen.png`,
				numTarjeta: i,
				proyecto: proyecto
			});
		}
		setItems(items);
	}, [proyecto, cantTarjetas]);

    return (
		<ItemList itemList={items} />
    );
}

export default ItemListContainer;
