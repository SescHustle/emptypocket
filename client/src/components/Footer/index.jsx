import React from 'react';

function Footer() {
	return (
		<footer className='bg-dark text-light' id='footer'>
			<div className='container-fluid'>
				<div className='row'>
					<nav className='col-12 text-center'>
						<ul className='row'>
							<li className='col nav-item'>
								<a className='nav-link' href='/'>
									Home
								</a>
							</li>
							<li className='col nav-item'>
								<a className='nav-link' href='/'>
									Spendings
								</a>
							</li>
							<li className='col nav-item'>
								<a className='nav-link' href='/'>
									Incomes
								</a>
							</li>
							<li className='col nav-item'>
								<a className='nav-link' href='/'>
									Reports
								</a>
							</li>
							<li className='col nav-item'>
								<a className='nav-link' href='/'>
									Planning
								</a>
							</li>
						</ul>
					</nav>
				</div>
				<div className='row'>
					<div className='col'>
						<p>
							Copyright <strong>COPY ICON</strong> Emptypocket
						</p>
						<p>
							Created and designed by <a href='github.com/seschustle'>Pavel Lovkii</a>
						</p>
					</div>
					<div className='col'>
						<ul className='row'>
							<li className='col nav-item'>
								<a
									href='https://github.com/seschustle/emptypocket'
									rel='noreferrer'
									target='_blank'
									className='nav-link'>
									GH ICON
								</a>
							</li>
							<li className='col nav-item'>
								<a
									href='https://t.me/seschustle'
									rel='noreferrer'
									target='_blank'
									className='nav-link'>
									TG ICON
								</a>
							</li>
							<li className='col nav-item'>
								<a
									href='"mailto:plovkiy@yandex.ru'
									rel='noreferrer'
									target='_blank'
									className='nav-link'>
									MAIL ICON
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
