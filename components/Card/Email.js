import { inject, observer } from "mobx-react";

const Email = inject(({ store }) => ({
  email: store.session.email
}))(observer(({ email }) => <p class="card_email">{email}</p>));

export default Email;
