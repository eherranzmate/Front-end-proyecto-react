import "../scss/login.scss"
import { useDispatch } from "react-redux";
import { loginUser } from "./redux/actions/auth.actions";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Login () {
    
    const { register, handleSubmit } = useForm(); //register es la funcion de donde se deca la info de los input con useform
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logueo = async (formData) => {   
        dispatch(loginUser(formData, navigate))  
    }


    return(
        <div className="container-login">
            <h2>Login de usuario</h2>
            <form onSubmit={handleSubmit(logueo)}>
            <label>
                Email
                <input type="email" {...register("email")}/>
            </label>
            <label>
            Password
                <input type="password" {...register("password")}/>
            </label>
            <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login;