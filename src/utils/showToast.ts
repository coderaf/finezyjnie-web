import { toast, TypeOptions } from 'react-toastify';

export const showToast = (type: TypeOptions | undefined, message: string) => {
  toast(message, {
    type,
    theme: 'colored',
    position: 'top-right',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
  });
};
