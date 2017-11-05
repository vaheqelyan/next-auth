import { inject, observer } from "mobx-react";

const Logout = inject(({ store }) => ({
	logout: store.logout
}))(
	observer(({ logout }) => (
		<div class="card_logout">
			<a role="button" class="pt-button " tabIndex="0" onClick={logout}>
				Logout
			</a>
		</div>
	))
);

export default Logout;
