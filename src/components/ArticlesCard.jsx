import React from "react";
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ArticlesCard = ({ article }) => {
  return (
    <>
      <Card>
        <Card.Content>
          <Card.Header as={Link} to={`/articles/${article.id}`} data-cy="title">
            {article.title}
          </Card.Header>
          <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png'/> 
          <Card.Description data-cy="teaser">{article.teaser}</Card.Description>
        </Card.Content>
      </Card>
    </>
  );
};

export default ArticlesCard;
