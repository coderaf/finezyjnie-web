import React, { useEffect } from 'react';
import { Form, Formik, useFormikContext } from 'formik';
import * as Yup from 'yup';
import Input from '../../../components/Input/Input';
import Checkbox from '../../../components/Checkbox/Checkbox';
import * as styles from './CartUserForm.styles';
import Text from '../../../components/Text/Text';
import Button from '../../../components/Button/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserForm } from './CartUserInfo';
import { PATHS } from '../../../routes/paths';
import { useMediaQueries } from '../../../hooks/useMediaQueries';

interface Props {
  onSubmit: (values: UserForm) => void;
  onPreviousStep: () => void;
  initialValues?: UserForm;
}

function ScrollToTop() {
  const { errors, isSubmitting } = useFormikContext<UserForm>();
  const { isMobile } = useMediaQueries();

  useEffect(() => {
    if (isSubmitting) {
      if (isMobile && (errors.firstName || errors.lastName || errors.email || errors.phoneNumber)) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      if (!isMobile && (errors.firstName || errors.lastName || errors.acceptedTerms)) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [errors, isSubmitting]);

  return null;
}

function CartUserForm({ onSubmit, onPreviousStep, initialValues }: Props) {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate(PATHS.CART);
    }
  }, []);

  return (
    <Formik
      initialValues={
        initialValues || {
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
        onSubmit(values);
      }}
    >
      <Form>
        <div css={styles.formWrapper}>
          <div css={styles.userDataWrapper}>
            <Text variant="dHeadline3" marginBottom={16}>
              Twoje dane
            </Text>
            <div css={styles.inputWrapper}>
              <Input label="E-mail" name="email" type="text" placeholder="kowalski@gmail.com" />
            </div>
            <div css={styles.inputWrapper}>
              <Input label="Imię" name="firstName" type="text" placeholder="Jan" />
            </div>
            <div css={styles.inputWrapper}>
              <Input label="Nazwisko" name="lastName" type="text" placeholder="Kowalski" />
            </div>
            <div css={styles.inputWrapper}>
              <Input label="Telefon" name="phoneNumber" type="number" placeholder="111222333" />
            </div>

            <Text variant="dHeadline3" marginBottom={16}>
              Dane adresowe
            </Text>
            <div css={styles.inputWrapper}>
              <Input
                label="Ulica i nr domu"
                name="street"
                type="text"
                placeholder="Stanisława Więckowskiego 4b/12"
              />
            </div>
            <div css={styles.inputWrapper}>
              <Input label="Kod pocztowy" name="postalCode" type="text" placeholder="50-555" />
            </div>
            <div css={styles.inputWrapper}>
              <Input label="Miasto" name="city" type="text" placeholder="Wrocław" />
            </div>
          </div>

          <div css={styles.userDataWrapper}>
            <Text variant="dHeadline3" marginBottom={16}>
              Dodatkowe informacje
            </Text>
            <div css={styles.inputWrapper}>
              <Input label="Uwagi" name="notes" type="text" isTextArea />
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
            <Button secondary={true} title={'Wstecz'} onClick={onPreviousStep} />
          </div>
          <div css={styles.buttonWrapper}>
            <Button title={'Podsumowanie'} type="submit" />
          </div>
        </div>

        <ScrollToTop />
      </Form>
    </Formik>
  );
}

export default CartUserForm;
