import { nanoid } from 'nanoid'
import { useState } from 'react'
import { FaXmark } from 'react-icons/fa6'
import { useDataContext } from '../context/Context'

const AddNewExpenseModal = () => {
	const data = useDataContext()

	const [title, setTitle] = useState('')
	const [amount, setAmount] = useState('')

	const handleAddExpense = (e) => {
		e.preventDefault()

		if (!title || !amount) {
			return
		}

		if (amount > data.remaining) {
			alert('Amount cannot be more than remaining amount')
			return
		}

		const newExpense = {
			id: nanoid(),
			title,
			amount,
		}

		data.updateExpenses(newExpense)
		data.setShowModal(false)
	}

	return (
		<div className='absolute top-0 grid w-screen h-screen bg-black bg-opacity-35 place-content-center'>
			<form className='relative flex flex-col gap-6 px-4 py-8 bg-white rounded-md shadow-md w-72'>
				<div className='grid gap-2'>
					<label htmlFor='new-expense' className='text-sm font-semibold'>
						Add Expense Title
					</label>
					<input
						type='text'
						name='New Expense'
						id='new-expense'
						className='w-full border-gray-300 rounded-md input'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						placeholder='Potato'
					/>
				</div>
				<div className='grid gap-2'>
					<label htmlFor='amount' className='text-sm font-semibold'>
						Enter Amount
					</label>
					<input
						type='number'
						inputMode='numeric'
						name='Amount'
						id='amount'
						className='border-gray-300 rounded-md input'
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						placeholder='50'
					/>
				</div>
				<button
					className='text-white border-none rounded-md outline-none btn btn-sm bg-amber-800 hover:bg-amber-900'
					type='submit'
					onClick={handleAddExpense}
				>
					Add
				</button>

				<button
					className='absolute top-0 right-0 p-4'
					onClick={() => data.setShowModal(false)}
				>
					<FaXmark />
				</button>
			</form>
		</div>
	)
}

export default AddNewExpenseModal
