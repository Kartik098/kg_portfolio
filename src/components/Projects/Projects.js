import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import netflix from "../../Assets/Projects/netflix.png";
import product from "../../Assets/Projects/product.png";
import store from "../../Assets/Projects/store.png";


function Projects() {
  return (
    <Container fluid className="project-section"> 
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix clone"
              description="Built a full‐stack Netflix clone with React, Tailwind, and Next.js. Implemented streaming, auth (NextAuth), and favorites. Used Prisma with MongoDB and deployed on Vercel."
              ghLink="https://github.com/Kartik098/netflix-clone.git"
              demoLink="https://netflix-clone-fdwh-b8a1xjgkb-kartik-guptas-projects-65f5c781.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={product}
              isBlog={false}
              title="Product Inventory Manager"
              description="Developed a full‐stack inventory system using React (Vite) and Node.js with Apollo Server (GraphQL). Enabled product creation,updates, and listings with MongoDB. Designed custom queries/mutations for flexible data handling. Deployed both frontend and backend on Railway."
              ghLink="https://github.com/Kartik098/product-inventory-graphql"
              demoLink="https://react-frontend-production-8e05.up.railway.app/"
            />
          </Col>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={store}
              isBlog={false}
              title="Souled Store Clone"
              description="Developed a frontend-only eCommerce clone of The Souled Store using Vue.js and Bootstrap. The app replicates key UI features such as product listings, filters, image carousels, and responsive layouts. Integrated routing for navigation between product pages and implemented design consistency using Bootstrap utilities. Deployed on Vercel for fast and scalable hosting."
              ghLink="https://github.com/Kartik098/souled_store_clone"
              demoLink="https://souled-store-clone-eight.vercel.app/"
            />
          </Col>
        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
