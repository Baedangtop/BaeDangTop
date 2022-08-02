import React from "react";
import Footer from "../../components/home/footer/Footer";
import ProfileStyle from "./profile.style";
import logo from "../../assets/images/logo.png";
import Header from "../../components/profile/header/Header";
import ProfileDetail from "./ProfileDetail";

const Profile = () => {
  return (
    <ProfileStyle>
      <img src={logo} className="logo" />
      <Header />
      <ProfileDetail />
      <Footer />
    </ProfileStyle>
  );
};

export default Profile;
