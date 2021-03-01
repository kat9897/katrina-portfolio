/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Katrina Best",
  title: "Hi all, I'm Katrina",
  subTitle: emoji(
    "A passionate Software Developer Intern ready to learn more! \
    I'm excited to have an experience of designing and building Web and \
    Mobile applications with JavaScript / Reactjs / Nodejs and some \
    other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1bCJRHGOtSHsI4RLh1YVzCU65xviaqsqh/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kat9897",
   linkedin: "https://www.linkedin.com/in/katrina-best",
  gmail: "katrinaemily.best@mail.utoronto.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  // medium: "https://medium.com/@davidrakosi",
  // stackoverflow: "https://stackoverflow.com/users/13263979/drakosi",
  // instagram: 'https://www.instagram.com/davidrakosi/',
  // twitter: 'https://twitter.com/davidrakosi_',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "AWESOME SOFTWARE DEVELOPER WHO WANTS TO EXPLORE EVERY OPPORTUNITY",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA )"),
    emoji(
      "⚡ Integration of third party services such as GitHub / MongoDB / Netlify"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "c",
      fontAwesomeClassname: "fab fa-c"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Toronto",
      logo: require("./assets/images/UTSC.png"),
      subHeader: "Undergrad of Science in Statistics",
      duration: "September 2019 - present",
      desc: "Participated in 4 hackathons in 2021 and 2 challenges so far as of February.\
      Took courses in web dev and databases, Python, and C."      
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "30%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer Intern",
      company: "tShirtGang.com",
      companylogo: require("./assets/images/tshirtganglogo.png"),
      date: "April 2021 – Present",
      desc:
        "Changing lives of developers one line of code at a time.",
      descBullets: [
        "Custom building applications",
        "Coaching"
      ]
    },
    {
      role: "Teaching Assistant",
      company: "University of Toronto Scarborough",
      companylogo: require("./assets/images/UTSC.png"),
      date: "September 2020 – Present",
      desc:
        "CSCA48 - Introduction to Computer Science 2: January 2020 - present\
        CSCA08 - Introduction to Computer Science 1: September 2020 - December 2020\
        \
        Assisting students with Computer Science course materials including Python and C programming \
        languages; encouraging classroom participation and online performance; marking and invigilation \
        in co-operation with a team of colleagues."
    },
    {
      role: "Supervisor",
      company: "Roxy Theatres",
      companylogo: require("./assets/images/theroxy.png"),
      date: "August 2015 – August 2019",
      desc:
        "Assisted and controlled food production with a small team of employers\
        Communicated with a small team and coordinated different assignments to give them\
        Mentored new employees the basic training required for their position\
        Maintained a professional demeanour while discussing customer affairs and answering questions\
        Improved equipment for better use for making popcorn\
        Optimized the flow of customers by organizing coworkers to have an effective system of preparing food and serving customers\
        Thanked by customers and complimented on patience and efficiency"
    },
    {
      role: "Soccer Referee",
      company: "Uxbridge Soccer Club",
      companylogo: require("./assets/images/uxbridge_soccer.jpg"),
      date: "June 2015 – September 2016",
      desc:
        "Worked every summer from June - September\
        Followed and enforced the rules and regulations required by the company\
        Punctual with time\
        Organized the game and made sure all rules were made aware to players and coaches\
        Accurately recorded information about the game\
        Dealt with stressful situations in a calm but professional manner\
        Refereed over 50 games in two summers\
        Kept children in between the ages of 5-11 engaged and active in the soccer games\
        Upheld a lively and fun experience for all participants involved"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "kat9897", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND PROJECT THAT I HELPED CREATE",
  projects: [
    {
      image: require("./assets/images/sky-chat-logo.png"),
      projectName: "Sky Chat - React JS 5 Day Challenge",
      projectDesc: "Worked with Firebase for the first time and React JS to create a Slack clone called Sky Chat.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://slack-clone-kat.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/One Of Us Final.png"),
      projectName: "One of Us - MH Hacks Finalist",
      projectDesc: "Created a website UI/UX design to create communities for students at UTSC in the pandemic to connect them.",
      footerLink: [
        {
          name: "Visit Website Design",
          url: "https://www.figma.com/file/jmR3KvwlqPSovZPhbIdnYk/MH-hacks-ideas?node-id=0%3A1"
        },
        //  you can add extra buttons here.
        {
          name: "Visit Video",
          url: "https://youtu.be/P3728lDb8iY"
        }
      ]
    },
    {
      image: require("./assets/images/FocaLearn.png"),
      projectName: "FocaLearn - UofTHacks Submission",
      projectDesc: "Created a chrome extension using Javascript and HTML that plays calming music to help you study.",
      footerLink: [
        {
          name: "Visit GitHub",
          url: "https://github.com/kat9897/FocaLearn"
        }
      ]
    }, 
    {
      image: require("./assets/images/Helping_Hearts.jpg"),
      projectName: "Helping Hearts - StarHacks Submission",
      projectDesc: "Developed a prototype website to help those share their mental health needs.\
      Developed skills in HTML, CSS, and Javascript.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://helping-hearts.netlify.app/"
        },
        {
          name: "Visit Video",
          url: "https://youtu.be/TL0htUBnotE"
        },
        {
          name: "Visit GitHub",
          url: "https://github.com/kat9897/Helping-Hearts"
        }
      ]
    }, 
    {
      image: require("./assets/images/Seasoning_Shack.jpg"),
      projectName: "Seasoning Shack - Hack the Valley 4 Winner",
      projectDesc: "Awarded the ‘Cheapr Eats API Prize’. Developed skills in PHP, mySQL, CSS, and HTML. Implemented secure \
      signup and login verification page, and collaborated in designing a functional website. Created a video demo showing \
      its capabilities and our creative ideas for the project using Shotcut.",
      footerLink: [
        {
          name: "Visit GitHub",
          url: "https://github.com/kat9897/Seasoning-Shack"
        }
      ]
    }, 
    {
      image: require("./assets/images/Crossing.jpg"),
      projectName: "When You Cross, Don't Be Lost - School Project",
      projectDesc: "Created a short video to demonstrate the dangers of unawareness while \
      crossing the street. Developed Shotcut and videographic skills.",
      footerLink: [
        {
          name: "Visit Video",
          url: "https://youtu.be/jviDYpIPawQ"
        }
      ]
    }, 
    {
      image: require("./assets/images/GLO_Project.jpg"),
      projectName: "GLO Project - School Project",
      projectDesc: "Collaborated with a team to create a professional handheld device that creates an altered laser tag game,\
      successfully meeting our beta project timeline. Designed code to allow devices to interact with one another.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://sites.google.com/ddsb.ca/projectglo/home"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Cybersecurity Case Competition Winner",
      subtitle: "Awarded $500 to a skilled team who successfully strategized and presented\
       a solution to increase the cybersecurity for a case study referring to a security breach.",
      image: require("./assets/images/Cybersecurity.jpg"),
      footerLink: [
        {
          name: "View Website",
          url: "http://www.explorecsr.ca/events.html"
        }
      ]
    },
    {
      title: "Smart Serve Certificate",
      image: require("./assets/images/Smart-Serve-Logo.png"),
      footerLink: [
        {
          name: "View Website",
          url: "https://smartserve.ca/"
        }
      ]
    },
    {
      title: "Hack the Valley 4 Winner",
      subtitle: "Awarded to a determined team with the best API at Hack the Valley 4 chosen by Cheapr Eats.",
      image: require("./assets/images/htv.png"),
      footerLink: [
        {
          name: "View Website",
          url: "https://kat9897.github.io/Seasoning-Shack/",
          name: "View Project Gallery",
          url: "https://hack-the-valley-4-9442.devpost.com/project-gallery",
          name: "View GitHub",
          url: "https://github.com/kat9897/Seasoning-Shack"
        }
      ]
    },
    {
      title: "safeTALK Suicide Alertness Training and Certificate",
      image: require("./assets/images/safeTALK.jpg"),
      footerLink: [
        {
          name: "View Website",
          url: "https://www.livingworks.net/safetalk"
        }
      ]
    },
    {
      title: "Sensei Title and Certificate",
      image: require("./assets/images/okami-kai.jpg"),
      footerLink: [
        {
          name: "View Website",
          url: "https://okamikai.com/"
        }
      ]
    }, 
    {
      title: "Annual Alaine Campsall Memorial Scholarship Award",
      subtitle: "A special annual award is given to one student of karate who exceeds all expectations \
      and demonstrates exceptional qualities in the dojo",
      image: require("./assets/images/okami-kai.jpg"),
      footerLink: [
        {
          name: "View Website",
          url: "https://okamikai.com/"
        }
      ]
    },
    {
      title: "1st Dan Shotokan Black Belt",
      subtitle: "Completed the requirements for all lower belts and executed outstanding performance \
      in physical and mental tests. Sufficiently passed all of the different categories including kata,\
       kumite, basics, judo, aikido, self-defence, and weapons.",
      image: require("./assets/images/okami-kai.jpg"),
      footerLink: [
        {
          name: "View Website",
          url: "https://okamikai.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "katrinaemily.best@mail.utoronto.ca"
};

// Twitter Section

const twitterDetails = {
  userName: "davidrakosi_", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
