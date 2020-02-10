import React from "react";
import GridGallery from "react-grid-gallery";

import {
  Container,
  Images,
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
        <Images>
          <GridGallery images={work.images} enableImageSelection={false} />
        </Images>
        <ProjetcName href={work.link}>{work.name}</ProjetcName>
        <br />
        <Company href={work.company.link}>{work.company.name}</Company>
        <Description>{work.description}</Description>
      </div>

      {/* <Tags>
        {work.tags.map(tag => (
          <TagItem key={tag}>{tag}</TagItem>
        ))}
      </Tags> */}
    </Container>
  );
}
