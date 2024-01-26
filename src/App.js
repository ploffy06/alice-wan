import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookReview from './pages/BookReview';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/BookReview" element={<BookReview />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
