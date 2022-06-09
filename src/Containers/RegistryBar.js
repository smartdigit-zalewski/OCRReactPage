import React, {useState} from "react";
import './RegistryBar.css'
import Registry from "../Components/Registry";
import Login from "../Components/Login";
import UserPanel from "../Components/UserPanel";


function UserBar({logStatus, currentStatus}) {

    const [viewMode, setViewMode] = useState('login');

    const setView = (view) => {
        setViewMode(view);
    }


    return (


        <div>
            {currentStatus === false && (
                <div>
                    {viewMode === "login" && <Login setView={setView} logStatus={logStatus}/>}
                    {viewMode === "register" && <Registry setView={setView} logStatus={logStatus}/>}
                </div>
            )}
            {currentStatus === true && <UserPanel/>}

        </div>



    )




}

export default UserBar;