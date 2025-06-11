import React, { useState } from "react";
import PayPalSettings from "./PayPalSettings";
import RazorpaySettings from "./RazorpaySettings";
import PhonePeSettings from "./PhonePeSettings";

const PaymentSettings = () => {
  const [paypalEnabled, setPaypalEnabled] = useState(true);
  const [paypalSandbox, setPaypalSandbox] = useState(true);
  const [razorpayEnabled, setRazorpayEnabled] = useState(true);
  const [phonepeEnabled, setPhonepeEnabled] = useState(true);

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* PayPal & Razorpay side by side */}
      <div className="flex flex-col md:flex-row gap-6">
        <PayPalSettings
          paypalEnabled={paypalEnabled}
          setPaypalEnabled={setPaypalEnabled}
          paypalSandbox={paypalSandbox}
          setPaypalSandbox={setPaypalSandbox}
        />
        <RazorpaySettings
          razorpayEnabled={razorpayEnabled}
          setRazorpayEnabled={setRazorpayEnabled}
        />
      </div>

      {/* PhonePe */}
      <PhonePeSettings
        phonepeEnabled={phonepeEnabled}
        setPhonepeEnabled={setPhonepeEnabled}
      />
    </div>
  );
};

export default PaymentSettings;