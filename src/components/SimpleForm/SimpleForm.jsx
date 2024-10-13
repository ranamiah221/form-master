

const SimpleForm = () => {
    const handleSubmit=e=>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
        console.log("submit btn clicked");
    }
    return (
       <form onSubmit={handleSubmit}>
             <input type="text" name="name"/> <br />
             <input type="email" name="email"/> <br />
             <input type="password" name="password" /> <br />
             <input type="submit" value="Submit" />
       </form>
    );
};

export default SimpleForm;