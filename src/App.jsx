import './App.css'
import ReusebleForm from './components/ReusebleForm/ReusebleForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefullForm from './components/StatefullForm/StatefullForm'

function App() {
  const handleSignUp=(data)=>{
    console.log("hello form sign up",data);
  }
  const handleUpdateProfile=(data)=>{
    console.log("hello form update profile",data);
  }

  return (
    <>
      <h1>Vite + React</h1>
       {/* <SimpleForm></SimpleForm> */}
       {/* <StatefullForm></StatefullForm> */}
       {/* <RefForm></RefForm> */}
       {/* <HookForm></HookForm> */}
       <ReusebleForm formTitle={"Sign up"} handleSubmit={handleSignUp}></ReusebleForm>
       <ReusebleForm formTitle={"Update Profile"} buttonText='Update Pro' handleSubmit={handleUpdateProfile}></ReusebleForm>
    </>
  )
}

export default App
