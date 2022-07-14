import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MoreDetails from "./MovieComponents/MoreDetails"

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path={"/movies"} element={<App />} />
				<Route path='/movies/:movieID/*' element={<MoreDetails />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
)
