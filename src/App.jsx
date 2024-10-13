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
       <ReusebleForm handleSubmit={handleSignUp}>
        <div>
          <h2>Sign up</h2>
          <p>please new user sign up </p>
        </div>
       </ReusebleForm>
       <ReusebleForm buttonText='Update Pro' handleSubmit={handleUpdateProfile}>
       <div>
          <h2>Update Profile</h2>
          <p>please Update your profile </p>
        </div>
       </ReusebleForm>
    </>
  )
}

export default App
