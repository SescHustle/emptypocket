import React from 'react';
import SpendingsTable from '../components/SpendingsTable';
import AddSpendingForm from '../components/AddSpendingForm';

function toggleAddNew(e) {
	e.preventDefault();
	e.target.textContent = e.target.textContent === 'Cancel' ? 'Add New' : 'Cancel';
	const form = document.getElementById('addSpendingForm');
	form.classList.toggle('d-none');
}

function Spendings() {
	return (
		<main className='main container-sm'>
			<div className='row my-3'>
				<h1 className='h1'>Spendings</h1>
			</div>
			<div className='row'>
				<div className='col-12'>
					<div className='row justify-content-between'>
						<h2 className='col-12 col-sm-auto'>All Spendings</h2>
						<div className='my-1 my-sm-auto col-12 col-sm-auto'>
							<button
								className='m-auto btn btn-primary col-12 col-sm-auto'
								id='add-spending-button'
								onClick={toggleAddNew}>
								Add New
							</button>
						</div>
					</div>
					<AddSpendingForm />
					<SpendingsTable />
				</div>
			</div>
		</main>
	);
}

export default Spendings;
