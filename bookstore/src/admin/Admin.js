import React from "react";
import { Switch, Route } from "react-router-dom";

import Sidebar from "./Component/Sidebar";
import ContainerAd from "./Component/Container";
import ShowBook from "./Component/ShowBook";
import AddBookAd from "./Component/AddBook";
import EditBookAd from "./Component/EditBook";

export default function Admin() {
	return (
		<Switch>
			<Route path="/Admin/AddBookAdmin">
				<Sidebar />
				<ContainerAd>
					<AddBookAd />
				</ContainerAd>
			</Route>

			<Route path="/Admin/EditBookAdmin/:id">
				<Sidebar />
				<ContainerAd>
					<EditBookAd />
				</ContainerAd>
			</Route>

			<Route path="/Admin">
				<Sidebar />
				<ContainerAd>
					<ShowBook />
				</ContainerAd>
			</Route>
		</Switch>
	);
}
