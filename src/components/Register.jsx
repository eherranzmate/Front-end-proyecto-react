import { useDispatch } from "react-redux";
import { registerUser } from "./redux/actions/auth.actions";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../scss/register.scss";

function Register () {
    
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const registrar = async (formData) => {   
        dispatch(registerUser(formData, navigate))  
    }


    return(
        <div className="container-register">
            <h2>Registro de usuario</h2>
            <form onSubmit={handleSubmit(registrar)}>
            <label>
                Email
                <input className="register-login" type="email" {...register("email")}/>
            </label>
            <label>
            Password
                <input type="password" {...register("password")}/>
            </label>
            <label>
                Nombre
                <input type="text" {...register("name")}/>
            </label>
            <input type="submit" value="Registrate" />
            </form>
        </div>
    )
}

export default Register;

