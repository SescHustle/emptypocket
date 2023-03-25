import React from 'react';
import SpendingsTable from '../components/SpendingsTable';

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
								onClick={toggleAddNew}>
								Add New
							</button>
						</div>
					</div>
					<form id='addSpendingForm' className='my-3 row row-cols-1 row-cols-sm-3 d-none'>
						<div className='my-1 my-sm-auto col-12 col-sm-4'>
							<input
								type='date'
								placeholder='Date'
								name='expense-date'
								id='expense-date'
								className='w-100 form-control'
							/>
						</div>
						<div className='my-1 my-sm-auto col-12 col-sm-4 col-4'>
							<input
								type='text'
								placeholder='Name'
								name='expense-name'
								id='expense-name'
								className='form-control w-100'
							/>
						</div>
						<div className='my-1 my-sm-auto col-12 col-sm-4 col-4'>
							<select
								name='expense-category'
								label='Category'
								id='expense-category'
								className='form-select w-100'>
								<option selected disabled className='bg-dark'>
									Choose category...
								</option>
								<option>Category 1</option>
								<option>Category 2</option>
								<option>Category 3</option>
							</select>
						</div>
						<div className='my-1 my-sm-auto col-12 col-sm-4 col-4'>
							<input
								type='number'
								placeholder='Amount'
								name='expense-amount'
								id='expense-amount'
								className='w-100 form-control'
							/>
						</div>
						<div className='my-1 my-sm-auto col-12 col-sm-4 col-4'>
							<input
								type='textarea'
								placeholder='Comment'
								name='expense-comment'
								id='expense-comment'
								className='w-100 form-control'
							/>
						</div>
						<div className='my-1 my-sm-auto col-12 col-sm-4 col-4'>
							<button
								type='submit'
								name='expense-submit'
								id='expense-submit'
								className='btn btn-outline-success w-100'>
								Add
							</button>
						</div>
					</form>
					<SpendingsTable />
				</div>
			</div>
		</main>
	);
}

export default Spendings;
