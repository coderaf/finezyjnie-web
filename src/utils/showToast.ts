import { toast, TypeOptions } from 'react-toastify';

export const showToast = (type: TypeOptions | undefined, message: string) => {
  toast(message, {
    type,
    position: 'top-right',
    autoClose: 2500,
    closeOnClick: true,
    pauseOnHover: false,
    hideProgressBar: true,
    draggable: false,
  });
};
