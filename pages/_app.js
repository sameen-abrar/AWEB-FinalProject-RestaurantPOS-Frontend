import "@/styles/globals.css";

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
