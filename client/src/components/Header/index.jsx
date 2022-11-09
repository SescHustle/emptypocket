import React from 'react';
import logo from '../../assets/logo.png';

function Header() {
	return (
		<header id='header'>
			<nav className='navbar navbar-expand-md bg-info'>
				<div className='container-fluid'>
					<a className='navbar-brand' href='/'>
						<img
							src={logo}
							className='img-fluid'
							width='32px'
							height='32px'
							alt='App Logo'
						/>
					</a>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon' />
					</button>
					<div className='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul className='navbar-nav'>
							<li className='nav-item'>
								<a className='nav-link' href='/'>
									Overview
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='/'>
									Spendings
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='/'>
									Incomes
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='/'>
									Reports
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='/'>
									Planning
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Header;
