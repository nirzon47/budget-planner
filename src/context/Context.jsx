import { createContext, useState, useContext } from 'react'

const DataContext = createContext()
export const useDataContext = () => useContext(DataContext)

const DataProvider = (prop) => {
	const [expenses, setExpenses] = useState(
		JSON.parse(localStorage.getItem('expenses')) || []
	)

	const [showModal, setShowModal] = useState(false)

	const updateExpenses = (item) => {
		const newExpenses = [...expenses]
		newExpenses.push(item)
		console.log(newExpenses)

		setExpenses(newExpenses)
		localStorage.setItem('expenses', JSON.stringify(newExpenses))
	}

	const deleteExpense = (id) => {
		const newExpenses = expenses.filter((item) => item.id !== id)
		setExpenses(newExpenses)
		localStorage.setItem('expenses', JSON.stringify(newExpenses))
	}

	const data = {
		expenses,
		showModal,
		setShowModal,
		updateExpenses,
		deleteExpense,
	}

	return (
		<DataContext.Provider value={data}>{prop.children}</DataContext.Provider>
	)
}

export { DataContext, DataProvider }
