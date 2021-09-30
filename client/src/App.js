import { useEffect, useState } from 'react';
import {Route, Switch, useHistory, Redirect} from 'react-router-dom'
import Login from './Login';
import Register from './Register';
import axios from 'axios';
import Dashboard from './Dashboard';
import Modal from './Modal'

function App() {

  axios.defaults.withCredentials = true
  const history = useHistory()

  useEffect(()=>{
    axios.get("http://localhost:3001/login").then((response)=>{
      if(response.data.loggedIn){
        setIsAuth(true)
      }else{
        setIsAuth(false)
      }
    })
  },[])


  const [register, setRegister]=useState({
    username : '',
    first_name : '',
    last_name:'',
    email:'',
    phone_number :'',
    password:''

  })
  const [login, setLogin]=useState({
    user:'',
    pass:''
  })
  const [res, setRes]= useState('')
  const [isAuth, setIsAuth]= useState(null)
  const [modalShow, setModalShow] = useState(false);



  const handleChangesLogin =(e)=>{
    let target = e.target
    let value = target.value
    let name = target.name
    setLogin({...login,
                [name] : value})
  }
  const handleChangesRegister =(e)=>{
    let target = e.target
    let value = target.value
    let name = target.name
    setRegister({...register,
                [name] : value})
  }

  

  const handleSubmitLogin = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/login',login).then((response)=>{
      if(response.data.loggedIn){
        setIsAuth(true)
        history.push('/dashboard')
      }else{
        setRes('Wrong username/password combination')
        setModalShow(true)
      }
    })
    .catch((err)=>{
      throw err
    })
    
  }
  const handleSubmitRegister =(e)=>{
    e.preventDefault()
      axios.post('http://localhost:3001/register',register).then((response)=>{
        setRes(response.data.message)
      }).then(()=>{ 
        setModalShow(true) 
      })
      .catch((err)=> {
        throw err
      })
  }
  const handleSubmitLogout =(e)=>{
    e.preventDefault()
    axios.get('http://localhost:3001/logout').then((response)=>{
      if(response.data.loggedIn === false){
        setIsAuth(false)
        history.push("/Login")
      }
    })
  }

  const {username, first_name, last_name, email, phone_number, password}= register
  const  {user, pass}=login

  const loginValues = {user, pass}
  const registerValues={username, first_name, last_name, email, phone_number, password}

  return (
    <div>
      <Switch>
        <Route exact path ="/">
          {isAuth === false && <Register  changes={handleChangesRegister} values ={registerValues} submit ={handleSubmitRegister} auth = {isAuth}/> }
          {isAuth === true && <Redirect to='/dashboard' />}
        </Route>
        <Route exact path ="/login">
        { isAuth === false && <Login changes ={handleChangesLogin} values ={loginValues} submit={handleSubmitLogin} auth = {isAuth} />}
        {isAuth === true && <Redirect to='/dashboard'/>}
        </Route>
        <Route exact path ="/dashboard" >
          {isAuth===false && <Login changes ={handleChangesLogin} values ={loginValues} submit={handleSubmitLogin} auth = {isAuth} /> }
          {isAuth===true && <Dashboard logout={handleSubmitLogout} />}

        </Route>
      </Switch>
      <Modal show={modalShow} onHide={()=>setModalShow(false)} message={res}  />
      <Modal show={modalShow} onHide={()=>setModalShow(false)} message={res} />
    </div>
  );
}

export default App;
