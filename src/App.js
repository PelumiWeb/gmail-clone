import React, {Suspense, useEffect} from 'react';
import './App.css';
import { selectMail } from './features/mailSlice'
import {useSelector, useDispatch} from 'react-redux'
import {selectUser, login} from './features/userSlice'
import Sidebar from './Components/Sidebar/Sidebar';
import {auth} from './firebase'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
const Mail = React.lazy(() => import('./Components/Mail/Mail'))
const MailList = React.lazy(() => import('./Components/MailList/MailList'))
const Loading = () => <p>loading...</p>
const Header =  React.lazy(() => import('./Components/Header/Header'))
const SendMail =  React.lazy(() => import('./Components/SendMail/SendMail'))
const Login = React.lazy(() => import('./Components/Login/Login'))




function App() {
  const messageIsOpen = useSelector( selectMail)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
       dispatch(
         login({
         displayName: user.displayName,
         email: user.email,
         photoUrl: user.photoURL

       }))
      }
    })

  }, [user, dispatch])
  
  return (
    <Router>
       <Suspense  fallback={<Loading />} >
      {user ?
  
    <div className="app">
     
      <Header  />
      

      <div className="app_body">
      <Sidebar />
        <Switch >
          <Route path='/mail' 
          exact 
          component={Mail} />
           <Route path='/' 
          exact
          component={MailList} />
        </Switch>
      </div>

     { messageIsOpen && <SendMail />}
  
   
    </div>
    :
    <Login />
    }
    </Suspense>

    </Router>
  );
}

export default App;
