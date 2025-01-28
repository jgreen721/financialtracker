import { useState, useEffect, createContext, useContext } from "react";
import {auth} from "../firebase"
import {onAuthStateChanged, createUserWithEmailAndPassword,signOut,signInWithEmailAndPassword} from "firebase/auth"
import { useNavigate } from "react-router";


const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [alert,setAlert] = useState("");
  const [status,setStatus] = useState(-1);
  const navigate = useNavigate();

  useEffect(() => {
    // appcontext
    onAuthStateChanged(auth,(user)=>{
        if(!user){
            console.log("no user -- redirect to login")
            navigate("signin");
        }
        else{
            // console.log("user still has session -- retrieve their transactions and direct them to dashboard",user);
            let username = user.email.split("@")[0];
            console.log("Username",username);
            setUser(username);
            if(status == 200)setTimeout(()=>{navigate("/")},1500);
            else navigate("/transactions");
            
        }
    })
  }, []);


  const signUp = async(userData)=>{
    // console.log(userData,auth);
    try{
      await createUserWithEmailAndPassword(auth,userData.email,userData.password);
      console.log("user successfully created!");
      setAlert("User successfully created! 🥳")
      toggleStatus(200);
    }
    catch(e){
      console.log("error with signing up.",e.message)
      setAlert(e.message);
      toggleStatus(500);
    }
  }



  const signIn = async(userData)=>{
    try{
      await signInWithEmailAndPassword(auth,userData.email,userData.password);
      console.log("user successfully signed-in!");
      setAlert("Welcome back! 🥳")
      toggleStatus(200);
    }
    catch(e){
      console.log("error with signing in.",e.message)
      setAlert(e.message);
      toggleStatus(500);
    }
  }


  const handleSignOut=()=>{
    signOut(auth);
    navigate("/signin")
  }

  const toggleStatus = (status)=>{
    setStatus(status);
    setTimeout(()=>{
      setStatus(-1)
    },2500);
  }

  const values = {
      user,
      alert,
      status,
      signUp,
      signIn,
      handleSignOut,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};