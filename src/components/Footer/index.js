
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function Compo() {
	return (
		<>
		<div className="footer text-center">
			<div className="container">
				<div className="row">
					<div className="col my-5 mb-lg-0">
						<h4>Teléfono y ciudad</h4>
						<div className="d-flex justify-content-center">
							<div className="mx-1">
								<i className="fa fa-solid fa-phone"></i>
							</div>
							<kbd>381 5 460 614</kbd>
						</div>
						<h5>San Miguel de tucumán - Argentina</h5>
					</div>
					<div className="col my-5 mb-lg-0">
						<h4 className="mb-4">Redes y repositorios</h4>
						<a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-facebook-f"></i></a>
						<a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-twitter"></i></a>
						<a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-linkedin-in"></i></a>
						<a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-dribbble"></i></a>
					</div>
					<div className="col my-5">
						<Navbar.Brand href="/about">
							<img src="../logoJPSfooter.png" width='200px'></img>
						</Navbar.Brand>
					</div>
				</div>
			</div>
		</div>
		<div className="copyright py-4 text-center text-white bg-black">
			<div className="container"><small>Copyright &copy; Jorge Pereyra Software 2022</small></div>
		</div>
		</>
	)
}

export default Compo;
