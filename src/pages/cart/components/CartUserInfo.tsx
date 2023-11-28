import React from 'react';
import { container } from '../../../styles/commonStyles';
import { useNavigate } from 'react-router-dom';
import * as styles from './CartUserInfo.styles';
import { PATHS } from '../../../routes/paths';
import CartUserForm from './CartUserForm';

export interface UserForm {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  street: string;
  postalCode: string;
  city: string;
  notes: string;
  acceptedTerms: boolean;
}

function CartUserInfo() {
  const navigate = useNavigate();
  const initialValues = sessionStorage.getItem('userForm');

  const handlePreviousStep = () => {
    navigate(PATHS.CART);
  };

  const handleNextStep = (values: UserForm) => {
    sessionStorage.setItem('userForm', JSON.stringify(values));
    navigate(PATHS.CART_SUMMARY);
  };

  return (
    <div css={[container, styles.cartUserInfo]}>
      <CartUserForm
        onSubmit={handleNextStep}
        onPreviousStep={handlePreviousStep}
        initialValues={initialValues ? JSON.parse(initialValues) : undefined}
      />
    </div>
  );
}

export default CartUserInfo;
