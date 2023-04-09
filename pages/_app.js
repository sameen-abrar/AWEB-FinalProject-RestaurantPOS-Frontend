import "@/styles/globals.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./customers/home";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <BrowserRouter>
        <Switch>
          <Route path="/cus/home" Component={HomePage}></Route>
        </Switch>
      </BrowserRouter> */}
      <Component {...pageProps} />
    </>
  );
}
