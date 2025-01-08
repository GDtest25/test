import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_ralthyn';
const EMAILJS_TEMPLATE_ID = 'template_xslbsqg';
const EMAILJS_PUBLIC_KEY = 'RNRwO7BpZoFgNfzHy';

export const sendEmail = async (data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => {
  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        message: data.message,
      },
      EMAILJS_PUBLIC_KEY
    );
    return response;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};