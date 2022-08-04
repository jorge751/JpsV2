
//
//	Renderiza cada componente-item del array de parámetro
//

import { Item } from "../index";

function ItemList({ itemList }) {

	const cssDivTarjetas = {
		display: 'inline-flex',
		flexFlow: 'row wrap',
		alignItems: 'center',
		justifyContent: 'center'
	}

	return (
		<div style={cssDivTarjetas}>
			{itemList.map((objItem) => {
				objItem['key'] = objItem.id;
				return <Item {...objItem} />;
			})};
		</div>
	);

}

export default ItemList;
