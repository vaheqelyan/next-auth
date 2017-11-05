import React, { Component } from "react";

import initStore from "../store/PageStore";
import Nav from "../components/Navbar";
import { Provider } from "mobx-react";

import session from "../_/sessionWrapper";

import Header from "../components/Header";

import Style from "../static/stylesheet/pages/pages.css";
import Footer from "../components/Footer";
import Ribbon from "../components/Ribbon";

@session(initStore)
export default class extends Component {
	render() {
		return (
			<div>
				<Header title="Page 1" style={Style} />;
				<Ribbon />
				<Provider store={this.store}>
					<Nav />
				</Provider>

				<div class="main">
					<div class="middle">
						<h3>You are in another page - /page1 {!this.store.session && ", You are not logged in"}</h3>
						{this.store.session && <p>but as you can see session still works</p>}
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
