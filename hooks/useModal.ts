"use client";
import { useState } from "react";


export function useModal() {
    const [isOpen, setIsOpen] = useState(false);

    function openModal(){
        setIsOpen(true);
    }
    
    function closeModal(){
        setIsOpen(false);
    }

    return({
        isModalOpen:isOpen,
        openModal:openModal,
        closeModal:closeModal
    });
}