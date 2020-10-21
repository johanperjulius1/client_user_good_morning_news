import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Articles from "../modules/articles";
import { Container, Button, Segment, Image } from "semantic-ui-react";
import { useSelector } from "react-redux";

const SpecificArticle = () => {
  const [article, setArticle] = useState({});
  const [message, setMessage] = useState();
  const { id } = useParams();
  const role = useSelector((state) => state.currentUser.role);

  useEffect(() => {
    const getSingleArticle = async () => {
      const response = await Articles.show(id, role);
      if (response.id) {
        setArticle(response);
      } else {
        setMessage(response);
      }
    };
    getSingleArticle();
  }, [id]);

  return (
    <>
      {message ? (
        <p data-cy="error-message">{message}</p>
      ) : (
        <Container id="container1" textAlign="center">
          <div data-cy="article">
            <h1 data-cy="title">{article.title}</h1>
            <h3 data-cy="teaser">{article.teaser}</h3>
            {article.image && (
            <Image size="medium" centered data-cy="image" src={article.image} />
            )}
            <p data-cy="content">{article.content}</p>
          </div>

          {article.premium && role !== "subscriber" && (
            <Segment inverted id="menu" textAlign="center">
              <h4 data-cy="premium-alert">
                This is part of our premium content, to get full access become
                premium user
              </h4>
              <Button
                color="black"
                data-cy="premium-button"
                as={Link}
                to={role === "registered" ? "/become-subscriber" : "/login"}
              >
                {role === "registered"
                  ? "Become premium!"
                  : "Register & Become premium!"}
              </Button>
            </Segment>
          )}
        </Container>
      )}
    </>
  );
};

export default SpecificArticle;
