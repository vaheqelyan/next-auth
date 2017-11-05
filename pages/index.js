import React, { Component } from "react";

import initStore from "../store/IndexStore";
import { Provider } from "mobx-react";

import Session from "../components/Session/Session";
import LoginRenderer from "../components/LoginRenderer";

import Style from "../static/stylesheet/pages/index.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

import session from "../_/sessionWrapper";
import Ribbon from "../components/Ribbon";

@session(initStore)
export default class extends Component {
  render() {
    return (
      <div>
        <Header title="Next-auth demo" style={Style} />
        <Ribbon />
        <div class="main">
          <div class="middle">
            <div class="logo">
              <img class="react" src="http://res.cloudinary.com/dxv8p5zck/image/upload/q_auto/v1509884815/react-logo_zu3var_ttoyq3.png" />
            </div>
            <div class="form">
              <Provider store={this.store}>
                <Session renderer={<LoginRenderer />} />
              </Provider>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
