/**
 * Este componente debe usar:
 * - Color primario (azul #3B82F6)
 * - Fuente sans (Poppins)
 * - Bordes redondeados consistentes
 * - animaciones sutiles de hover
 */

import React from 'react';
import { COLORS } from '../../constants/theme';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'accent' | 'outline';
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
    onClick?: () => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'medium',
    fullWidth = false,
    onClick,
    disabled = false,
    type = 'button',
    className = '',
}) => {
    // Configura las clases de estilo basadas en las props
    const baseClasses = "font-sans rounded-lg transition-all duration-200 font-medium";

    const variantClasses = {
        primary: "bg-primary text-white hover:bg-primary/90 active:bg-primary/95",
        secondary: "bg-secondary text-white hover:bg-secondary/90 active:bg-secondary/95",
        accent: "bg-accent text-white hover:bg-accent/90 active:bg-accent/95",
        outline: "bg-transparent border border-primary text-primary hover:bg-primary/10"
    };

    const sizeClasses = {
        small: "px-3 py-1 text-sm",
        medium: "px-4 py-2",
        large: "px-6 py-3 text-lg"
    };

    const classes = [
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        fullWidth ? "w-full" : "",
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
        className
    ].join(' ');

    return (
        <button
            type={type}
            className={classes}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;