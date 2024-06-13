/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";

// Your Summary And Greeting Section

const greeting = {
  username: "Isha Saikumar",
  title: " Hello there! I'm Isha, a passionate graduate student from the vibrant halls of Indiana University Bloomington.",
  subTitle: emoji(
    "Full stack Developer 👩🏽‍💻"
  ),
  resumeLink:
    "https://docs.google.com/document/d/1LVBWauoSNFUP91jLR4-zKExI1CGKkZa_/edit?usp=share_link&ouid=100223492053731464282&rtpof=true&sd=true",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/ishabalu",
  linkedin: "https://www.linkedin.com/in/isha-saikumar/",

};

// Your Skills Section

const skillsSection = {
  title: "My Skills",
  subTitle:
    "",
  skills: [

  ],

  softwareSkills: [
    {
      skillName: "python",
      classname: "logos:python",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "java",
      classname: "logos:java",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "reactJS",
      classname: "simple-icons:react",
      style: {
        color: "#61DAFB",
      },
    },
    {
      skillName: "git",
      classname: "logos:git-icon",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "jenkins",
      classname: "vscode-icons:file-type-jenkins",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "postgres",
      classname: "logos:postgresql",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      "skillName": "selenium",
      "classname": "simple-icons:selenium",
      "style": {
        "backgroundColor": "transparent"
      }
    },
    {
      "skillName": "go",
      "classname": "logos:go",
      "style": {
        "backgroundColor": "transparent"
      }
    },
    {
      "skillName": "postman",
      "classname": "logos:postman",
      "style": {
        "backgroundColor": "transparent"
      }
    },
    {
      "skillName": "kibana",
      "classname": "simple-icons:kibana",
      "style": {
        "backgroundColor": "transparent"
      }
    },
  ],
};


const skillsCategories = {
  languages: [
    { name: "Python", iconClass: "logos:python" },
    { name: "Java", iconClass: "logos:java" },
    { name: "Go", iconClass: "logos:go" },
    { name: "HTML", iconClass: "vscode-icons:file-type-html" },
    { name: "CSS", iconClass: "vscode-icons:file-type-css" },
    { name: "JavaScript", iconClass: "logos:javascript" },
    { name: "SQL", iconClass: "vscode-icons:file-type-sql" }


  ],
  frameworks: [
    { name: "React", iconClass: "logos:react" },
    { name: "Selenium", iconClass: "logos:selenium", style: { color: "#43B02A" } },
    { name: "Node.js", iconClass: "logos:nodejs" },
    { name: "Mocha", iconClass: "logos:mocha" },
    { name: "Chai", iconClass: "logos:chai" }



  ],
  tools: [
    { name: "VS Code", iconClass: "vscode-icons:file-type-vscode" },
    { name: "Git", iconClass: "logos:git-icon" },
    { name: "Jenkins", iconClass: "vscode-icons:file-type-jenkins" },
    { name: "Kibana", iconClass: "logos:kibana" },
    { name: "Docker", iconClass: "logos:docker-icon" },
    { name: "Postman", iconClass: "logos:postman-icon" }


  ],
  databases: [
    { "name": "PostgreSQL", "iconClass": "logos:postgresql" },
    { "name": "MySQL", "iconClass": "logos:mysql", "style": { "color": "#4479A1" } },
    { "name": "Firestore", "iconClass": "logos:firebase", "style": { "color": "#FFA000" } },
    { "name": "MongoDB", "iconClass": "logos:mongodb", "style": { "color": "#47A248" } }


  ],
};


function Intern() {
  return (
    <div>
      <p>In my role, I engaged in a comprehensive study of the multicloud platform’s capabilities, gaining a deep understanding of its features and potential. Prior to the deployment of automated testing procedures, I meticulously performed manual testing to ensure the platform’s robustness and to preemptively identify any defects.</p>

      <p>Subsequently, I developed and implemented Selenium automation test scripts tailored to the platform’s unique environment. This strategic initiative was crucial in detecting and resolving issues before the platform’s release into production, thereby safeguarding the quality of the final product.</p>

      <p>To maintain the highest standards of quality assurance, I established a routine process where these scripts were executed daily. The outcomes of these tests were systematically compiled and disseminated through automated emails, providing stakeholders with regular updates on the platform’s performance and stability.</p>
      <div>
        <h3>Key Performance Metrics:</h3>
        <ul>
          <li><strong>Defect Detection Efficiency:</strong> Achieved a defect detection rate of over 95%, ensuring the platform’s reliability.</li>
          <li><strong>Test Case Pass Rate:</strong> Maintained a consistent pass rate of 99% for all automated test cases.</li>
          <li><strong>Automated Test Coverage:</strong> Expanded the test coverage by 40%, encompassing a wider range of scenarios and edge cases.</li>
          <li><strong>Daily Test Execution:</strong> Successfully executed an average of 50 automated test scripts per day, with detailed reports on test outcomes.</li>
        </ul>
      </div>
    </div>

  );
}

function Engineer() {
  return (
    <div>
      <p>In my tenure as a Software Engineer, my role encompassed more than script automation; I explored our microservices, notably the Tenant-Mgr, to establish Flex groups. These groups were key in orchestrating public clouds like GCP, AWS, and Azure, managing access, budgeting, and resource management.</p>

      <p>I played a key role in the entire development cycle of the Flex group feature, from its inception to its launch. My work involved refining business logic, creating extensive unit tests, and preparing mock data for thorough REST API testing. I also actively participated in bug bash sessions, pinpointing and addressing critical edge cases to enhance feature reliability before release.
      </p>

      <p>I specialized in Azure Management Group REST APIs to enhance subscription tracking and policy management. Through meticulous testing with POSTMAN and UI assessments, I ensured optimal functionality. Additionally, I utilized Jenkins for continuous integration, automating our test suite execution and daily reporting, thereby bolstering our product’s reliability and performance.</p>
      
      <div>
        <h3>Key Performance Metrics:</h3>
        <ul>
          <li><strong>Business Logic Implementation:</strong> Developed and integrated complex business logic for core services, contributing to the management and operational efficiency of public cloud services.</li>
          <li><strong>Bug Bash Contributions:</strong> Actively participated in bug bash sessions, uncovering and addressing edge-case scenarios, which played a pivotal role in preempting potential production issues.</li>
          <li><strong>API Development and Testing:</strong> Authored and tested REST APIs for critical features, ensuring seamless integration and functionality within the microservices architecture.</li>
          <li><strong>Continuous Integration Process:</strong> Leveraged Jenkins to automate the continuous integration process, resulting in a streamlined workflow that updated and tested Selenium scripts daily, enhancing the development pipeline’s efficiency.</li>
        </ul>

      </div>
    </div>

  );
}


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Cisco Systems Pvt Ltd",
      companylogo: require("./assets/images/cisco_logo_in_a_circle.png"),
      date: "Aug 2021 – Jul 2023",
      descComponent: Engineer
    },
    {
      role: "Technical Undergraduate Intern",
      company: "Cisco Systems Pvt Ltd",
      companylogo: require("./assets/images/cisco_logo_in_a_circle.png"),
      date: "Feb 2021 – Jun 2021",
      descComponent: Intern
      ,
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: true, // Set true or false to show Contact profile using Github, defaults to false
  display: true, // Set false to hide this section, defaults to true
};

// Your certifications

const certifications = {
  certifications: [
    {
      title: "Selenium",
      subtitle: "- Vskills",
      logo_path: "vskills-logo.png",
      certificate_link:
        "https://www.vskills.in/certification/40215-certified-selenium-professional-bharat-babu-kammakatla",
      alt_name: "Vskills",
      color_code: "#F6EAEA",
    },
    {
      title: "Cloud Admin & Automation",
      subtitle: "- Experitest",
      logo_path: "seetest-logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1qhh1ZUBB2VPrOaT6bNgiJ5Y2sHmCjvMg/view?usp=drivesdk",
      alt_name: "Experitest",
      color_code: "#F0FFDD",
    },
    {
      title: "Python",
      subtitle: "- Jose Portilla",
      logo_path: "pierian-data-logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-a80d6e7c-e753-421d-bcee-5a7bc1769f28/",
      alt_name: "Pierian-Data",
      color_code: "#FEF6E6",
    },
    {
      title: "Selenium Python",
      subtitle: "- Rahul Shetty",
      logo_path: "rahulshettyacademy-logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-e4b66abd-18c6-4bfa-9132-ab22d2bf7ef7/",
      alt_name: "RahulShettyAcademy",
      color_code: "#FDE9EA",
    },
    {
      title: "Data Science",
      subtitle: "- IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/893f2210f39f5a60d0463b19b469b808",
      alt_name: "IBM",
      color_code: "#E3F1FA",
    },
    {
      title: "ML and DS",
      subtitle: "- Andrei Neagoie",
      logo_path: "zero-to-mastery.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-fd118b7d-7436-442c-a7f8-5077c432d596/",
      alt_name: "Zero To Mastery",
      color_code: "#FFFDDD",
    },
  ],
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://bharatkammakatla.hashnode.dev/selenium-python-automation-framework-how-to-build",
      title: "How to build a Selenium Python Automation Framework",
      description:
        "Interested in building a test automation framework with selenium and python? If so, check out here !",
    },
    {
      url: "https://bharatkammakatla.hashnode.dev/steps-to-build-a-selenium-java-framework-ckdsi73xg005ga9s1defhemfz",
      title: "Steps to build a Selenium Java Automation Framework",
      description:
        "Interested in building a test automation framework with selenium and java? If so, check out here !",
    },
    {
      url: "https://bharatkammakatla.hashnode.dev/face-expression-recognition-using-keras-and-cnns-ckbevmufo0195dis1dfs10kt1",
      title: "Building a Machine Learning model to detect human emotions",
      description:
        "Are you interested to know how machines detect human emotions? If so, check out here !",
    },
    {
      url: "https://medium.com/@bharatkammakatla/basic-end-to-end-scikit-learn-workflow-cd9e9a50491b?source=friends_link&sk=b828ac262c172abd7508efcbd00e5bd3",
      title: "Basic End-to-End Scikit-Learn workflow",
      description:
        "Do you want to know how a basic end-to-end scikit-learn workflow is implemented ? If so, check out here !",
    },
  ],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (812) 778-5488 ",
  email_address: "isaikuma@iu.edu",
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  skillsCategories,
  workExperiences,
  openSource,
  blogSection,
  contactInfo,
  certifications,
};
