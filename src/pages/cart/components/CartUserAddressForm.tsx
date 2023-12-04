import React, { useEffect } from 'react';
import { Form, Formik, useFormikContext } from 'formik';
import * as Yup from 'yup';
import Input from '../../../components/Input/Input';
import Checkbox from '../../../components/Checkbox/Checkbox';
import * as styles from './CartUserAddressForm.styles';
import Text from '../../../components/Text/Text';
import Button from '../../../components/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useMediaQueries } from '../../../hooks/useMediaQueries';
import { PATHS } from '../../../routes/paths';
import { container } from '../../../styles/commonStyles';

function ScrollToTopError() {
  const { errors, isSubmitting } = useFormikContext<UserForm>();
  const { isMobile } = useMediaQueries();

  useEffect(() => {
    if (isSubmitting) {
      if (isMobile && (errors.firstName || errors.lastName || errors.email || errors.phoneNumber)) {
        // @ts-ignore
        // https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/1195
        window.scrollTo({ top: 0, behavior: 'instant' });
      }

      if (!isMobile && (errors.firstName || errors.lastName || errors.acceptedTerms)) {
        // @ts-ignore
        // https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/1195
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    }
  }, [errors, isSubmitting]);

  return null;
}

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

function CartUserAddressForm() {
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
    <div css={[container, styles.cartUserAddressForm]}>
      <Formik
        initialValues={
          initialValues
            ? JSON.parse(initialValues)
            : {
                email: '',
                firstName: '',
                lastName: '',
                phoneNumber: '',
                street: '',
                postalCode: '',
                city: '',
                notes: '',
                acceptedTerms: false,
              }
        }
        validationSchema={Yup.object({
          email: Yup.string().email('E-mail nie poprawny').required('Pole wymagane'),
          firstName: Yup.string().required('Pole wymagane'),
          lastName: Yup.string().required('Pole wymagane'),
          phoneNumber: Yup.string()
            .required('Pole wymagane')
            .matches(/^\d{9}$/, 'Numer telefonu musi mieć 9 cyfr'),
          street: Yup.string().required('Pole wymagane'),
          postalCode: Yup.string().required('Pole wymagane'),
          city: Yup.string().required('Pole wymagane'),
          notes: Yup.string(),
          acceptedTerms: Yup.boolean().required('Pole wymagane').oneOf([true], 'Pole wymagane'),
        })}
        onSubmit={(values) => {
          handleNextStep(values);
        }}
      >
        <Form>
          <div css={styles.formWrapper}>
            <div css={styles.userDataWrapper}>
              <Text variant="dHeadline3" marginBottom={16}>
                Twoje dane
              </Text>
              <div css={styles.inputWrapper}>
                <Input
                  id="email"
                  label="E-mail"
                  name="email"
                  type="text"
                  placeholder="kowalski@gmail.com"
                />
              </div>
              <div css={styles.inputWrapper}>
                <Input id="firstName" label="Imię" name="firstName" type="text" placeholder="Jan" />
              </div>
              <div css={styles.inputWrapper}>
                <Input
                  id="lastName"
                  label="Nazwisko"
                  name="lastName"
                  type="text"
                  placeholder="Kowalski"
                />
              </div>
              <div css={styles.inputWrapper}>
                <Input
                  id="phoneNumber"
                  label="Telefon"
                  name="phoneNumber"
                  type="number"
                  placeholder="111222333"
                />
              </div>

              <Text variant="dHeadline3" marginBottom={16}>
                Dane adresowe
              </Text>
              <div css={styles.inputWrapper}>
                <Input
                  id="street"
                  label="Ulica i nr domu"
                  name="street"
                  type="text"
                  placeholder="Stanisława Więckowskiego 4b/12"
                />
              </div>
              <div css={styles.inputWrapper}>
                <Input
                  id="postalCode"
                  label="Kod pocztowy"
                  name="postalCode"
                  type="text"
                  placeholder="50-555"
                />
              </div>
              <div css={styles.inputWrapper}>
                <Input id="city" label="Miasto" name="city" type="text" placeholder="Wrocław" />
              </div>
            </div>

            <div css={styles.userDataWrapper}>
              <Text variant="dHeadline3" marginBottom={16}>
                Dodatkowe informacje
              </Text>
              <div css={styles.inputWrapper}>
                <Input id="notes" label="Uwagi" name="notes" type="text" isTextArea />
              </div>
              <div css={styles.checkboxWrapper}>
                <Checkbox name="acceptedTerms">
                  <Text variant="body14">
                    Zapoznałem się z <Link to={'/'}>regulaminem</Link> sklepu internetowego i
                    akceptuję jego treści
                  </Text>
                </Checkbox>
              </div>
            </div>
          </div>

          <div css={styles.cartButtons}>
            <div css={styles.buttonWrapper}>
              <Button secondary={true} title={'Wstecz'} onClick={handlePreviousStep} />
            </div>
            <div css={styles.buttonWrapper}>
              <Button title={'Podsumowanie'} type="submit" />
            </div>
          </div>

          <ScrollToTopError />
        </Form>
      </Formik>
    </div>
  );
}

export default CartUserAddressForm;
