import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const linkedinUrl =
    "https://www.linkedin.com/in/captivators-csit-club-380b2324a/";
  const facebookUrl = "https://www.facebook.com/profile.php?id=100085247440991";
  const instagramUrl =
    "https://instagram.com/captivators_csit?igshid=YmMyMTA2M2Y=";
  return (
    <div className="relative w-full bg-[#080424]">
      <div className="h-8 w-full bg-gradient-to-b from-indigo-200 to-[#080424]"></div>
      <div className="flex w-full items-start justify-evenly p-4 text-white">
        <img src="/images/logo-w.png" alt="" className="h-40 w-40" />
        <div className="flex flex-col items-start gap-y-2">
          <h2 className="mb-2 text-4xl font-bold">CONTACT US</h2>
          <p className="text-xl">club.csitmjpru@gmail.com</p>
        </div>
        <div className="flex flex-col items-start gap-y-2">
          <h2 className="mb-2 text-4xl font-bold">LINKS</h2>
          <a
            className="text-xl text-white hover:no-underline"
            href="https://www.mjpru.ac.in/"
            target="_blank"
          >
            MJPRU University Website
          </a>
        </div>
        <p className="text-sm opacity-80">
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
