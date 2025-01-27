import './App.css'
import {Routes,Route, useLocation} from "react-router-dom"
import {Dashboard,SignIn} from "./pages"
import {Transactions,Budgets,Pots,Recurring,Overview} from "./views"
import {AnimatePresence} from "framer-motion"
import {AuthProvider} from "./context/AuthContext"


function App() {
  const location = useLocation();
  return (
    <div data-theme="default" className="app">
      <AuthProvider>
      <div className={`app-content`}>
      <AnimatePresence mode="wait" initial={false}>
      <Routes key={location.pathname} location={location.pathname}>
          <Route path="signin" element={<SignIn/>}/>
          <Route path="/" element={<Dashboard/>}>
            <Route path="" element={<Overview/>}/>
            <Route path="budgets" element={<Budgets/>}/>
            <Route path="transactions" element={<Transactions/>}/>
            <Route path="pots" element={<Pots/>}/>
            <Route path="recurring" element={<Recurring/>}/>
          </Route>
      </Routes>
      </AnimatePresence>
      </div>

      </AuthProvider>
  </div>
  )
}

export default App
