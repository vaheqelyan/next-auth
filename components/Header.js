import Head from "next/head";

const Header = ({ style, title }) => (
	<Head>
		<link rel="shortcut icon" href="/static/images/favicon.ico" type="image/x-icon" />
		<title>{title}</title>
		<style
			dangerouslySetInnerHTML={{
				__html: style
			}}
		/>
	</Head>
);

export default Header;
