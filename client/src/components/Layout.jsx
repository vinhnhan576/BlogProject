import { HashRouter } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import Routes from "../routes/routes";

function Layout() {
	return (
		<HashRouter>
			<div className="App">
				<Header></Header>
				<div className="container">
					<div className="main">
						<Routes />
					</div>
				</div>
				<Footer></Footer>
			</div>
		</HashRouter>
	);
}

export default Layout;
