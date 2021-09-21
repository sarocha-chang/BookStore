import React from "react";
import { Switch, Route } from "react-router-dom";

import Sidebar from "./Sidebar";
import ContainerAd from "./Container";
import ShowBook from "./ShowBook";
import AddBookAd from "./AddBook";
import EditBookAd from "./EditBook";

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
