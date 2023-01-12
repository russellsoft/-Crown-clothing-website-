import { Routes, Route } from 'react-router-dom'
import Navigation from './route/navigation/navigation.component';
import Authorization from './route/sign-in/authorization.component';
import Home from './route/home/home.component';
import Shop from './route/shop/shop.component';
import CheckOut from './route/checkout/checkout.component';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='shop/*' element={<Shop />} />
				<Route path='auth' element={<Authorization />} />
				<Route path='checkout' element={<CheckOut />} />
			</Route>
		</Routes>
	)
}

export default App;
