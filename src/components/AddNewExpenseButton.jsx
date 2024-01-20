const AddNewExpenseButton = (prop) => {
	const showModal = () => {
		prop.setShowModal(true)
	}

	return (
		<div className='grid my-4 place-content-center'>
			<button
				className='border-none rounded-md outline-none btn btn-sm bg-amber-400 hover:bg-amber-500'
				onClick={showModal}
			>
				Add New Expense
			</button>
		</div>
	)
}

export default AddNewExpenseButton
