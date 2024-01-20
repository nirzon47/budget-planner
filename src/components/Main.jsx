import AddNewExpenseModal from './AddNewExpenseModal'
import { useDataContext } from '../context/Context'
import AddNewExpenseButton from './AddNewExpenseButton'
import BudgetDetails from './BudgetDetails'
import Expenses from './Expenses'

const Main = () => {
	const context = useDataContext()

	return (
		<main>
			<BudgetDetails />
			<AddNewExpenseButton setShowModal={context.setShowModal} />
			<Expenses />
			{context.showModal && <AddNewExpenseModal />}
		</main>
	)
}

export default Main
