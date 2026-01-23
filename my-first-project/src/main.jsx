import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./Redux/Store/Store.js";
import "./index.css";
import Calculator from "./Calculator.jsx";
import App from "./App.jsx";
import App2_Components from "./App2_Components.jsx";
import App3_PropsState from "./App3_PropsState.jsx";
import App4_EventHandling from "./App4_EventHandling.jsx";
import App5_ConditionalRendering from "./App5_ConditionalRendering.jsx";
import App6_ReactHooks from "./App6_ReactHooks.jsx";
import App7_ReactRouter from "./App7_ReactRouter.jsx";
import App8_StylingApproaches from "./App8_StylingApproaches.jsx";
import App9_ErrorBoundary from "./App9_ErrorBoundary.jsx";
import App10_StateManagement from "./App10_StateManagement.jsx";
import Canteen from "./Redux/Canteen.jsx";
import AxiosUsers from "./AxiosUsers.jsx";
import FetchUsers from "./FetchUsers.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      {/* <App />
      <App2_Components />
      <App3_PropsState />
      <App4_EventHandling />
      <App5_ConditionalRendering />
      <App6_ReactHooks />
      <App7_ReactRouter /> */}
      {/* <Calculator/> */}
      {/* <App8_StylingApproaches/> */}
      {/* <App9_ErrorBoundary /> */}
      {/* <App10_StateManagement /> */}
      {/* <Canteen /> */}
      <AxiosUsers />
      <FetchUsers />
    </StrictMode>
  </Provider>
);
