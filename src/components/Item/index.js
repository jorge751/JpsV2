
//
//	Renderiza un Itemnente-item
//

import Card from 'react-bootstrap/Card';

function Item({ id, titulo, imagen, contenido }) {
	return (
		<Card id={id} className='shadow-lg p-3 mb-5 rounded strong'
			style={{
				width: '18rem',
				margin: '10px 10px',
				backgroundColor: 'rgb(251,234,227)'
			}}
		>
			<Card.Title>{titulo}</Card.Title>
			<Card.Img className='shadow-lg p-3 mb-2 bg-white rounded strong'
				variant='top'
				src={imagen}
				style={{padding: '0px 0px'}}
			/>
			<Card.Body>
				<Card.Text>{contenido}</Card.Text>
				<button
					className='btn btn-info'
					onClick={() => ''}
				>
					Ver detalle
				</button>
			</Card.Body>
		</Card>
	);
}

export default Item;
