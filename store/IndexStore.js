import { setSession, destroySession } from "../_/clientSession";

import { observable, extendObservable, computed } from "mobx";
import axios from "axios";

let store = null;

class Store {
  @observable loaded = false;

  constructor(isServer, session) {
    extendObservable(this, { session });
    this.logout = ::this.logout;
    this.setLoaded = ::this.setLoaded;
    this.onSuccess = ::this.onSuccess;
    this.onFailure = ::this.onFailure;
  }

  async onSuccess({ profileObj }) {
    try {
      const { data } = await axios.post("/api/login", { user: profileObj });
      if (data) {
        this.session = profileObj;
        setSession(profileObj);
      } else {
        //handle
      }
    } catch (err) {
      console.log(err);
    }
  }

  onFailure(err) {
    console.log(err);
  }

  setLoaded() {
    this.loaded = true;
  }

  @computed
  get fullname() {
    return `${this.session.givenName} ${this.session.familyName}`;
  }

  async logout() {
    const { data } = await axios.post("/api/logout", {});

    if (data) {
      destroySession();
      this.session = null;
    }
  }

  @computed
  get isLogin() {
    return this.session == null || this.session.length == 1;
  }
}

export default function initStore(isServer, session) {
  if (isServer && typeof window === "undefined") {
    return new Store(isServer, session);
  } else {
    store = new Store(isServer, session);
    return store;
  }
}
