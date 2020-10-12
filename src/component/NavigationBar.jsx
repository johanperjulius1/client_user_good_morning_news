import React, { useState } from "react";
import { Header, Menu, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [activeItem, setActiveItem] = useState("news");
  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };
  return (
    <Header as="h1" id="header">
      <Grid id="main-grid">
        <Grid.Row columns={4} id="GMN-logo">
          <Grid.Column id="good" width={2} textAlign="right">
            Good
          </Grid.Column>
          <Grid.Column id="morning" width={2} textAlign="center">
            Morning
          </Grid.Column>
          <Grid.Column id="News" width={2} textAlign="left">
            News
          </Grid.Column>
          <Grid.Column id="slogan" width={8} textAlign="right">
            For a great start of the day
          </Grid.Column>
        </Grid.Row>{" "}
      </Grid>
      <Header.Subheader data-cy="navigation-bar">
        <Menu id="menu">
          <Menu.Item
            data-cy="home"
            name="home"
            active={activeItem === "home"}
            onClick={handleItemClick}
            as={Link}
            to={{ pathname: "/" }}
          >
            Home
          </Menu.Item>
          <Menu.Item
            data-cy="sports"
            name="sports"
            active={activeItem === "sports"}
            onClick={handleItemClick}
            as={Link}
            to={{ pathname: "/sports" }}
          >
            Sports
          </Menu.Item>
          <Menu.Item
            data-cy="business"
            name="business"
            active={activeItem === "business"}
            onClick={handleItemClick}
            as={Link}
            to={{ pathname: "/business" }}
          >
            Business
          </Menu.Item>
          <Menu.Item
            data-cy="entertainment"
            name="entertainment"
            active={activeItem === "entertainment"}
            onClick={handleItemClick}
            as={Link}
            to={{ pathname: "/entertainment" }}
          >
            Entertainment
          </Menu.Item>
          <Menu.Item
            data-cy="weather"
            name="weather"
            active={activeItem === "weather"}
            onClick={handleItemClick}
            as={Link}
            to={{ pathname: "/weather" }}
          >
            Weather
          </Menu.Item>
          <Menu.Item
            data-cy="international-news"
            name="international-news"
            active={activeItem === "international-news"}
            onClick={handleItemClick}
            as={Link}
            to={{ pathname: "/international-news" }}
          >
            International news
          </Menu.Item>

        </Menu>
      </Header.Subheader>
    </Header>
  );
};
export default NavigationBar;
