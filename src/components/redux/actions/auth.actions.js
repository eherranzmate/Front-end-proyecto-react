import { API } from "../../axios/api";

export const registerUser = (formData, navigate) => async(dispatch) => { dispatch({type: "register_user"});
console.log(formData);
try {
    const result = await API.post("user/register", formData);
    console.log(result)
    dispatch({type:"register_ok", payload: result.data});
    navigate("/login");
} catch (error) {
    dispatch({type:"register_ko", payload: error.message});
    console.log(error);
}
};

//como parámetro de registerUser la info del formulario y la pagina de registro

export const loginUser = (formData, navigate) => async(dispatch) => { dispatch({type: "login_user"});
console.log(formData);
try {
    const result = await API.post("user/login", formData);
    console.log(result)
    dispatch({type:"login_user_ok", payload: result.data});
    localStorage.setItem("user",result.data.getUser._Id)
    localStorage.setItem("email", result.data.getUser.email)
    localStorage.setItem("token", result.data.token)
    navigate("/");
} catch (error) {
    dispatch({type:"login_user_ko", payload: error.message});
    console.log(error);
}
};

export const actualUser = (formData) => async (dispatch) => {
    dispatch({ type: "actual_user_ok"});
    //comprueba si llegan los datos 
    console.log(formData)
    try {
        const result = await API.post("user/checksession", formData);
        console.log(result)
        console.log(result.data.email)
        localStorage.getItem("email")

    } catch (error) {
        dispatch({ type: "actual_user_ko", payload: error.message });
        console.log(error)
    }

};


export const logoutUser = (formData, navigate) => async (dispatch) => {
    dispatch({ type: "log_out"});
    console.log(formData)
    try {
        localStorage.removeItem("token")
        navigate("/")

    } catch (error) {
        dispatch({ type: "log_out_ko", payload: error.message });
        console.log(error)
    }

};

export const addCharacter = (characterData) => async (dispatch) => {
  dispatch({ type: "add_character" });
  try {
    const result = await API.post("/character", characterData);
    console.log(result);
    dispatch({ type: "add_character_ok", payload: result.data });
  } catch (error) {
    dispatch({ type: "add_character_ko", payload: error.message });
    console.log(error);
  }
};