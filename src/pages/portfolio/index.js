import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import Projects_1 from '../../assets/images/Projects_1.png'
import Projects_2 from '../../assets/images/Projects_2.png'
import Projects_3 from '../../assets/images/Projects_3.png'
import Projects_4 from '../../assets/images/Projects_4.png'
import Projects_5 from '../../assets/images/Projects_5.png'
import Projects_6 from '../../assets/images/Projects_6.png'
import Projects_7 from '../../assets/images/Projects_7.png'
import Projects_8 from '../../assets/images/Projects_8.png'
import Projects_9 from '../../assets/images/Projects_9.png'
import Projects_10 from '../../assets/images/Projects_10.png'
import Projects_11 from '../../assets/images/Projects_11.png'
import Projects_12 from '../../assets/images/Projects_12.png'



export const Portfolio = () => {
  const image = [
    Projects_1,
    Projects_2,
    Projects_3,
    Projects_4,
    Projects_5,
    Projects_6,
    Projects_7,
    Projects_8,
    Projects_9,
    Projects_10,
    Projects_11,
    Projects_12
  ];
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={image[i]} alt="" />
                <div className="content">
                  <p>{data.description}</p>
                  <a href={data.link}>view project</a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
