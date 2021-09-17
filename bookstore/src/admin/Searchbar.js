import styled from "styled-components";
import PropTypes from "prop-types";
import axios from "axios";
import 'boxicons' ;

function Searchbar({className}){
return(
    <>
        <input className={className} type="text" placeholder="Search" />
        <button className="search-icon" onClick={filterBook}></button>
    </>
)
}

function filterBook (){

}