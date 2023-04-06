import React, {useState} from "react";
import "./layout.scss"


function Layout({children,...props}){
    return (
        <div className ="wrapper">
            <div className = "header">
            </div>

            <div className ="container">{children}</div>
        </div>
    )
}


export default Layout;