import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
// const projectDemo=[{
//   title:'Project 1',
//   description:'this is a really really long description about this project'
// },{
//   title:'Project 2',
//   description:'this is a really really long description about this project'
// },{
//   title:'Project 3',
//   description:'this is a really really long description about this project'
// }]
const Projects = () => (
  <Section nopadding id="projects">
    <SectionTitle main>
Projects:
    </SectionTitle>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, source, visit})=>(
     <BlogCard key={id}>
       <Img src={image} />
       <TitleContent>
         <HeaderThree title={title} >
<Hr/>
         </HeaderThree>
       </TitleContent>
       <CardInfo>{description}</CardInfo>
<div>
  <TitleContent>Stack</TitleContent>
  <TagList>
    {tags.map((tag, i)=>(
      <Tag key={i }>{tag}</Tag>
    ))}
  </TagList>
</div>
<UtilityList>
  <ExternalLinks href={visit}>  <ExternalLinks href={visit}> Code </ExternalLinks> </ExternalLinks>
  <ExternalLinks href={visit}>  <ExternalLinks href={visit}> Source </ExternalLinks> </ExternalLinks>
</UtilityList>
     </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;