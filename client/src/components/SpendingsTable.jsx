import React, {useState, useEffect} from 'react';
import axios from 'axios';

function SpendingsTable() {
	const [spendings, setSpendings] = useState([]);

	useEffect(() => {
		async function getSpendings() {
			const data = await axios
				.get('http://localhost:3333/api/spendings')
				.then((response) => response.data);
			setSpendings(data);
		}
		getSpendings();
	}, []);

	return (
		<table className='table'>
			<thead>
				<tr className=''>
					<th className=''>Date</th>
					<th className=''>Name</th>
					<th className=''>Category</th>
					<th className=''>Amount</th>
					<th className=''>Comment</th>
				</tr>
			</thead>
			{spendings.map((spending) => (
				<tbody>
					<tr key={spending.id} className=''>
						<td className=''>{spending.date}</td>
						<td className=''>{spending.name}</td>
						<td className=''>{spending.category}</td>
						<td className=''>{spending.amount}</td>
						<td className=''>{spending.comment}</td>
					</tr>
				</tbody>
			))}
		</table>
	);
}

export default SpendingsTable;
