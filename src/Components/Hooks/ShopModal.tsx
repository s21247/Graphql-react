import React from 'react';
import ReactDom from "react-dom";
import {Modal} from "../Models/Modal.interface";

const ShopModal = ({children,open,onClose}: Modal) => {
    if(!open) return null;
    return ReactDom.createPortal(
        <>
            <div className={`relative float-right z-50`}>
                <div onClick={() => onClose(value => !value)} className={`fixed inset-0 bg-gray-500 opacity-50 z-100`}/>
                <div className={`fixed h-full top-0 right-0 bg-white bg-panelBackground w-11/12 md:w-1/5 ease-in-out duration-300 ${open ? "translate-x-0 " : "translate-x-full"}`}>
                    {/*here*/}
                    <div className="border-b-2 border-gray-300 mx-3 md:mx-8 h-24 ">
                    <button className="float-right font-bold px-6 pt-8" onClick={() => onClose(value => !value)}>
                        <p className="text-white font-light text-lg md:text-xl">Close</p>
                    </button>
                    </div>
                    {children}
                </div>
            </div>
        </>,
        document.getElementById('portal')!
    );
};

export default ShopModal;