import { 
	BrowserRouter as Router, 
	Routes, 
	Route
} from 'react-router-dom';

import { MainPage } from '../../pages/MainPage';
import { CreateNewAd } from '../CreateNewAd';

const App = () => {

	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/createAd' element={<CreateNewAd />} />
				</Routes>
			</Router>
			
		</>
	);
};

export { App };