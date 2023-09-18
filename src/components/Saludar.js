import React from "react";
import { Text} from "react-native"
import PropTypes from "prop-types";

export default function Saludar (props){
const {firstname, lastName }=props;
console.log(firstname);
   return <Text>Hola {firstname}  {lastName}🤣🤣​🤣​​</Text>;


}

Saludar.defaultProps = {
    
    lastName: "Apellido",
}

Saludar.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastName: PropTypes.string,


}