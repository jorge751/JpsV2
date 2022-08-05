
//
//	Renderiza cada componente-item del array de parámetro
//

import './index.css';
import { Item } from "../index";

function ItemList({ itemList }) {
	return (
		<div className='div-item-list'>
			{itemList.map((objItem) => {
				objItem['key'] = objItem.id;
				return <Item {...objItem} />;
			})};
		</div>
	);
}

export default ItemList;
