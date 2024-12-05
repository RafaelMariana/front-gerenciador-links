import { Outlet } from "react-router-dom";

function AuthenticationLayout(){

    return(
        <>
        <h1>Header da pagina Login</h1>
        <div>
            <Outlet/>
        </div>
        </>
    )
}


export default AuthenticationLayout