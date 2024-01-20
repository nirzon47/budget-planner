import { FaXmark } from 'react-icons/fa6'
import { useDataContext } from '../context/Context'

const Expenses = () => {
	const data = useDataContext()

	return (
		<div className='px-2 mx-auto max-w-96'>
			<h2 className='mb-2 text-xl font-bold text-center'>Expenses</h2>
			<div>
				{data.expenses.length === 0 && (
					<p className='px-4 py-2 bg-black rounded-md bg-opacity-10'>
						No expenses added yet
					</p>
				)}
				<ul className='flex flex-col gap-2'>
					{data.expenses.length > 0 &&
						data.expenses.map((item) => (
							<li
								className='flex justify-between px-4 py-2 font-medium bg-black rounded-md bg-opacity-5'
								key={item.id}
							>
								<span>{item.title}</span>
								<div className='flex gap-4'>
									<span>Rs. {item.amount}</span>
									<div
										className='flex items-center justify-center w-6 h-6 text-white duration-200 bg-red-500 rounded-full cursor-pointer hover:bg-transparent hover:text-red-500'
										onClick={() => data.deleteExpense(item.id)}
									>
										<FaXmark />
									</div>
								</div>
							</li>
						))}
				</ul>
			</div>
		</div>
	)
}

export default Expenses
