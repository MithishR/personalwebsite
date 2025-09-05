import equitable from '../assets/logos/equitable.png';
import ubc from '../assets/logos/ubc.png';
import qscu from '../assets/logos/qscu.png';
import fdu from '../assets/logos/fdu.png';
import tum from '../assets/logos/tum.png';

export const workexp = [

  {

     
    id: 1,
    company: "The University of British Columbia, Okanagan",
    location: "Kelowna, BC",
    logo: ubc,
    positionslist: [
      {
        position: "Undergraduate Resarcher (Directed Studies) – HelpMe System Development and Optimization",
        date: "September 2025 - Present",
        description: `
          <ul class="list-disc list-inside space-y-2 pl-4">
            <li>Directed Studies in Computer Science at UBC Okanagan, supervised by Dr. Ramon Lawrence, starting from September 2025.</li>
            <li> Enhancing the HelpMe student support chatbot system for scalability, data security, and UI usability.</li>
            <li>  Implementing database redundancy, encryption, and performance optimization with weekly development milestones.</li>
          </ul>
        `,
      },
       {
        position: "Undergraduate Teaching Assistant, Computer Science",
        date: "September 2025 - Present",
        description: `
          <ul class="list-disc list-inside space-y-2 pl-4">
            <li>Facilitated lab sections, delivered instruction, and evaluated assignments for 65 students in COSC 111: Introductory Computer Science..</li>
          
          </ul>
        `,
      },
    ],
  },

  {
    id: 2,
    company: "Technical University of Munich",
    location: "Munich, Germany",
    logo: tum,
    positionslist: [
      {
        position: "Research Software Development Intern - TUM PREP Program",
        date: "July 2025-August 2025",
        description: 
        `  <ul class="list-disc list-inside space-y-2 pl-4">
            <li>Architected and implemented a protocol versioning subsystem for the momenTUM Research Platform, enabling persistent
storage, retrieval, and Git-style diff comparison of clinical study protocols reducing protocol retrieval and verification time by
˜
85% for multi-center trials.</li>
            <li> Developed RESTful API endpoints with Node.js (Express) and MongoDB, applying Mongoose schema validation, aggregation
pipelines, and compound indexing to improve query performance by˜35% on datasets exceeding 10k records</li>
            <li>  Engineered Git-inspired branching models and semantic versioning principles to clinical research workflows, ensuring 100%
reproducibility of protocol history in compliance with Good Clinical Practices.</li>
            <li> Developed a React.js front-end with dynamic routing, reusable components, and state management to streamline version
visualization and selection for non-technical research staff.</li>

          </ul>
        `,
      },
    ],
  },
   
  {
    id: 3,
    company: "The Equitable Life Insurance Company of Canada",
    location: "Waterloo, ON",
    logo: equitable,
    positionslist: [
      {
        position: "Software Developer Co-op: Investments Technology",
        date: "December 2024 - April 2025",
        description: `
          <ul class="list-disc list-inside space-y-2 pl-4">
            <li>Led the full redesign and implementation of the fixed-income pricing waterfall system, building SQL Server stored procedures, cron jobs, and exception tracking logic to reduce stale pricing cases by 95%, ensuring daily completeness across Bloomberg and internal sources.</li>
            <li>Developed a secure, role-based Flask + PostgreSQL interface for managing pricing exceptions, introducing a supervisor approval workflow that improved audit transparency and cut manual back-and-forth by 70%.</li>
            <li>Built Power BI dashboards for cash flow forecasting and compliance reporting in collaboration with investment analysts; developed backend workflows using Pandas, SQLAlchemy, and Flask to improve data reliability and reduce manual validation by 60%.</li>
            <li>Enhanced Bloomberg integration pipelines by reverse-engineering pricing mismatches and optimizing transformation logic in Python and SQL, ensuring accurate valuation across accounting platforms.</li>
          </ul>
        `,
      },
      {
        position: "Software Developer Co-op: Enterprise Architecture",
        date: "May 2024 - November 2024",
        description: `
          <ul class="list-disc list-inside space-y-2 pl-4">
            <li>Developed an AI-driven chatbot using Python, Microsoft Azure Bot Framework, and Microsoft Teams APIs to automate secure API key retrieval and document delivery, reducing manual IT requests by 80%.</li>
            <li>Analyzed 250+ internal business processes using Python visualizations to identify high-error, high-latency workflows and prioritize candidates for RPA automation.</li>
            <li>Automated and updated a deprecated report compiler application end-to-end using Blue Prism and Microsoft Power Automate, saving 250 hours per week.</li>
            <li>Built a scalable React + TypeScript component library from scratch, improving internal web app performance by 35% and reducing developer UI bugs through enforced design consistency.</li>
            <li>Contributed to enterprise cloud architecture discussions, implementing CI/CD pipelines (Azure DevOps) and containerized solutions to support high-availability microservices and rapid deployment cycles.</li>
          </ul>
        `,
      },
    ],
  },
  {
    id: 4,
    company: "Fairleigh Dickinson University",
    location: "Vancouver, BC",
    logo: fdu,
    positionslist: [
      {
        position: "Research Assistant",
        date: "March 2025 - Present",
        description: `
          <ul class="list-disc list-inside space-y-2 pl-4">
            <li>Developed and trained LSTM-based deep learning models for vehicle trajectory prediction using TensorFlow/Keras; structured multivariate GPS time-series data into fixed-length input sequences with corresponding future targets.</li>
            <li>Implemented 1D Convolutional Neural Networks (CNNs) to extract local spatial features from resampled trajectory sequences before feeding into LSTM layers, enhancing model learning of short-term movement patterns.</li>
            <li>Built preprocessing pipelines using Pandas and NumPy to handle missing data, resample timestamps, normalize features, and structure fixed-length input-output sequences for time-series modeling.</li>
            <li>Supervised by Dr. Anitha Saravana; tracked training and validation performance using loss curves and checkpoints, and visualized model outputs and sequence behavior using Matplotlib and Seaborn.</li>
          </ul>
        `,
      },
    ],
  },
   {
    id: 5,
    company: "The University of British Columbia, Okanagan",
    location: "Kelowna, BC",
    logo: ubc,
    positionslist: [
      {
        position: "Undergraduate Teaching Assistant, Mathematics",
        date: "January 2024 - April 2024",
        description: `
          <ul class="list-disc list-inside space-y-2 pl-4">
            <li>Facilitated tutorial sessions, delivered instruction, and evaluated assignments for 60 students in MATH 116: Calculus I for Management and Economics.</li>
            <li>Performed invigilation duties, marked exams, and provided academic assistance to 150+ students enrolled in the course.</li>
          </ul>
        `,
      },
      {
        position: "Supplementary Learning Leader, Mathematics and Computer Science",
        date: "September 2022 - December 2023",
        description: `
          <ul class="list-disc list-inside space-y-2 pl-4">
            <li>SL Leader for Computer Programming and Calculus I, supporting first- and second-year students in weekly review sessions.</li>
            <li>Provided tutoring to 50+ students using interactive strategies and office hours to reinforce course material and improve comprehension.</li>
            <li>Students attending 4+ SL sessions showed a 5% average grade improvement over peers who did not attend.</li>
          </ul>
        `,
      },
      {
        position: "Orientation Leader",
        date: "August 2022 - September 2022",
        description: `
          <ul class="list-disc list-inside space-y-2 pl-4">
            <li>Led a group of 40 first-year students, organizing events and establishing a community agreement during the 10-day orientation program.</li>
            <li>Promoted inclusivity and coordinated 15 events with 60+ orientation leaders for 2,000 incoming students.</li>
            <li>Built relationships and served as a campus resource for new-to-UBC students, fellow volunteers, and university partners.</li>
          </ul>
        `,
      },
    ],
  },
  {
    id: 6,
    company: "UBC Okanagan Quantitative Sciences Course Union",
    location: "Kelowna, BC",
    logo: qscu,
    positionslist: [
      {
        position: "Computer Science Representative",
        date: "May 2023 - April 2024",
        description: `
          <ul class="list-disc list-inside space-y-2 pl-4">
            <li>Represents the Computer Science student body of UBC Okanagan to the QSCU.</li>
            <li>Organized events and workshops for Computer Science students and connected with professors and senior students to guide peers academically and professionally.</li>
            <li>Promoted digital literacy across the university through events spanning all faculties and year levels.</li>
          </ul>
        `,
      },
    ],
  },
 
];


export const upcomingexp = [
//   {
//     id: 1,
//     company: "Technical University of Munich",
//     location: "Munich, Germany",
//     logo: tum,
//     positionslist: [
//       {
//         position: "Incoming Research Intern – TUM PREP",
//         date: "From July 2025",
//         description: `
//           <ul class="list-disc list-inside space-y-2 pl-4">
//             <li>Incoming Research Intern at the Technical University of Munich Practical Experience Research Program (TUM PREP), July–August 2025.</li>
//             <li> Enhancing a Telegram-based chatbot for personalized circadian and sleep health by implementing micro-randomized trial (micro-RCT) and JITAI frameworks.</li>
//             <li>  Integrating real-time monitoring, context-awareness, and AI-driven communication into a scalable digital health intervention.</li>

//           </ul>
//         `,
//       },
//     ],
//   },
//   {
//     id: 2,
//     company: "The University of British Columbia, Okanagan",
//     location: "Kelowna, BC",
//     logo: ubc,
//     positionslist: [
//       {
//         position: "Undergraduate Resarcher (Directed Studies) – HelpMe System Development and Optimization",
//         date: "From September 2025",
//         description: `
//           <ul class="list-disc list-inside space-y-2 pl-4">
//             <li>Directed Studies in Computer Science at UBC Okanagan, supervised by Dr. Ramon Lawrence, starting from September 2025.</li>
//             <li> Enhancing the HelpMe student support chatbot system for scalability, data security, and UI usability.</li>
//             <li>  Implementing database redundancy, encryption, and performance optimization with weekly development milestones.</li>
//           </ul>
//         `,
//       },
//     ],
//   },
];