import { useState, useEffect, createContext, useContext } from "react";
import {useAuthContext} from "./AuthContext"
const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const {user} = useAuthContext();
  const [balance,setBalance] = useState({});
  const [pots,setPots] = useState([]);
  const [budgets,setBudgets] = useState([]);
  const [transactions,setTransactions] = useState([]);

  //UI state
  const [showMenu,setShowMenu] = useState(true);
  const [showModal,setShowModal] = useState(false);


  useEffect(() => {
    // appcontext
    fetch("data.json")
    .then(res=>res.json())
    .then(res=>{
      console.log("Res",res);
      setBalance(res.balance);
      setPots(res.pots);
      setBudgets(res.budgets);
      setTransactions(res.transactions);
    })
    
  
  }, []);

  const values = {showMenu,
                 setShowMenu,
                 showModal,
                 setShowModal,
                 balance,
                 pots,
                 budgets,
                 transactions};

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};