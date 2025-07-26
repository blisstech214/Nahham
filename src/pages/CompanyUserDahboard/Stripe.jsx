// CheckoutForm.js
import React, { useEffect, useState } from "react";
import {
  Elements,
  PaymentRequestButtonElement,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_...");

const StripeForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentRequest, setPaymentRequest] = useState('yes');
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!stripe) return;

    const pr = stripe.paymentRequest({
      country: "IN",
      currency: "inr",
      total: {
        label: "Total",
        amount: 1000,
      },
      requestPayerName: true,
      requestPayerEmail: true,
    });

    pr.canMakePayment().then((result) => {
      if (result) {
        setPaymentRequest(pr);
      }
    });
  }, [stripe]);

  useEffect(() => {
    if (paymentRequest) {
      paymentRequest.on("paymentmethod", async (ev) => {
        const res = await fetch("http://localhost:4242/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: 1000 }),
        });

        const { clientSecret } = await res.json();

        const { error: confirmError } = await stripe.confirmCardPayment(
          clientSecret,
          {
            payment_method: ev.paymentMethod.id,
          }
        );

        if (confirmError) {
          ev.complete("fail");
          setMessage(confirmError.message);
        } else {
          ev.complete("success");
          setMessage("✅ Payment successful!");
        }
      });
    }
  }, [paymentRequest, stripe]);

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h3>Stripe Payment</h3>

      {paymentRequest ? (
        <PaymentRequestButtonElement options={{ paymentRequest }} />
      ) : (
        <>
          <CardElement />
          <button style={{ marginTop: "20px" }} disabled={!stripe}>
            Pay by Card
          </button>
        </>
      )}

      {message && <p>{message}</p>}
    </div>
  );
};

const CheckoutForm = () => {
  return (
    <Elements stripe={stripePromise}>
      <StripeForm />
    </Elements>
  );
};

export default CheckoutForm;

// import React, { useState } from "react";
// import {
//   CardElement,
//   useStripe,
//   useElements,
//   Elements,
// } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

// // ✅ Load stripePromise outside any component
// const stripePromise = loadStripe(
//   "pk_test_51LrcmFGPzB0sOwRzdcRcprUgiQzJrkEaFWw383VvTvT6Yqj6czO4gnP1DP9E7luumRVEJwjssK6uTOWVWGMlrSz5003iMd9vR1"
// );

// // ✅ Component that uses Stripe hooks (MUST be inside <Elements>)
// const StripeForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     if (!stripe || !elements) {
//       setLoading(false);
//       return;
//     }

//     const res = await fetch("http://localhost:4242/create-payment-intent", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ amount: 1000 }),
//     });

//     const { clientSecret } = await res.json();

//     const result = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: elements.getElement(CardElement),
//       },
//     });

//     if (result.error) {
//       setMessage(result.error.message);
//     } else if (result.paymentIntent.status === "succeeded") {
//       setMessage("✅ Payment successful!");
//     }

//     setLoading(false);
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
//       <h3>Stripe Payment</h3>
//       <CardElement />
//       <button
//         type="submit"
//         disabled={!stripe || loading}
//         style={{ marginTop: "20px" }}
//       >
//         {loading ? "Processing..." : "Pay Now"}
//       </button>
//       {message && <p>{message}</p>}
//     </form>
//   );
// };

// // ✅ Wrapper component that provides the Stripe context
// const CheckoutForm = () => {
//   return (
//     <Elements stripe={stripePromise}>
//       <StripeForm />
//     </Elements>
//   );
// };

// export default CheckoutForm;

// // CheckoutForm.js
// import React, { useState } from "react";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

// const StripeCheckoutForm = () => {
//   // ⚠️ Use your own Stripe publishable key here
//   const stripePromise = loadStripe(
//     "pk_test_51LrcmFGPzB0sOwRzdcRcprUgiQzJrkEaFWw383VvTvT6Yqj6czO4gnP1DP9E7luumRVEJwjssK6uTOWVWGMlrSz5003iMd9vR1"
//   );

//   const stripe = useStripe();
//   const elements = useElements();
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     if (!stripe || !elements) return;

//     // 1. Get client secret from your backend
//     const res = await fetch("http://localhost:4242/create-payment-intent", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ amount: 1000 }), // $10
//     });

//     const { clientSecret } = await res.json();

//     // 2. Confirm the payment
//     const result = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: elements.getElement(CardElement),
//       },
//     });

//     if (result.error) {
//       setMessage(result.error.message);
//     } else if (result.paymentIntent.status === "succeeded") {
//       setMessage("Payment Successful!");
//     }

//     setLoading(false);
//   };

//   return (
//     <Elements stripe={stripePromise}>
//       <form
//         onSubmit={handleSubmit}
//         style={{ maxWidth: "400px", margin: "auto" }}
//       >
//         <h3>Stripe Payment</h3>
//         <CardElement />
//         <button
//           type="submit"
//           disabled={!stripe || loading}
//           style={{ marginTop: "20px" }}
//         >
//           {loading ? "Processing..." : "Pay Now"}
//         </button>
//         {message && <p>{message}</p>}
//       </form>
//     </Elements>
//   );
// };

// export default StripeCheckoutForm;
