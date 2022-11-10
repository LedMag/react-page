import { Outlet, Navigate } from "react-router-dom";


const PrivateRoutes = ({isAllowed, path}: {isAllowed: boolean, path: string}) => {
    return (
            isAllowed ? <Outlet/> : <Navigate to={path} />
        )
}

export default PrivateRoutes;