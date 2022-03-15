import { ContactCard } from './components/ContactCard';
import './App.css';

export function App(): JSX.Element {
	return (
		<div className="App">
			<ContactCard name="Richard Bell" email="example@email.com" phone="(360)555-1234" />
		</div>
	);
}