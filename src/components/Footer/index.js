import React from "react";

const Footer = ({ date }) => (
  <footer>
    <p>
      Source: Press Release from{" "}
      <a href="http://moh.gov.bn/" target="_blank">
        Ministry of Health, Brunei
      </a>
    </p>
    <p>
      This website is <strong>NOT</strong> affiliated with the Ministry of
      Health, Brunei.
    </p>
    <br />
    <p>
      This project is released under the{" "}
      <a
        href="https://github.com/dsychin/covid19brunei/blob/master/LICENSE"
        target="_blank"
      >
        Open Source MIT License
      </a>
      . View this project{" "}
      <a href="https://github.com/dsychin/covid19brunei" target="_blank">
        on GitHub.
      </a>
    </p>
    <p>
      Special thanks to the developer of{" "}
      <a href="https://manamakan.com/" target="_blank">
        Mana Makan
      </a>{" "}
      for compiling the case descriptions.
    </p>
    <p>
      Icons made by{" "}
      <a
        href="https://www.flaticon.com/authors/freepik"
        title="Freepik"
        target="_blank"
        rel="nofollow"
      >
        Freepik
      </a>{" "}
      from{" "}
      <a
        href="https://www.flaticon.com/"
        title="Flaticon"
        target="_blank"
        rel="nofollow"
      >
        www.flaticon.com
      </a>
    </p>
    <br />
    <p>
      Last version built on{" "}
      {new Date(date).toLocaleString("en-SG", {
        timeZone: "Asia/Singapore",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric"
      })}
    </p>
  </footer>
);

export default Footer;
