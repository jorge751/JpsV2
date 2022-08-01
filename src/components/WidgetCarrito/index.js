
import Imagen from '../../../src/cart-fill.svg';

import { useContCompraContext } from '../ContadorCompra';

function Compo() {

	const { contador, restar } = useContCompraContext();

	const cssDiv = {
	    display: 'inline',
    	position: 'relative'
	}

	const cssInsignia = {
		position: 'absolute',
		top: '1.3em',
		left: (contador > 9 ? '1.7em' : '2em')
	}

	return (
		<div
			className = 'btn btn-warning'
			style = {cssDiv}
			datatoggle = 'tooltip'
			dataplacement = 'top'
			title = 'Restar carrito'
			onClick = { () => restar() }
		>
			<img src={Imagen} alt='logo' />
			<span className='badge' style={cssInsignia}>
				{contador}
			</span>
		</div>
	);
}

export default Compo;
