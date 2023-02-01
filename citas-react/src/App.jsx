import { useState } from "react";
import { ListadoPacientes } from "./components/ListadoPacientes";
import { Header } from "./components/Header";
import { Formulario } from "./components/Formulario";

function App() {
	const [pacientes, setPacientes] = useState([]);

	return (
		<div className="container mx-auto mt-20">
			<Header />
			<div className="mt-12 md:flex">
				<Formulario 
					pacientes={pacientes} 
					setPacientes={setPacientes} 
				/>
				<ListadoPacientes />
			</div>
		</div>
	);
}

export default App;
