import React, { useState } from 'react'
import { addItem } from '../actions';
import './AddItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

const AddItem = ({ dispatch }) => {

    const [inputValue, setInputValue] = useState('');
    const handleAddButtonClick = () => {
		const newItem = {
			itemName: inputValue,
			quantity: 1,
			isSelected: false,
		};
        if(inputValue.trim() !== '') {
            dispatch(addItem(newItem))
        }
        setInputValue('');
    };

    const enterPressed = (event) => {
        var code = event.keyCode || event.which;
        if(code === 13) { 
            handleAddButtonClick();
        } 
    }
    
    return (
        <>
            <div className='add-item-box'>
                <input value={inputValue} onKeyPress={(event) => enterPressed(event)} onChange={(event) => setInputValue(event.target.value)} className='add-item-input' placeholder='Add an item...' />
                <FontAwesomeIcon icon={faPlus} onClick={() => handleAddButtonClick()} />
            </div>
        </>
    )
}
export default connect()(AddItem);