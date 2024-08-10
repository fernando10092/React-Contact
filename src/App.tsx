import "./App.css"

import Layout from "./container/layout"

//REDUX - PROVIDER
import { Provider } from "react-redux"
import { store } from "./store"

const App = () => {
  return (
    <>
        <Provider store={store}>

          <Layout />

        </Provider>

    </>
  )
}

export default App
