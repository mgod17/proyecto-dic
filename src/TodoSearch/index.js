import React from "react";
import "./todoSearch.css"

function TodoSearch({searchValue, setSearchValue}) {

    const onSearchValueOnChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value)
    };
    return (
    <input onChange={onSearchValueOnChange} className="todoSearch" placeholder="Buscar tarea.."
    value={searchValue}/>
)
}
export {TodoSearch};