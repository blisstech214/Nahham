import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import ApiService from "../../services/ApiService";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const CombinedStripeCheckout = ({
  onNext,
  selectedTalentData,
  setPaymentInfo,
}) => {
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const response = await ApiService.request({
          method: "POST",
          url: "company/stripePayment",
          data: { amount: selectedTalentData.total_amount },
        });
        setClientSecret(response.data.paymentIntent); // Set the client_secret
      } catch (err) {
        setError("Failed to initialize payment");
      } finally {
        setLoading(false);
      }
    };

    createPaymentIntent();
  }, [selectedTalentData.total_amount]);

  if (!clientSecret) {
    return <div>Loading Stripe...</div>;
  }

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm
        onNext={onNext}
        selectedTalentData={selectedTalentData}
        setPaymentInfo={setPaymentInfo}
      />
    </Elements>
  );
};

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

    if (!stripe || !elements) return;

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
      setPaymentInfo(paymentIntent);
      onNext();
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

export default CombinedStripeCheckout;

// import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import { useState } from 'react';
// import ApiService from '../../services/ApiService';

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

// const CheckoutForm = ({ onNext, selectedTalentData, setPaymentInfo }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [succeeded, setSucceeded] = useState(false);
//   const totalAmount = selectedTalentData.total_amount;

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     setError(null);

//     if (!stripe || !elements) {
//       setLoading(false);
//       return;
//     }

//     try {
//       // 1. Create payment intent on your server
//       const response = await ApiService.request({
//         method: "POST",
//         url: "company/stripePayment",
//         data: { amount: totalAmount },
//       });

//       // Extract the client secret from the response
//       const clientSecret = response.data.paymentIntent;

//       if (!clientSecret || typeof clientSecret !== 'string') {
//         throw new Error("Invalid payment intent response from server");
//       }

//       // 2. Confirm the payment with Stripe
//       const { error: stripeError, paymentIntent: confirmedIntent } = await stripe.confirmCardPayment(
//         clientSecret,
//         {
//           payment_method: {
//             card: elements.getElement(CardElement),
//             billing_details: {
//               name: 'Customer Name',
//             },
//           },
//         }
//       );

//       if (stripeError) {
//         throw stripeError;
//       }

//       if (confirmedIntent.status === 'succeeded') {
//         setSucceeded(true);
//         setPaymentInfo(confirmedIntent);
//         onNext();

//       }
//       console.log("Payment succeeded:", confirmedIntent);
//     } catch (err) {
//       setError(err.message || 'Payment failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
//       <h2>Complete Payment</h2>
//       <form onSubmit={handleSubmit}>
//         <div style={{ margin: '20px 0' }}>
//           <CardElement
//             options={{
//               style: {
//                 base: {
//                   fontSize: '18px',
//                   color: '#424770',
//                   '::placeholder': {
//                     color: '#aab7c4',
//                   },
//                 },
//                 invalid: {
//                   color: '#9e2146',
//                 },
//               },
//             }}
//           />
//         </div>
//         <button
//           type="submit"
//           disabled={!stripe || loading}
//           style={{
//             background: '#556cd6',
//             color: 'white',
//             border: 'none',
//             padding: '12px 24px',
//             borderRadius: '4px',
//             cursor: 'pointer',
//             fontSize: '16px',
//           }}
//         >
//           {loading ? 'Processing...' : `Pay ${totalAmount} AED`}
//         </button>
//         {error && <div style={{ color: 'red', marginTop: '12px' }}>{error}</div>}
//         {succeeded && (
//           <div style={{ color: 'green', marginTop: '12px' }}>
//             Payment succeeded! Thank you for your purchase.
//           </div>
//         )}
//       </form>
//     </div>
//   );
// };

// const StripePaymentPage = ({ onNext, selectedTalentData, setPaymentInfo }) => {
//   return (
//     <Elements stripe={stripePromise}>
//       <CheckoutForm
//         setPaymentInfo={setPaymentInfo}
//         onNext={onNext}
//         selectedTalentData={selectedTalentData} />
//     </Elements>
//   );
// };

// export default StripePaymentPage;


// OLD data



// import {
//   Elements,
//   PaymentElement,
//   useStripe,
//   useElements,
// } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import { useEffect, useState } from 'react';
// import ApiService from '../../services/ApiService';

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

// const CheckoutForm = ({ onNext, selectedTalentData, setPaymentInfo }) => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const [clientSecret, setClientSecret] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [succeeded, setSucceeded] = useState(false);
//   const totalAmount = selectedTalentData.total_amount;

//   useEffect(() => {
//     // Create PaymentIntent when component mounts
//     const createPaymentIntent = async () => {
//       try {
//         const response = await ApiService.request({
//           method: 'POST',
//           url: 'company/stripePayment',
//           data: { amount: totalAmount },
//         });

//         setClientSecret(response.data.paymentIntent); // client_secret
//       } catch (err) {
//         setError('Failed to initialize payment');
//       } finally {
//         setLoading(false);
//       }
//     };

//     createPaymentIntent();
//   }, [totalAmount]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     if (!stripe || !elements) return;

//     const { error: stripeError, paymentIntent } = await stripe.confirmPayment({
//       elements,
//       confirmParams: {
//         return_url: window.location.href, // Optional redirect
//       },
//       redirect: 'if_required', // avoid full-page redirect
//     });

//     if (stripeError) {
//       setError(stripeError.message);
//     } else if (paymentIntent && paymentIntent.status === 'succeeded') {
//       setSucceeded(true);
//       setPaymentInfo(paymentIntent);
//       onNext();
//     }

//     setLoading(false);
//   };

//   return (
//     <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
//       <h2>Complete Payment</h2>
//       {loading ? (
//         <p>Loading payment options...</p>
//       ) : (
//         clientSecret && (
//           <form onSubmit={handleSubmit}>
//             <PaymentElement
//               options={{
//                 layout: 'tabs', // or "accordion", "auto"
//               }}
//             />
//             <button
//               type="submit"
//               disabled={!stripe || loading}
//               style={{
//                 marginTop: '20px',
//                 background: '#556cd6',
//                 color: 'white',
//                 padding: '12px 24px',
//                 borderRadius: '4px',
//                 fontSize: '16px',
//                 border: 'none',
//                 cursor: 'pointer',
//               }}
//             >
//               {loading ? 'Processing...' : `Pay ${totalAmount} AED`}
//             </button>
//             {error && <div style={{ color: 'red', marginTop: '12px' }}>{error}</div>}
//             {succeeded && (
//               <div style={{ color: 'green', marginTop: '12px' }}>
//                 Payment succeeded!
//               </div>
//             )}
//           </form>
//         )
//       )}
//     </div>
//   );
// };

// const StripePaymentPage = ({ onNext, selectedTalentData, setPaymentInfo }) => {
//   return (
//     <Elements stripe={stripePromise} options={{ clientSecret: '' }}>
//       <CheckoutForm
//         setPaymentInfo={setPaymentInfo}
//         onNext={onNext}
//         selectedTalentData={selectedTalentData}
//       />
//     </Elements>
//   );
// };

// export default StripePaymentPage;





// import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import { useState } from 'react';
// import ApiService from '../../services/ApiService';

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

// const CheckoutForm = ({ onNext, selectedTalentData, setPaymentInfo }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [succeeded, setSucceeded] = useState(false);
//   const totalAmount = selectedTalentData.total_amount;

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     setError(null);

//     if (!stripe || !elements) {
//       setLoading(false);
//       return;
//     }

//     try {
//       // 1. Create payment intent on your server
//       const response = await ApiService.request({
//         method: "POST",
//         url: "company/stripePayment",
//         data: { amount: totalAmount },
//       });

//       // Extract the client secret from the response
//       const clientSecret = response.data.paymentIntent; 

//       if (!clientSecret || typeof clientSecret !== 'string') {
//         throw new Error("Invalid payment intent response from server");
//       }

//       // 2. Confirm the payment with Stripe
//       const { error: stripeError, paymentIntent: confirmedIntent } = await stripe.confirmCardPayment(
//         clientSecret,
//         {
//           payment_method: {
//             card: elements.getElement(CardElement),
//             billing_details: {
//               name: 'Customer Name',
//             },
//           },
//         }
//       );

//       if (stripeError) {
//         throw stripeError;
//       }

//       if (confirmedIntent.status === 'succeeded') {
//         setSucceeded(true);
//         setPaymentInfo(confirmedIntent);
//         onNext();

//       }
//       console.log("Payment succeeded:", confirmedIntent);
//     } catch (err) {
//       setError(err.message || 'Payment failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
//       <h2>Complete Payment</h2>
//       <form onSubmit={handleSubmit}>
//         <div style={{ margin: '20px 0' }}>
//           <CardElement
//             options={{
//               style: {
//                 base: {
//                   fontSize: '18px',
//                   color: '#424770',
//                   '::placeholder': {
//                     color: '#aab7c4',
//                   },
//                 },
//                 invalid: {
//                   color: '#9e2146',
//                 },
//               },
//             }}
//           />
//         </div>
//         <button
//           type="submit"
//           disabled={!stripe || loading}
//           style={{
//             background: '#556cd6',
//             color: 'white',
//             border: 'none',
//             padding: '12px 24px',
//             borderRadius: '4px',
//             cursor: 'pointer',
//             fontSize: '16px',
//           }}
//         >
//           {loading ? 'Processing...' : `Pay ${totalAmount} AED`}
//         </button>
//         {error && <div style={{ color: 'red', marginTop: '12px' }}>{error}</div>}
//         {succeeded && (
//           <div style={{ color: 'green', marginTop: '12px' }}>
//             Payment succeeded! Thank you for your purchase.
//           </div>
//         )}
//       </form>
//     </div>
//   );
// };

// const StripePaymentPage = ({ onNext, selectedTalentData, setPaymentInfo }) => {
//   return (
//     <Elements stripe={stripePromise}>
//       <CheckoutForm
//         setPaymentInfo={setPaymentInfo}
//         onNext={onNext}
//         selectedTalentData={selectedTalentData} />
//     </Elements>
//   );
// };
