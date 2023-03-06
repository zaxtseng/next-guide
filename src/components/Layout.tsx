import { ReactNode } from "react";
import Header from "./Header";
import Navigation from "./Navigation";

interface Props {
    children: ReactNode;
}

export const Layout = ({ children }: Props) => {
    return (
        <>
        <Header />
        <Navigation />
        {children}
        </>
    )
}
