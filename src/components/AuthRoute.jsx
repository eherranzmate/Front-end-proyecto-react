import { Navigate, useLocation } from "react-router-dom";

function AuthRoute ({ component }){

    const location = useLocation()
    console.log(location)

    const token = localStorage.getItem("token");
   
    if (token) return component;
    if (!token) return <Navigate to="/" state={{prevRoute: location.pathname}} />;
}



export default AuthRoute