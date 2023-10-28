import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import Modal from '../ReuseableComponents/Modal';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const modalContent = {
    title: 'Please Wait',
    message: 'Fetching Data From Server.',
    modalStatus: false,
  };
  console.log(user);
  if (user === '') {
    return <Modal modalContent={modalContent} />;
  } else if (user?.email) {
    return children;
  } else {
    Swal.fire({
      position: 'center',
      icon: 'info',
      title: 'You Have to Login To Access This Page',
      showConfirmButton: false,
      timer: 2500,
    });
    return (
      <Navigate
        state={location.pathname}
        to='/login'
      />
    );
  }
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
