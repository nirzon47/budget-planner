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

	const total = expenses.reduce(
		(total, item) => total + Number(item.amount),
		0
	)
	const remaining = 2000 - total

	const data = {
		expenses,
		showModal,
		setShowModal,
		updateExpenses,
		deleteExpense,
		total,
		remaining,
	}

	return (
		<DataContext.Provider value={data}>{prop.children}</DataContext.Provider>
	)
}

export { DataContext, DataProvider }
