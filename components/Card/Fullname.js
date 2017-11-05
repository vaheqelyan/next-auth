import { inject, observer } from "mobx-react";

const Fullname = inject(({ store }) => ({
	fullname:store.fullname
}))(
	observer(({ fullname }) => (
		<h3 class="card_fullname">{fullname}</h3>
	))
);

export default Fullname;
