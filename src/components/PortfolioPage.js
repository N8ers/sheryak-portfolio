import React from 'react';
import { Grid } from '@material-ui/core';
import PortfolioItem from "./PortfolioItem";
import "../styles/PortfolioPage.css";
import PlaceholderImg from "../img/placeholder.jpg";

class PortfolioPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = [
      { title: "electric weather", img: PlaceholderImg, description: "Run a weather app on your local computer, using Electron!", githubLink: "https://github.com/N8ers" },
      { title: "react todo", img: PlaceholderImg, description: "Check out this fun todo list app built with Reactjs!", githubLink: "https://github.com/N8ers", liveLink: "https://github.com/N8ers" },
      // { title: "honey-dew", img: PlaceholderImg, description: "This is a project!", githubLink: "https://github.com/N8ers", liveLink: "https://github.com/N8ers" },
      // { title: "buds n brews", img: PlaceholderImg, description: "This is a project!", githubLink: "https://github.com/N8ers", liveLink: "https://github.com/N8ers" },
      // { title: "budgeter", img: PlaceholderImg, description: "This is a project!", githubLink: "https://github.com/N8ers", liveLink: "https://github.com/N8ers" },
      // { title: "yelp API", img: PlaceholderImg, description: "This is a project!", githubLink: "https://github.com/N8ers", liveLink: "https://github.com/N8ers" }
    ]
  }

  render() {
    return (
      <div className="portfilio-page">
        <Grid container>
          {
            this.state.map((item) => {
              return <PortfolioItem
                title={item.title}
                img={item.img}
                description={item.description}
                githubLink={item.githubLink}
                liveLink={item.liveLink}
              />
            })
          }
        </Grid>
      </div>
    )
  }

}

export default PortfolioPage;