import Header from './components/Header'
import Main from './components/Main'
import { DataProvider } from './context/Context'

const App = () => {
	return (
		<DataProvider>
			<div className='relative'>
				<Header />
				<Main />
			</div>
		</DataProvider>
	)
}

export default App
