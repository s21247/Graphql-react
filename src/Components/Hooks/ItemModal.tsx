import React from 'react';
import ReactDom from 'react-dom'
import {Modal} from "../Models/Modal.interface";


const ItemModal = ({children,open,onClose}: Modal) => {
    if(!open) return null;
    return ReactDom.createPortal(
        <>
            <div className="relative overflow-hidden z-50">
            <div onClick={() => onClose(value => !value)} className="fixed inset-0 bg-gray-500 opacity-50"/>
            <div className="fixed top-1/2 left-1/2 bg-white transform -translate-y-1/2 -translate-x-1/2">
                <button className="float-right mx-1 my-1 font-bold" onClick={() => onClose(value => !value)}>
                    <span className="fill-current text-gray-500 hover:text-black" aria-hidden="true">&#x2715;</span>
                </button>
                {children}
            </div>
            </div>
        </>,
        document.getElementById('portal')!
    );
};

export default ItemModal;