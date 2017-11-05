import React, { Component } from "react";
import Footer from "../components/Footer";
import Style from "../static/stylesheet/pages/hdiw.css";
import Nav from "../components/Navbar";
import initStore from "../store/PageStore";
import { Provider } from "mobx-react";
import Header from "../components/Header";
import session from "../_/sessionWrapper";
import Ribbon from "../components/Ribbon";

const code1 = `
function initSession(req) {
  const isServer = !!req;
  let session;
  if (isServer) {
    session = req.session.user;
  } else {
    if ("session" in window && typeof window.session == "object") {
      session = window.session;
    } else {
      session = null;
    }
  }

  return { isServer, session };
}

export default initSession;



`;

const code3 = `
import initSession from "../_/initSession";

import { refreshSession } from "../_/clientSession";

export default function session(initStore) {
  return target =>
    class extends target {
      constructor(props) {
        super(props);
        this.store = initStore(props.isServer, props.session);
      }
      static getInitialProps({ req, query }) {
        const { isServer, session } = initSession(req);
        const store = initStore(isServer, session);
        return { store, session };
      }
      componentDidMount() {
        refreshSession(this.store.session);
        window.store = this.store;
      }
    };
}

`;

const code4 = `
~~~~~~
~~~~~~
import initStore from "../store/IndexStore";
impor session from "../_/sessionWrapper";

@session(initStore)
export default class extends Component {
  render() {
    return (
      <div>
        <Header style={Style} />
        <div class="main">
          <div class="middle">
          ~~~~~~~~~~~~~~~~~~~~
`;

const code5 = `
import { observable, extendObservable } from "mobx";

let store = null;

class Store {
  constructor(isServer, session) {
    extendObservable(this, { session });
  }
}

export default function initStore(isServer, session) {
  if (isServer && typeof window === "undefined") {
    return new Store(isServer, session);
  } else {
    if (store === null) {
      store = new Store(isServer, session);
    }
    return store;
  }
}

`;

const code6 = `
export default function session(initStore) {
  return target =>
    class extends target {
      ~~~~~~~~~~~~~~~~~~
      constructor(props) {
        super(props);
        this.store = initStore(props.isServer, props.session);
      }
      ~~~~~~~~~~~~~~~~~~~
}
`;

const code7 = `
export function refreshSession(session) {
  if ("session" in window === false) {
    Object.defineProperty(window, "session", {
      get(name) {
        return window._user;
      },
      set(value) {
        window._user = value;
      }
    });
  }
}
`;

@session(initStore)
export default class extends Component {
  render() {
    return (
      <div>
        <Header title="How does it work" style={Style} />
        <Ribbon />
        <Provider store={this.store}>
          <Nav />
        </Provider>
        <div class="main">
          <div class="middle">
            <h3>How does it work</h3>
            <p>I will explain to you how does my session work on the client side of the app, I'll be brief</p>
            <p>After you log in with your Google account, I send the request to the server with your user data.</p>
            <p>The server processes the data and launches the session as usual. Since I need to know if you're logged in or not.</p>
            <p>Where do i get the data?</p>
            <p>
              We will use the method <code>getInitialProps</code>
              which runs both on client side and on server side, If the application is rendered from the server, you get data from the server, otherwise client-side let's make a function and export it
            </p>
            <pre>{code1}</pre>
            <p>We store our session in the global variable, not in localStorage, but we will talk about it later.</p>
            <p>This function returns whether we have session or not</p>
            <video autoPlay loop>
              <source src="https://res.cloudinary.com/dxv8p5zck/image/upload/v1509884819/ezgif-4-21cbaf7bfd_qszzq2.mp4" />
            </video>
            <p>I made a small mixin which we attach to the classes pages using decorators</p>
            <pre>{code3}</pre>
            <p>
              The decorator has one argument > <code>initStore</code>, we use it for initing our state store.
            </p>
            <pre>{code4}</pre>
            Let's make our store and export it.
            <pre>{code5}</pre>
            <p>Notice one thing, we will update our store each time to see if there is a session or it has been destroyed</p>
            <p>Our store updates in constructor</p>
            <pre>{code6}</pre>
            To save a global variable (<code>window.session</code>, or simply <code>session</code>) and do not lose it, you need to recreate it every time when the page is ready, we will use the{" "}
            <code>componentDidMount</code> lifecycle of the component Our global variable is retained during the navigation through the pages.
            <video autoPlay loop>
              <source src="https://res.cloudinary.com/dxv8p5zck/image/upload/q_auto/v1509884822/ezgif-4-07005d392d_g5uwuw.mp4" />
            </video>
            <p>Why data is stored in a global variable, not local storage</p>
            <p>I think the idea of storing in a global variable is a bit more simple and safe</p>
            <p>let's make our variable a little safer with getter/setter</p>
            <p>We rewrite the function refreshSession in clientSession.js</p>
            <pre>{code7}</pre>
            <p>What will happen and what we fixed ? Before I explain let me give an example</p>
            <video autoPlay loop>
              <source src="https://res.cloudinary.com/dxv8p5zck/image/upload/v1509884826/ezgif-4-b9eb0c214f_u43dvk.mp4" type="video/mp4" />
            </video>
            <p>Anyone can open the console and play with a global variable, to avoid this we use the getter/setter.</p>
            <p>If you delete a global variable as the page will know whether there is a session or not.</p>
            <p>
              You can also fetch a user in extreme situations (like in Zeit.co), but we do not need fetching the user every time, because getter/setter doesn't allow us to delete the variable. you can
              also validate the setter, or you can encrypt it.You can also hide the variable like this <code>window.obj1.obj2.obj3...</code>
            </p>
            <p>Another solution,you can backup, and when someone will change your common global variable, in the setter you will compare your main variable with your backup variable</p>
            <p>I think I was able to explain to you, Thank you!</p>
            <p>Think for yourself, thanks</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
