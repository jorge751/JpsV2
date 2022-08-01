
import { Children } from 'react';
import Button from 'react-bootstrap/Button';
import { useContCompraContext } from "../ContadorCompra";

function Compo(props) {

	const { sumar } = useContCompraContext();

	return (
		<Button className='mx-2' variant="primary" onClick={() => sumar()}>
			{props.caption || 'Comprar'}
		</Button>
	);
}

export default Compo;
