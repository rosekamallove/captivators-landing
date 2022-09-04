import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const footerHeadingClass = "text-lg font-bold md:text-lg lg:text-3xl";
  const footerParagraphClass =
    "text-sm md:text-base lg:text-lg text-white hover:no-underline";
  const footerContentWrapper =
    "flex flex-col items-center gap-y-2 md:items-start m-2";

  const linkedinUrl =
    "https://www.linkedin.com/in/captivators-csit-club-380b2324a/";
  const facebookUrl = "https://www.facebook.com/profile.php?id=100085247440991";
  const instagramUrl =
    "https://instagram.com/captivators_csit?igshid=YmMyMTA2M2Y=";
  return (
    <div className="relative w-full bg-[#080424]">
      <div className="h-8 w-full bg-gradient-to-b from-[#17026d] to-[#080424]"></div>
      <div className="flex w-full flex-col items-center justify-evenly gap-y-3 p-4 text-white md:flex-row md:items-start">
        <img
          src="/images/logo-w.png"
          alt=""
          className="m-2 h-24 w-24 md:h-40 md:w-40"
        />
        <div className={footerContentWrapper}>
          <h2 className={footerHeadingClass}>CONTACT US</h2>
          <p className={footerParagraphClass}>club.csitmjpru@gmail.com</p>
          <p className={footerParagraphClass}>+91-8534833926</p>
          <p className={footerParagraphClass}>Harshit Kumar Singh (Student Incharge)</p>
          <p className={footerParagraphClass}>Department Of CSIT, <br></br>Mahatma Jyotiba Phule Rohilkhand University,<br></br> Bareilly, Uttar Pradesh Pincode:-243006</p>
          
        </div>
        <div className={footerContentWrapper}>
          <h2 className={footerHeadingClass}>LINKS</h2>
          <a
            className={footerParagraphClass}
            href="https://www.mjpru.ac.in/"
            target="_blank"
          >
            Official Website Of MJPRU
          </a>
        </div>
        <p className="text-xs opacity-80 md:text-sm">
          © 2022 Captivators, MJPRU, Bareilly - All Rights Reserved.
        </p>
      </div>
      <img src="/images/mountains.png" alt="" className="w-full pt-16" />
      <div className="flex w-full justify-center gap-x-8 p-4 duration-300">
        <a
          className="text-3xl text-white hover:text-indigo-500"
          href={linkedinUrl}
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          className="text-3xl text-white hover:text-blue-600"
          href={facebookUrl}
          target="_blank"
        >
          <FaFacebook />
        </a>
        <a
          className="text-3xl text-white hover:text-red-400"
          href={instagramUrl}
          target="_blank"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default Footer;
