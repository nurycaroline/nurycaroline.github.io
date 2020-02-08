import React from "react";
import Link from "next/link";
import ReactGA from "react-ga";

import { Container } from "./styles";

export default function Links({ className }) {
  return (
    <Container className={className}>
      {/* <Link href="/blog">
        <a href="">blog</a>
      </Link> */}
      <ReactGA.OutboundLink
        eventLabel="Link Github"
        to="https://github.com/nurycaroline"
        target="_blank"
      >
        <img src="/static/github.png" alt="Logo Github" title="Github" />
      </ReactGA.OutboundLink>

      <ReactGA.OutboundLink
        eventLabel="Link LinkedIn"
        to="https://www.linkedin.com/in/nuriellybrizola/"
        target="_blank"
      >
        <img src="/static/linkedin.png" alt="Logo LinkedIn" title="LinkedIn" />
      </ReactGA.OutboundLink>
      <ReactGA.OutboundLink
        eventLabel="Link Codepen"
        to="https://codepen.io/nurycaroline/"
        target="_blank"
      >
        <img src="/static/codepen.png" alt="Logo Codepen" title="Codepen" />
      </ReactGA.OutboundLink>
      <ReactGA.OutboundLink
        eventLabel="Link E-mail"
        to="mailto:nurycaroline@gmail.com"
      >
        <img src="/static/email.png" alt="Logo Email" title="Email" />
      </ReactGA.OutboundLink>
      <ReactGA.OutboundLink
        eventLabel="Link Behance"
        to="https://www.behance.net/nurycaroline"
        target="_blank"
      >
        <img src="/static/behance.png" alt="Logo Behance" title="Behance" />
      </ReactGA.OutboundLink>
    </Container>
  );
}
