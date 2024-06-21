import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import WorkExperience from "./workExperience/WorkExperience";
import ProjectCard from "./projects/Projects";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Top from "./topbutton/Top";
import Profile from "./profile/Profile";
import Certifications from "./certifications/Certifications";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <Skills />
        <WorkExperience />
        <ProjectCard
          projectName="BuyThat: Analyzing Product Reviews"
          projectDescription="An application that analyzes sentiments in product reviews."

        />
        <Certifications />
        <Profile />
        <Footer />
        <Top />
      </div>
    );
  }
}
