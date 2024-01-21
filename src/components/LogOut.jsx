import { logoutUser } from "../../src/components/redux/actions/auth.actions";
import { useForm } from "react-hook-form";
import {useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom";
import "../scss/logout.scss"

const LogOut = () => {
  
  const { handleSubmit } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOutAction = async(formData) => {
    dispatch(logoutUser(formData,navigate))
  }

  return (
        <button className="button-logout" onClick={handleSubmit(logOutAction)}>Cerrar Sesion</button>  
  );
}

export default LogOut;