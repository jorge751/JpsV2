
import WidgetCarrito from '../WidgetCarrito';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Compo() {
	return (
		<Navbar bg="warning" expand="lg">
			<Container fluid>
				<Navbar.Brand href="/about">
					<img src="../logoJPSnavbar.png" width='150px'></img>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: '100px' }}
						navbarScroll
					>
						<Nav.Link href="/">Inicio</Nav.Link>
						<Nav.Link href="/saas">Servicio SasS</Nav.Link>
						<NavDropdown title="Desarrollo de scritorio" id="navbarScrollingDropdown">
							<NavDropdown.Item href="/ventas">Ventas</NavDropdown.Item>
							<NavDropdown.Item href="/facturacion">Facturación prestacional</NavDropdown.Item>
							<NavDropdown.Item href="/colegio">Adm. de colegio</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="/clientes">Clientes</NavDropdown.Item>
							<NavDropdown.Item href="/deudores">Deudores en cta.cte.</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="/proveedores">Proveedores</NavDropdown.Item>
							<NavDropdown.Item href="/acreedores">Acreedores en cta.cte.</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="/cobros">Cobros</NavDropdown.Item>
							<NavDropdown.Item href="/cajas">Cajas</NavDropdown.Item>
							<NavDropdown.Item href="/pagos">Pagos</NavDropdown.Item>
							<NavDropdown.Item href="/bancos">Bancos</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="/contabilidad">Contabilidad</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href="/web">
							Desarrollo web
						</Nav.Link>
						<Form className="d-flex">
							<Form.Control
								type="search"
								placeholder="Buscar"
								className="me-2"
								aria-label="Search"
							/>
							<Button variant="outline-success">Buscar</Button>
						</Form>
					</Nav>
					<Nav>
						<Nav.Link href="/createuser">Creá tu cuenta</Nav.Link>
						<Nav.Link href="/login">Ingresá</Nav.Link>
					</Nav>

					<WidgetCarrito />

				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Compo;
