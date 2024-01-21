import { actualUser } from "../components/redux/actions/auth.actions";
import { useForm } from "react-hook-form";
import {useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom";
import "../scss/actual.scss"
import { useState } from "react";

const ActualUser = () => {
  
  const [email, setEmail] = useState(null);
  
  const { handleSubmit } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const lookUser = async (formData) => {
    try {
      dispatch(actualUser(formData, navigate));
      const storedEmail = localStorage.getItem("email");
      setEmail(storedEmail);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="actual-container">
        <button onClick={handleSubmit(async (formData) => await lookUser(formData))}>Ver Usuario Logado</button>
        <p> {email}</p>  
    </div>
  );
}

export default ActualUser;

