// import AddNewExpenseModal from './AddNewExpenseModal'
import AddNewExpenseButton from './AddNewExpenseButton'
import BudgetDetails from './BudgetDetails'
import Expenses from './Expenses'

const Main = () => {
	return (
		<main>
			<BudgetDetails />
			<AddNewExpenseButton />
			<Expenses />
			{/* <AddNewExpenseModal /> */}
		</main>
	)
}

export default Main
