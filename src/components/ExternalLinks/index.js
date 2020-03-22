import React from "react";

const Links = ({ url, children }) => (
  <li>
    {children}
    <br />
    <a href={url} target="_blank" rel=" noopener noreferrer">
      {url}
    </a>
  </li>
);

const ExternalLinks = () => (
  <div className="helpful-links">
    <h2>Helpful Links</h2>
    <ul>
      <Links url="https://www.instagram.com/mohbrunei/">
        Ministry of Health Brunei Instagram
      </Links>
      <Links url="http://www.moh.gov.bn/SitePages/pressreleaseCOVID-19.aspx">
        Ministry of Health Brunei Press Releases
      </Links>
      <Links url="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">
        WHO information about the virus
      </Links>
      <Links url="https://www.cdc.gov/coronavirus/2019-ncov/index.html">
        Centers for Disease Control and Prevention
      </Links>
    </ul>
  </div>
);

export default ExternalLinks;
