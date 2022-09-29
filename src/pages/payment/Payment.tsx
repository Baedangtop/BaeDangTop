import React from "react";
import ProfileStyle from "../profile/profile.style";
import logo from "../../assets/images/logo.png";
import Footer from "../../components/home/footer/Footer";
import Payments from "../../components/payment/Payment";

const Payment = () => {
  return (
    <ProfileStyle>
      <img src={logo} className="logo" />
      <Payments />
      <Footer />
    </ProfileStyle>
  );
};

export default Payment;
