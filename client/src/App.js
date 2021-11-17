import "./styles/index.scss";
import Header from "./components/Header";
import Search from "./components/Search";
import Partners from "./components/Partners";
import {useEffect, useState} from "react";
import {getAllPartners, getPartnersByType} from "./http";

function App() {
	const [partners, setPartners] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [type, setType] = useState('');

	useEffect(() => {
		setIsLoading(true)

		if (type) {
			getPartnersByType(type)
				.then(res => setPartners(res.data))
				.catch(err => console.log(err))
				.finally(() => setIsLoading(false))

			return;
		}

		getAllPartners()
			.then(res => setPartners(res.data))
			.catch(err => console.log(err))
			.finally(() => {setIsLoading(false)})
	}, [type])

	return (
		<div className="App">
			<Header />
			<Search type={type} setType={setType}/>
			<Partners partners={partners} isLoading={isLoading} />
		</div>
	);
}

export default App;
