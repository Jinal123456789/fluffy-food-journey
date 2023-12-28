import { useRouteError } from "react-router-dom";
const Error= () =>{
    const err = useRouteError();
    const{status, statusText} = err;
    console.log(err);
    return(
        <>
        <h1>This is Error Page</h1>
        <h3>Opps Something went wrong</h3>
        <h1>{err.status + " : " + err.statusText}</h1>
        <h1>{status + " : " + statusText}</h1>
        <h3>{err.data}</h3>
        </>
    )
}

export default Error;