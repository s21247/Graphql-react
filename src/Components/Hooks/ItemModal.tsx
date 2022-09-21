import React from 'react';
import ReactDom from 'react-dom'
import {Modal} from "../Models/Modal.interface";


const ItemModal = ({children,open,onClose}: Modal) => {
    if(!open) return null;
    return ReactDom.createPortal(
        <>
            <div className="relative z-50 overflow-hidden">
            <div onClick={() => onClose(value => !value)} className="fixed inset-0 bg-gray-500 opacity-50 "/>
            <div className="fixed top-1/2 left-1/2 bg-white transform -translate-y-1/2 -translate-x-1/2 h-full w-11/12 md:w-3/5 md:h-5/6 overflow-y-hidden">
                <button className="absolute top-3 right-2 text-2xl font-bold" onClick={() => onClose(value => !value)}>
                    <span className="fill-current text-gray-500 hover:text-black " aria-hidden="true">&#x2715;</span>
                </button>
                {children}
            </div>
            </div>
        </>,
        document.getElementById('portal')!
    );
};

export default ItemModal;