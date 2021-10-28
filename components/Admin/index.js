import { useEffect } from "react";
import Router from "next/router";
import { useSelector } from "react-redux";

const Admin = ({ children }) => {
    const auth = useSelector((state) => state.auth);

    return <>{children}</>;
};

export default Admin;
