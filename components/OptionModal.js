import React from 'react';
import Modal from 'react-modal'


const OptionModal = (props) => (
<Modal
isOpen = {!!props.selectedOption}
onRequestClose = {props.clear}
constentLabel =  {"Selected Option"}
>
<h3>Selected Optiong</h3>
{props.selectedOption && <p>{props.selectedOption}</p>}
<button onClick = {props.clear}>clear</button>
</Modal>
)

export default OptionModal