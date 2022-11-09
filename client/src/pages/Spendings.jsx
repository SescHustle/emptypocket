import React from 'react';

function Spendings() {
	return (
		<main className='main container-sm'>
			<div className='row main__header my-3'>
				<h1 className='h1'>Expenses</h1>
			</div>
			<div className='row main__body'>
				<div className='expenses col-12'>
					<div className='row'>
						<h2 className='h2 exenses__title col-12 col-sm-3 text-center'>
							All Expenses
						</h2>
						<div className='my-1 my-sm-auto col-12 col-sm-3 text-center'>
							<button className='btn btn-secondary btn-expenses__upload col-12 col-sm-auto'>
								Upload expenses
							</button>
						</div>
						<div className='my-1 my-sm-auto col-12 col-sm-3 text-center'>
							<button className='m-auto btn btn-secondary btn-expenses__save col-12 col-sm-auto'>
								Save expenses
							</button>
						</div>
						<div className='my-1 my-sm-auto col-12 col-sm-3 text-center'>
							<button className='m-auto btn btn-primary btn-expenses__add col-12 col-sm-auto'>
								Add New
							</button>
						</div>
					</div>
					<form className='my-3 row row-cols-1 row-cols-sm-3 expenses__add d-none'>
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
					<table className='expenses__table'>
						<tr className='expenses__row'>
							<th className='expenses__column'>Date</th>
							<th className='expenses__column'>Name</th>
							<th className='expenses__column'>Category</th>
							<th className='expenses__column'>Amount</th>
							<th className='expenses__column'>Comment</th>
						</tr>
					</table>
				</div>
			</div>
		</main>
	);
}

export default Spendings;
