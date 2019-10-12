import React from "react";

import {
  Container,
  Image,
  ProjetcName,
  Company,
  Description,
  Tags,
  TagItem
} from "./styles";

export default function Card({ work }) {
  return (
    <Container>
      <div>
        <Image src={work.images[0]} />
        <ProjetcName href={work.link} target="_blank">
          {work.name}
        </ProjetcName>
        <br />
        <Company href={work.company.link} target="_blank">
          {work.company.name}
        </Company>
        <Description>{work.description}</Description>
      </div>

      <Tags>
        {work.tags.map(tag => (
          <TagItem key={tag}>{tag}</TagItem>
        ))}
      </Tags>
    </Container>
  );
}
