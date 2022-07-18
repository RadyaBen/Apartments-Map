import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';

import { MainPage } from '../../pages/MainPage';
import { CreateApartmentAd } from '../../containers/CreateApartmentAd';

const App = () => {

	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/createAd' element={<CreateApartmentAd />} />
				</Routes>
			</Router>
		</>
	);
};

export { App };