import ReactDOM from "react-dom";
import App from "./App";
import { Provider, useDispatch } from "react-redux";
import store from "./state/store";

ReactDOM.render(
	<Provider store={store}>
		<App></App>
	</Provider>,
	document.getElementById("root")
);
