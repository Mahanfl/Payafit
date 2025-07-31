import React from "react";
import styled from "./ModalMessage.module.css";

const ModalMessage = ({ message, onClose}) => {
    if (!message) return;

    return(
        <div className={styled.modalOverlay} onClick={onClose}>
            <div className={styled.modalContent} onClick={(e)=> e.stopPropagation()}>
                <p className={styled.modalText}>{message}</p>
                <button className={styled.modalButton} onClick={onClose}>باشه</button>
            </div>
        </div>
    )        
}

export default ModalMessage;