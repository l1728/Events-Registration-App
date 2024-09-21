import { Toaster } from 'react-hot-toast';

export default function ToastNotification() {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={6}
      toastOptions={{
        duration: 3000,
        style: {
          border: '2px solid #e71c30',
        },
      }}
    />
  );
}
