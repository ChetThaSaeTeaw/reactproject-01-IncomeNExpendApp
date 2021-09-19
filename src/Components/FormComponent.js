import './FormComponents.css';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function FormComponents(props) {
    
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [formValid, setFormValid] = useState(false);

    const inputTitle = event => {
        setTitle(event.target.value);
    }

    const inputAmount = event => {
        setAmount(event.target.value);
    }

    const saveItems = event => {
        event.preventDefault();
        const itemsData = {
            id : uuidv4(),
            title : title,
            amount : Number(amount)
        }
        props.onAddItems(itemsData)
        setTitle('');
        setAmount('');    
    }

    useEffect(()=> {
        const checkTitle = title.trim().length > 0 && amount !== 0
        setFormValid(checkTitle);
    },[title,amount]);

    return (
        <div className="container">
            <form onSubmit={saveItems}>
                <div className="form-control">
                    <label>รายการ</label>
                    <input type="text" placeholder="กรุณาระบุรายการ" onChange={inputTitle} value={title}/>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder=" + ราคาขึ้น , - ราคาลง" onChange={inputAmount} value={amount}/>
                </div>
                <div>
                    <button type="submit" className="btn" disabled={!formValid}>เพิ่มรายการ</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponents;