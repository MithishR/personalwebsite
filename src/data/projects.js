import analysis from '../assets/screenshots/analysis.png';
import communicado from '../assets/screenshots/communicado.png';
import spacebank from '../assets/screenshots/spacebank.png';
import website from '../assets/screenshots/website.png';
import canada from '../assets/screenshots/canada.png';
export const projects = [
    {
        id: 1,
        name: "Personal Portfolio Website",
        stack: "JavaScript, React, Tailwind CSS, HTML",
        picture: website , 
        github: "https://github.com/MithishR/personalwebsite",
        desc: `
          <ul>
            <li>• Developed a dynamic and interactive web application to showcase work experience using modern web development technologies. .</li>
            <li>• Implemented using Javascript, React for UI components and Tailwind CSS for styling. Furthermore, used HTML for webpage structure. .</li>
          </ul>
        `
    
      },

      {
        id: 2,
        name: "Communicado : E-Ticketing Platform",
        stack: "Python, Django, MySQL, Docker, Ubuntu Server, HTML, CSS",
        picture:communicado , 
        github: "https://github.com/MithishR/Communicado",
        desc: `
          <ul>
            <li>• Developed a comprehensive and efficient e-ticketing platform called Communicado for browsing, booking, and managing event tickets. </li>
            <li>• Utilized Django and Python for backend operations, MySQL for secure data storage, Docker for containerization, and Ubuntu Server for hosting </li>
            <li>• Implemented comprehensive unit and integration tests to uphold code quality and ensure optimal functionality within the platform. </li>
            <li>• Orchestrated the creation of a scalability-focused deployment pipeline utilizing CI/CD techniques. </li>
        `
    
      },

         {
        id: 3,
        name: "SpaceBank : Spaceship Resource Management",
        stack: "JSP, Docker, HTML, CSS, Bootstrap 5",
        picture:spacebank , 
        github: "https://github.com/MithishR/SpaceBank",
        desc: `
          <ul>
            <li>• Created an interactive software for managing resources and services across space stations in a fictional world where humans have migrated to outer space.</li>
            <li>• Employed JSP for dynamic web content, Docker for containerization, and HTML/CSS with Bootstrap 5 for frontend design. </li>
            <li>• Utilized SQL and JDBC for robust database management, with Tomcat Apache for server deployment. </li>
        `
    
      },

       {
        id: 4,
        name: "Analysis of Breast Cancer Diagnosis in the State of Wisconsin",
        stack: "Python, Tableau",
        picture:analysis , 
        github: "https://github.com/MithishR/BreastCancerAnalysis",
        desc: `
          <ul>
            <li>• Analyzed the Breast Cancer Wisconsin Data Set to identify key predictors influencing cancer diagnosis.</li>
            <li>• Utilized Python libraries (NumPy, pandas, seaborn, Matplotlib) for advanced data visualization and analysis. </li>
            <li>• Created a Tableau dashboard to enhance data comprehension and showcase relationships between features. </li>
        `
    
      },

    
    {
        id: 5,
        name: "Coming soon!",
        // stack: "",
        picture: canada , 
        github: "",
        desc: `
          Canada : Weather Predictor 
        `
    
      },

    // TEMPLATE: 
    // {
    //     id: ,
    //     name: "",
    //     stack: "",
    //     picture:, 
    //     github: "",
    //     desc: `
    //       <ul>
    //         <li>• </li>
    //         <li>•  </li>
    //     `
    
    //   },

];
