import React from "react";

interface ButtonProps {
    text: string;
    type?: string;
    handleClick?: () => void;
    children: React.ReactNode
}

// interface ButtonPropsNew extends ButtonProps {
    
// }

export default function Button({ text, children }: ButtonProps) {
    console.log(children);

    return (<button>{children}</button>)
}
