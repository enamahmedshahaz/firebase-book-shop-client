import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import PropTypes from 'prop-types';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>;
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ message: 'Please login first!' }}></Navigate>;

};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
    children: PropTypes.node,

}