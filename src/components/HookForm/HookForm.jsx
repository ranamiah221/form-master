import useInputState from "../../hooks/useInputState";


const HookForm = () => {
    // const [name, handleNameChange]=useInputState('rojoni');
    const emailState=useInputState('ranarasul21@gmail.com')
    const passwordState=useInputState('123456789')
    const handleSubmit=e=>{
        e.preventDefault();
        console.log('form data', emailState.value)
        console.log('form data', passwordState.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                  {/* <input value={name} onChange={handleNameChange} type="text" name="name"/> <br /> */}
                  <input {...emailState} type="email" name="email"/> <br />
                  <input {...passwordState} type="password" name="password" /> <br />
                  <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;