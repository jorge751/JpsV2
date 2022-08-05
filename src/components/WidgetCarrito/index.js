
import Imagen from '../../../src/cart-fill.svg';
import './index.css'

import { useContCompraContext } from '../ContadorCompra';

function WidgetCarrito() {

	const { contador, restar } = useContCompraContext();

	return (
		<div
			className = 'btn btn-warning div-widget'
			datatoggle = 'tooltip'
			dataplacement = 'top'
			title = 'Restar carrito'
			onClick = { () => restar() }
		>
			<img src={Imagen} alt='badge' />
			<span className={'badge span-insignia ' +
				'contador-' + (contador < 10 ? 'menor10' : 'mayor9')}
			>
				{contador}
			</span>
		</div>
	);
}

export default WidgetCarrito;
