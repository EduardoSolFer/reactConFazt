import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Saludar() {
    const name = 'Lalo'
    return <h1>Este es un componente de nombre: {name}</h1>
}

root.render(
    <div>
    <Saludar />
        <Saludar />
        <Saludar />
    </div>
);
