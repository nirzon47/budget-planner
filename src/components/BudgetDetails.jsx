import { useDataContext } from '../context/Context'

const BudgetDetails = () => {
	const data = useDataContext()
	console.log(data)

	return (
		<div className='flex flex-wrap justify-center gap-4 px-8 my-6'>
			<h3 className='w-56 px-4 py-2 font-medium text-center bg-black rounded-md bg-opacity-20'>
				Budget: 2000
			</h3>
			<h3 className='w-56 px-4 py-2 font-medium text-center bg-black rounded-md bg-opacity-20'>
				Remaining: {data.remaining}
			</h3>
			<h3 className='w-56 px-4 py-2 font-medium text-center bg-black rounded-md bg-opacity-20'>
				Used: {data.total}
			</h3>
		</div>
	)
}

export default BudgetDetails
