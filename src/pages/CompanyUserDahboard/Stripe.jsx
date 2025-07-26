import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';
import ApiService from '../../services/ApiService';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }
    const formData = new FormData();
    formData.append("amount", 10);

    try {
      const response = await ApiService.request({
        method: "POST",
        url: `company/stripePayment`,
        data: formData,
      });
      const data = response.data;


      const { clientSecret } = data;

      // 2. Confirm the payment
      const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: 'Customer Name', // You can collect this from a form
          },
        },
      });

      if (stripeError) {
        setError(stripeError.message);
        setLoading(false);
      } else if (paymentIntent.status === 'succeeded') {
        setSucceeded(true);
        setLoading(false);
      }
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h2>Complete Payment</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ margin: '20px 0' }}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
        </div>
        <button
          type="submit"
          disabled={!stripe || loading}
          style={{
            background: '#556cd6',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          {loading ? 'Processing...' : 'Pay ₹10.00'}
        </button>
        {error && <div style={{ color: 'red', marginTop: '12px' }}>{error}</div>}
        {succeeded && (
          <div style={{ color: 'green', marginTop: '12px' }}>
            Payment succeeded! Thank you for your purchase.
          </div>
        )}
      </form>
    </div>
  );
};

const StripePaymentPage = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default StripePaymentPage;