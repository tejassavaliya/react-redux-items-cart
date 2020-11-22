import React from 'react'
import { connect } from 'react-redux';
import { deleteItem, decrementItemQuantity, incrementItemQuantity  } from '../actions';
import './ItemList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';

const ItemList = ({ items, myTotalCount, dispatch }) => {

    const handleQuantityIncrease = (index) => {
        dispatch(incrementItemQuantity(index))
	};

	const handleQuantityDecrease = (index) => {
        dispatch(decrementItemQuantity(index));
	};
    const removeItem = (index) => {
        dispatch(deleteItem(index));
    }
   
    return (
        <>
            <div className='item-list'>
                {items.map((item, index) => (
                    <div className='item-container' key={index}>
                        <div className='item-name'>
                            <FontAwesomeIcon icon={faTimes} onClick={() => removeItem(index)} />
                            <span>{item.itemName}</span>
                        </div>
                        <div className='quantity'>
                            <button>
                                <FontAwesomeIcon icon={faChevronLeft} onClick={() => handleQuantityDecrease(index)} />
                            </button>
                            <span> {item.quantity} </span>
                            <button>
                                <FontAwesomeIcon icon={faChevronRight} onClick={() => handleQuantityIncrease(index)} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {
                (items && items.length) ? (
                <div className='total'>Total: {myTotalCount}</div>
                ) : ''
            }
            
        </>
    )
}
const mapStateToProps = (state) => ({
    items: state.data.items,
    myTotalCount: state.data.myTotalCount
})
export default connect(mapStateToProps)(ItemList);
