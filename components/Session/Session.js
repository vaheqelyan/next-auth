import { inject, observer } from "mobx-react";
import Card from "../Card/Card";

const Session = inject(({ store }) => ({
	isLogin: store.isLogin
}))(observer(({ isLogin, renderer }) => <section>{isLogin ? renderer : <Card />}</section>));

export default Session;
