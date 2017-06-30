const React = require('react');
const ReactDOMServer = require("react-dom/server");

const App = require('../app/App.jsx');



module.exports = function (props) {

	let content = ReactDOMServer.renderToString(
		<App initialCount={props.initialCount}></App>
	);

	let propsScript = 'var APP_PROPS = ' + JSON.stringify(props);

	let html = ReactDOMServer.renderToStaticMarkup(
		<html>
			<head>
			</head>
			<body>
				<div id="root" dangerouslySetInnerHTML={
					{ __html: content }
				} />
				<script dangerouslySetInnerHTML={
					{ __html: propsScript }
				}></script>
				<script src={"entry.generator.js"}></script>
			</body>
		</html>
	);

	return html;
}