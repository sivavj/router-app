import "./App.css";
import { Outlet, NavLink } from "react-router-dom";

function App() {
    return ( <
        div className = "App" >
        <
        h1 > Book Keeper < /h1> <
        nav style = {
            {
                borderBottom: "solid 1px",
                paddingBottom: "1rem",
            }
        } >
        <
        NavLink style = {
            ({ isActive }) => {
                return {
                    padding: "5px 10px",
                    textDecoration: "none",
                    color: isActive ? "white" : "royalblue",
                    background: isActive ? "green" : "white",
                };
            }
        }
        to = "/invoices" >
        Invoices <
        /NavLink>{" "} |
        { " " } <
        NavLink style = {
            ({ isActive }) => {
                return {
                    padding: "5px 10px",
                    textDecoration: "none",
                    color: isActive ? "white" : "royalblue",
                    background: isActive ? "green" : "white",
                };
            }
        }
        to = "/expenses" >
        Expenses <
        /NavLink> <
        /nav> <
        Outlet / >
        <
        /div>
    );
}

export default App;