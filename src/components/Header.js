import React from "react";
import Nav from "./Nav";
import "../utils/css/style.css";
import { LoginButton } from "./Header-components"

export default function Header(){
    return (
        <header>
        <LoginButton></LoginButton>
        <Nav></Nav>
        </header>
    )
}