import { observable, extendObservable, computed, action } from "mobx";

let store = null;

class Store {
  constructor(isServer, session) {
    extendObservable(this, { session });
  }

  @computed
  get isLogin() {
    return this.session == null || this.session.length == 1;
  }

  @computed
  get fullname() {
    if (this.session) {
      return `${this.session.givenName} ${this.session.familyName}`;
    }
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
