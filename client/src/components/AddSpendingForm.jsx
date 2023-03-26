import React, {useState} from 'react';
import axios from 'axios';

function AddSpendingForm() {
	const [fields, setFields] = useState({});

	async function sendSpending(event) {
		event.preventDefault();
		const data = await axios
			.post('http://localhost:3333/api/spendings', fields)
			.then((res) => res.data);
		alert('Successully added! Refresh the page to see it.');
		setFields({});
		document.getElementById('add-spending-button').textContent = 'Add New';
		document.getElementById('addSpendingForm').classList.toggle('d-none');
	}

	function handleInput(e) {
		e.preventDefault();
		const {name, value} = e.target;
		setFields({...fields, [name]: value});
	}

	return (
		<form id='addSpendingForm' className='my-3 row row-cols-1 row-cols-sm-3 d-none'>
			<div className='my-1 my-sm-auto col-12 col-sm-4'>
				<input
					type='date'
					onChange={handleInput}
					value={fields.date ?? null}
					placeholder='Date'
					name='date'
					id='expense-date'
					className='w-100 form-control'
				/>
			</div>
			<div className='my-1 my-sm-auto col-12 col-sm-4 col-4'>
				<input
					type='text'
					onChange={handleInput}
					value={fields.name ?? null}
					placeholder='Name'
					name='name'
					id='expense-name'
					className='form-control w-100'
				/>
			</div>
			<div className='my-1 my-sm-auto col-12 col-sm-4 col-4'>
				<input
					type='text'
					onChange={handleInput}
					value={fields.category ?? null}
					placeholder='Category'
					name='category'
					id='expense-category'
					className='form-control w-100'
				/>
			</div>
			<div className='my-1 my-sm-auto col-12 col-sm-4 col-4'>
				<input
					type='number'
					onChange={handleInput}
					value={fields.amount ?? null}
					placeholder='Amount'
					name='amount'
					id='expense-amount'
					className='w-100 form-control'
				/>
			</div>
			<div className='my-1 my-sm-auto col-12 col-sm-4 col-4'>
				<input
					type='textarea'
					onChange={handleInput}
					value={fields.comment ?? null}
					placeholder='Comment'
					name='comment'
					id='expense-comment'
					className='w-100 form-control'
				/>
			</div>
			<div className='my-1 my-sm-auto col-12 col-sm-4 col-4'>
				<button
					onClick={sendSpending}
					type='submit'
					name='expense-submit'
					id='expense-submit'
					className='btn btn-outline-success w-100'>
					Add
				</button>
			</div>
		</form>
	);
}

export default AddSpendingForm;
