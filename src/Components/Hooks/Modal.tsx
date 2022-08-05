import React from 'react';
import ReactDom from 'react-dom'

interface Props {
    children: React.ReactNode
    onClose:  React.Dispatch<React.SetStateAction<Boolean>>
    open: Boolean;
}

const Modal = ({children,open,onClose}: Props) => {
    if(!open) return null;
    return ReactDom.createPortal(
        <>
            <div className="relative overflow-hidden">
            <div onClick={() => onClose(value => !value)} className="fixed inset-0 bg-gray-500 opacity-50 z-100"/>
            <div className="fixed top-1/2 left-1/2 bg-white z-100 transform -translate-y-1/2 -translate-x-1/2">
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

export default Modal;