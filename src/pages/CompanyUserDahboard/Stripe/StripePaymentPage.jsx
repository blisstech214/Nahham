import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import ApiService from "../../services/ApiService";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const StripePaymentPage = ({ onNext, selectedTalentData, setPaymentInfo }) => {
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);

  const totalAmount = selectedTalentData.total_amount;

  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const response = await ApiService.request({
          method: "POST",
          url: "company/stripePayment",
          data: { amount: totalAmount },
        });

        setClientSecret(response.data.paymentIntent); // 👈 Set real clientSecret
      } catch (error) {
        console.error("Error creating PaymentIntent:", error);
      } finally {
        setLoading(false);
      }
    };

    createPaymentIntent();
  }, [totalAmount]);

  const appearance = { theme: "stripe" };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <>
      {loading ? (
        <p>Initializing Payment...</p>
      ) : clientSecret ? (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm
            setPaymentInfo={setPaymentInfo}
            onNext={onNext}
            selectedTalentData={selectedTalentData}
          />
        </Elements>
      ) : (
        <p>Failed to load payment details.</p>
      )}
    </>
  );
};

export default StripePaymentPage;
