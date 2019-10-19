import React from 'react';
import PortfolioItem from "./PortfolioItem";
import "../styles/PortfolioPage.css";
import PlaceholderImg from "../img/placeholder.jpg";

class PortfolioPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = [
      { title: "electric weather", img: PlaceholderImg, description: "This is a project!", githubLink: "https://github.com/N8ers", liveLink: "https://github.com/N8ers" },
      { title: "react todo", img: PlaceholderImg, description: "This is a project!", githubLink: "https://github.com/N8ers", liveLink: "https://github.com/N8ers" },
      { title: "honey-dew", img: PlaceholderImg, description: "This is a project!", githubLink: "https://github.com/N8ers", liveLink: "https://github.com/N8ers" },
      { title: "buds n brews", img: PlaceholderImg, description: "This is a project!", githubLink: "https://github.com/N8ers", liveLink: "https://github.com/N8ers" },
      { title: "budgeter", img: PlaceholderImg, description: "This is a project!", githubLink: "https://github.com/N8ers", liveLink: "https://github.com/N8ers" }
    ]
  }

  render() {
    return (
      <div>
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
      </div >
    )
  }

}

export default PortfolioPage;