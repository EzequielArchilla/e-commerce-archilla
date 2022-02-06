import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const UserForm = ({setBuyer}) => {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const [nameHidden, setNameHidden] = useState(true);
    const [lastNameHidden, setLastNameHidden] = useState(true);
    const [emailHidden, setEmailHidden] = useState(true);
    const [validation, setValidation] = useState(false);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setValidation(true);
        setBuyer("");
        
        if(name.length === 0 )
        {
                    setNameHidden(false);
                    setValidation(false);
                }else{
                    setNameHidden(true);
                }

                if(lastName.length === 0)
                {
                    setLastNameHidden(false);
                    setValidation(false);
                }else{
                    setLastNameHidden(true);
        }

        if(email.length === 0 || !email.includes('@') || !email.includes('.com'))
        {
            setEmailHidden(false);
            setValidation(false);
        }else{
            setEmailHidden(true);
        }
    }

    useEffect(()=>{
        if(validation)
        {
            setBuyer({name:name, lastName:lastName, email:email});
        }
    },[validation]);

    return <form className="form-container" onSubmit={(e)=>handleSubmit(e)}>
        <h6>Datos del comprador</h6>
        <label>
            Nombre:
            <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}></input>
        </label>
        <p className="form-p-error" hidden={nameHidden}>Nombre obligatorio</p>

        <label>
            Apellido:
            <input type="text" name="lastName" value={lastName} onChange={(e)=>setLastName(e.target.value)}></input>
        </label>
        <p className="form-p-error" hidden={lastNameHidden}>Apellido obligatorio</p>

        <label>
            Mail:
            <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        </label>
        <p className="form-p-error" hidden={emailHidden}>Formato de mail invalido</p>

        <input type="submit" value="Validar"/>
        <span hidden={!validation} className="material-icons">check_circle</span>
    </form>
}

export default UserForm