import initSession from "../_/initSession";

import { refreshSession } from "../_/clientSession";

export default function session(initStore) {
	return target =>
		class extends target {
			static getInitialProps({ req, query }) {
				const { isServer, session } = initSession(req);
				const store = initStore(isServer, session);
				return { store, session };
			}

			constructor(props) {
				super(props);
				this.store = initStore(props.isServer, props.session);
			}

			componentDidMount() {
				refreshSession(this.store.session);
				window.store = this.store;
			}
		};
}
