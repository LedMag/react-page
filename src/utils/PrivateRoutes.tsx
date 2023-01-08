import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = ({children, isAllowed, path}: {children: JSX.Element, isAllowed: boolean, path: string}) => {
    return (
            isAllowed ? children : <Navigate to={path} />
        )
}

export default PrivateRoutes;