import React from "react";
import Header from "./Header";

interface LayoutProps {
    children : React.ReactNode
}

export default function Layout({children}
:LayoutProps) {
    return (
        <div>
            <Header></Header>
            {children}
        </div>
    )
}