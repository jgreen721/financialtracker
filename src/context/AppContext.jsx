import { useState, useEffect, createContext, useContext } from "react";
import {useAuthContext} from "./AuthContext"
import { addTransactionToFirestore,fetchTransactionsFromFirestore } from "../utils/firestore";
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
    // fetch("data.json")
    // .then(res=>res.json())
    // .then(res=>{
    //   console.log("Res",res);
    //   setBalance(res.balance);
    //   setPots(res.pots);
    //   setBudgets(res.budgets);
    //   setTransactions(res.transactions);
    // })
    if(user){

     fetchTransactions();
    }
    async function fetchTransactions(){
      let usersTransactions = await fetchTransactionsFromFirestore(user)
      console.log(usersTransactions);
    }
    }, [user]);

    const addTransaction=async(newTransaction)=>{
      console.log('handleAddTransaction');
      let avatarImg = newTransaction.avatar;
      delete newTransaction.avatar
      newTransaction.client = user;
      console.log("user",user);
      addTransactionToFirestore(newTransaction)
    }

 

  const values = {showMenu,
                 setShowMenu,
                 showModal,
                 setShowModal,
                 addTransaction,
                 balance,
                 pots,
                 budgets,
                 transactions};

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};