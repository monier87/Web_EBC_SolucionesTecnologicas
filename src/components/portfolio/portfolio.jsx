import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Masonry from "react-masonry-css";
//Scss
import "./portfolio.scss";
//Assets
import Arrow from "../../assets/portfolio/arrow.svg";
import Preview1 from "../../assets/portfolio/project01/preview.png";
import Preview2 from "../../assets/portfolio/project02/preview.png";
import Preview3 from "../../assets/portfolio/project03/preview.png";
import Preview4 from "../../assets/portfolio/project04/preview.png";
import Preview5 from "../../assets/portfolio/project05/preview.png";
import Preview6 from "../../assets/portfolio/project06/preview.png";
import Preview7 from "../../assets/portfolio/project07/preview.png";
import Preview8 from "../../assets/portfolio/project08/preview.png";
import Preview9 from "../../assets/portfolio/project09/preview.png";
//Components
import Button from "../ui-components/button/button";
import Title from "../ui-components/title/title";
import ProjectBox from "../ui-components/projectBox/projectBox";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // PORTFOLIO PROJECTS
      projects: [
        {
          id: "1",
          preview: Preview1,
          title: "Impresoras",
          tag: "hardware",
        },
        {
          id: "2",
          preview: Preview2,
          title: "Reparación TV",
          tag: "electronica",
        },
        {
          id: "3",
          preview: Preview3,
          title: "Reparacion y Montaje",
          tag: "climatizacion",
        },
        {
          id: "4",
          preview: Preview4,
          title: "Reparacion y Mantenimiento",
          tag: "electronica",
        },
        {
          id: "5",
          preview: Preview5,
          title: "Refrigeracion domestica",
          tag: "climatizacion",
        },
        {
          id: "6",
          preview: Preview6,
          title: "Relleno de Cartuchos",
          tag: "hardware",
        },
        {
          id: "7",
          preview: Preview7,
          title: "Split Domestico",
          tag: "climatizacion",
        },
        {
          id: "8",
          preview: Preview8,
          title: "Reparacion y Mantenimiento a PC",
          tag: "hardware",
        },
        {
          id: "9",
          preview: Preview9,
          title: "Reparación TV",
          tag: "electronica",
        },
      ],
      // PORTFOLIO GALLERY WILL LOAD THIS AFTER FUNCTION "filterGallery" FINISH FILTERING
      filterResult: null,
      pickedFilter: "all",
      filterMenuActive: false,
      pickedFilterDropdown: "RECIENTES"
    };
  }

  // FIRST LOAD
  componentDidMount() {
    this.filterGallery("all");
  }

  //FILTER PORTFOLIO FUNCTION
  filterGallery = (target) => {
    let projectsArr = [...this.state.projects];
    let result;

    if (target !== "all") {
      result = projectsArr.filter((project) => project.tag === target);
    } else {
      result = projectsArr;
    }

    this.setState({ filterResult: result, pickedFilter: target, pickedFilterDropdown: "RECIENTES" });
  };

  // FILTER DROP DOWN HOVER MENU FUNCTION
  filterMenuHover = (event) => {
    if(event) {
      this.setState({ filterMenuActive: true });
    }else {
      this.setState({ filterMenuActive: false });
    }
  }

  // FILTER DROP DOWN HANDLER
  filterDropDownHandler = (filter) => {
    this.setState({ pickedFilterDropdown: filter, filterMenuActive: false });

    let projectsArr = [...this.state.filterResult];
    let result;

    if (filter === "RECIENTES") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1));
    }else if (filter === "ANTERIORES") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1)).reverse();
    }

    this.setState({ filterResult: result});
  }

  // RENDER
  render() {
    // PORTFOLIO GALLERY RENDER
    let projectsRender = null;
    if (this.state.filterResult) {
      projectsRender = this.state.filterResult.map((project) => (
        <ProjectBox preview={project.preview} key={project.id} title={project.title} tag={project.tag} />
      ));
    }
    // PORTFOLIO GALLERY BREAKPOINTS
    const portfolioBreakpoints = {
      default: 3,
      1100: 3,
      700: 2,
      500: 1,
    };
    // PORTFOLIO FILTER DROPDOWN MENY RENDER
    let filterDroppDown = null;
    if(this.state.filterMenuActive) {
      filterDroppDown = (
        <div className="portfolio__filter-menu shadow">
          <p className="font12" onClick={() => this.filterDropDownHandler("RECIENTES")}>
            RECIENTES
          </p>
          <p className="font12" onClick={() => this.filterDropDownHandler("ANTERIORES")}>
            ANTERIORES
          </p>
        </div>
      );
    }

    return (
      <div id="portfolio">
        <div className="wrapper">
          <Title title="Muestra de Servicios." />
          <Row>
            <Col xs={12} sm={12} md={8} lg={9}>
              <div className="portfolio__nav">
                <ul>
                  <li className={this.state.pickedFilter === "all" ? "portfolio__nav-active font12" : "font12"} onClick={() => this.filterGallery("all")}>
                    TODOS
                  </li>
                  <li
                    className={this.state.pickedFilter === "branding" ? "portfolio__nav-active font12" : "font12"}
                    onClick={() => this.filterGallery("hardware")}
                  >
                    HARDWARE
                  </li>
                  <li
                    className={this.state.pickedFilter === "OLDESTillustrations" ? "portfolio__nav-active font12" : "font12"}
                    onClick={() => this.filterGallery("climatizacion")}
                  >
                    CLIMATIZACION
                  </li>
                  <li className={this.state.pickedFilter === "web" ? "portfolio__nav-active font12" : "font12"} onClick={() => this.filterGallery("electronica")}>
                    ELECTRONICA
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={3}>
              <div className="portfolio__filter" onMouseEnter={() => this.filterMenuHover(true)} onMouseLeave={() => this.filterMenuHover(false)}>
                <p className="font12">{this.state.pickedFilterDropdown} PRIMERO</p>
                <img src={Arrow} alt="arrow" />
                {filterDroppDown}
              </div>
            </Col>
          </Row>
          <Masonry breakpointCols={portfolioBreakpoints} className="my-masonry-grid" columnClassName="mint__gallery">
            {projectsRender}
          </Masonry>
          <Row className="flex-center padding40">
            <Button label="Tienes trabajo para nosotros?" target={"contact"} />
          </Row>
        </div>
      </div>
    );
  }
}

export default Portfolio;
