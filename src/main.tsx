import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import App from "./App.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Auth0Provider
            domain="dev-5i1nqtahstufgwe6.us.auth0.com"
            clientId="NLesU7T0ah8zMSOhQfVJE9NXTCS79poM"
            authorizationParams={{
                redirect_uri: window.location.origin,
            }}
        >
            <Router>
                <Provider store={store}>
                    <App />
                    <ToastContainer
                        position="top-right"
                        autoClose={4000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                    />
                </Provider>
            </Router>
        </Auth0Provider>
    </React.StrictMode>,
);
