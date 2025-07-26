import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';
import ApiService from '../../services/ApiService';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const CheckoutForm = ({ onNext, selectedTalentData, setPaymentInfo }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const totalAmount = selectedTalentData.total_amount;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    try {
      // 1. Create payment intent on your server
      const response = await ApiService.request({
        method: "POST",
        url: "company/stripePayment",
        data: { amount: totalAmount },
      });

      // Extract the client secret from the response
      const clientSecret = response.data.paymentIntent; 

      if (!clientSecret || typeof clientSecret !== 'string') {
        throw new Error("Invalid payment intent response from server");
      }

      // 2. Confirm the payment with Stripe
      const { error: stripeError, paymentIntent: confirmedIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name: 'Customer Name',
            },
          },
        }
      );

      if (stripeError) {
        throw stripeError;
      }

      if (confirmedIntent.status === 'succeeded') {
        setSucceeded(true);
        setPaymentInfo(confirmedIntent);
        onNext();

      }
      console.log("Payment succeeded:", confirmedIntent);
    } catch (err) {
      setError(err.message || 'Payment failed');
    } finally {
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
                  fontSize: '18px',
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
          {loading ? 'Processing...' : `Pay ${totalAmount} AED`}
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

const StripePaymentPage = ({ onNext, selectedTalentData, setPaymentInfo }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm
        setPaymentInfo={setPaymentInfo}
        onNext={onNext}
        selectedTalentData={selectedTalentData} />
    </Elements>
  );
};

export default StripePaymentPage;