import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';

import { MainPage } from '../MainPage';
import { CreateApartmentAd } from '../CreateApartmentAd';
import { NotFoundPage } from '../NotFoundPage';

const App = () => {

	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/createAd' element={<CreateApartmentAd />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</Router>
		</>
	);
};

export { App };