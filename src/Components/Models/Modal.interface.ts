import React from "react";

export interface Modal {
    children: React.ReactNode
    onClose:  React.Dispatch<React.SetStateAction<Boolean>>
    open: Boolean;
}