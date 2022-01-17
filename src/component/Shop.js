import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'

export const Shop = () => {
    const dispatch = useDispatch()
    const {withdrawMoney,depostiMoney} = bindActionCreators(actionCreators,dispatch)

    return (
        <div className='container'>
            <h2>Deposit/Withdrows Money</h2>
            <button className="btn btn-primary mx-2" onClick={()=>(withdrawMoney(100))}>-</button>
            Update Balance
            <button className="btn btn-primary mx-2" onClick={()=>{depostiMoney(100)}}>+</button>
        </div>
    )
}
