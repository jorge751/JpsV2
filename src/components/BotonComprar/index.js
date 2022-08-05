
//
//	Botón-comprar renderizado en cata proyecto
//

//	Botón bootstrap
import Button from 'react-bootstrap/Button';

//	Contador-de-compra del widget de carrito
import { useContCompraContext } from "../ContadorCompra";

function BotonComprar(props) {

	//	Acción de suma del contador de compra
	const { sumar } = useContCompraContext();

	return (
		<Button className='mx-2' variant="primary" onClick={() => sumar()}>
			{props.caption || 'Comprar'}
		</Button>
	);
}

export default BotonComprar;
