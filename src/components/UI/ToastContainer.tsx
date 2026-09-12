import { ToastContainer as ReactToastifyContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function ToastContainer() {
  return (
    <ReactToastifyContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick={true}
      rtl={false}
      pauseOnFocusLoss={true}
      draggable={true}
      pauseOnHover={true}
      theme="light"
      toastClassName="!bg-white !text-gray-900 !shadow-lg !rounded-lg !border !border-gray-200 !font-medium"
      progressClassName="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500"
    />
  );
}