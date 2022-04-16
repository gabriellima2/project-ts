import Container from "./components/Container";
import { UserContextProvider } from "./context/User";

import "./App.css";

function App() {
	return (
		<UserContextProvider>
			<Container />
		</UserContextProvider>
	);
}

export default App;
