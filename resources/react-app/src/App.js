import { BrowserRouter } from "react-router-dom";
import AppRoute from "./routes/appRoute";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/app/store";
function App() {
    return (
        <div>
            <Provider store={store}>
                <BrowserRouter>
                    <AppRoute />
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
