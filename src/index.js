import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { persistor, store } from "./state/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<App></App>
		</PersistGate>
	</Provider>,
	document.getElementById("root")
);
