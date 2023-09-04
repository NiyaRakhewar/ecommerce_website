import { toast } from "react-toastify";

const loadScript = async (url) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;

    script.onload = () => {
      resolve(true);
    };

    script.onerror = () => {
      resolve(false);
    };

    document.body.appendChild(script);
  });
};

export const handleCheckout = async (
  selectedAddress,
  totalCheckoutPrice,
  cartData
) => {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
  if (!res) {
    toast.error("Razorpay SDK failed to load, please check your connection.");
    return;
  }

  return new Promise((resolve, reject) => {
    const razorpayOptions = {
      key: "rzp_test_m1zroRAC6TOiqs",
      key_secret: "c7KZnw9TnBaGa0HZYuG44lH1",
      amount: totalCheckoutPrice * 100,
      currency: "INR",
      name: "TheFace",
      description: "Best SkinCare Products Selling App!",
      handler: function (response) {
        toast.success("Payment successful!", response);

        const orderData = {
          selectedAddress,
          totalCheckoutPrice,
          products: cartData,
          paymentId: response.razorpay_payment_id,
        };

        resolve({ ...orderData });
      },
      prefill: {
        name: selectedAddress.name,
        contact: selectedAddress.phone,
        address: selectedAddress.addressText,
      },
      notes: {
        address: selectedAddress.addressText,
      },
      theme: {
        color: "#438967",
        background: "#FFFFFF",
        display_name: "ORGANICO",
      },
      modal: {
        escape: false,
        backdrop_close: true,
        handle_back: true,
      },
    };

    var pay = new window.Razorpay(razorpayOptions);
    pay.open();
  });
};
