"use client";

import React from "react";

import {
    Dialog,
    DialogHeader,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

interface ModalProps {
    title: string;
    description?: string;
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
    triggerText?: string;
}

export const Modal: React.FC<ModalProps> = ({
    title,
    description,
    isOpen,
    onClose,
    children,
    triggerText,
}) => {
    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onChange}>
            {triggerText && (
                <DialogTrigger className="px-4 py-2 rounded bg-primary text-white hover:bg-primary-dark">
                    {triggerText}
                </DialogTrigger>
            )}
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    {description && (
                        <DialogDescription>{description}</DialogDescription>
                    )}
                </DialogHeader>
                <div className="mt-4">{children}</div>
            </DialogContent>
        </Dialog>
    );
};

export default Modal;
