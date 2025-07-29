import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = ({ onNext, selectedTalentData, setPaymentInfo }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [succeeded, setSucceeded] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    const { error: stripeError, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.href,
      },
      redirect: "if_required",
    });

    if (stripeError) {
      setError(stripeError.message);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      setSucceeded(true);
      setPaymentInfo(paymentIntent); // save full payment details
      onNext(); // continue flow
    }

    setLoading(false);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
      <h2>Complete Payment</h2>
      <form onSubmit={handleSubmit}>
        <PaymentElement options={{ layout: "tabs" }} />
        <button
          type="submit"
          disabled={!stripe || loading}
          style={{
            marginTop: "20px",
            background: "#556cd6",
            color: "white",
            padding: "12px 24px",
            borderRadius: "4px",
            fontSize: "16px",
            border: "none",
            cursor: "pointer",
          }}
        >
          {loading
            ? "Processing..."
            : `Pay ${selectedTalentData.total_amount} AED`}
        </button>
        {error && (
          <div style={{ color: "red", marginTop: "12px" }}>{error}</div>
        )}
        {succeeded && (
          <div style={{ color: "green", marginTop: "12px" }}>
            Payment succeeded!
          </div>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
