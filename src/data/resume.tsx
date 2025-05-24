import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Friza",
  initials: "MF",
  url: "https://reluctantslave.com/",
  location: "Palembang, South Sumatera",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Student Mentor at Bangkit Academy | Team Leader and Web Developer at PondPedia",
  summary:
    "I graduated with a Bachelor's degree in Computer Science. During my time at university, I was really active to seek life-flourishing opportunities and consequently found myself in the world where I met many like-minded people from around the place and build incredible things along the way. Experience in diverse roles, from full-stack web developer, machine learning engineer, project manager, student mentor, to the team leader for still-in-idea-phase Google-incubated team.",
  avatarUrl: "/me.png",
  technical_skills: [
    "React",
    "Next.js",
    "Javascript",
    "Typescript",
    "Linux",
    "Python",
    "PayloadCMS",
    "Docker",
    "Data Analytics",
    "Machine Learning",
    "LLM",
    "Google Cloud",
  ],
  skills: [
    "Project Management",
    "Entrepreneurship",
    "Business Strategy",
    "Team Leadership",
    "Mentoring"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "frizaaditya09@gmail.com",
    tel: "+6285265338348",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/reluctantslave",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/frizaaadityafrinison/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/frizaadityafrinison/",
        icon: Icons.instagram,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:frizaaditya09@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Bangkit Academy",
      badges: [],
      href: "https://grow.google/intl/id_id/bangkit/?tab=machine-learning",
      location: "Remote",
      title: "Student Mentor",
      logoUrl: "/bangkit.jpg",
      start: "February 2024",
      end: "Now",
      description:
        "Have contributed as a mentor in one of the machine learning class (ML-45) at Bangkit Academy 2024 Batch 1 and with 100% of them have successfully graduated. I am currently contributing as a mentor in one of the machine learning class (ML-70) at Bangkit Academy 2024 Batch 2.",
    },
    {
      company: "PondPedia",
      href: "https://pondpedia.com",
      badges: [],
      location: "Malang, East Java",
      title: "Team Leader",
      logoUrl: "/pondpedia.png",
      start: "Aug 2023",
      end: "Feb 2024",
      description:
        "Part of a team that has been selected as Top 20 product-based capstone team and get a chance to enter The Incubation program held by Bangkit Academy 2023. Currently I have been held as the leader and be responsible for the direction of this team in the future, wore so many 'hats' (Responsibility) at the same time and will continue on to do so.",
    },
    {
      company: "Bangkit Academy",
      href: "https://grow.google/intl/id_id/bangkit/?tab=machine-learning",
      badges: [],
      location: "Remote",
      title: "Machine Learning (Independent Study)",
      logoUrl: "/bangkit.jpg",
      start: "Feb 2023",
      end: "Jul 2023",
      description:
        "Was participating as a machine learning cohort and obtained tremendous amounts of achievement. Co-developed and Co-designed a machine learning model that can forecast certain water quality parameter. Integrated the machine learning model with the backend and deployed it to Google Cloud. I was also act as a Project Manager and Team Leader in the final Capstone Project.",
    },
    {
      company: "Binar Academy",
      href: "https://www.binar.co.id/",
      badges: [],
      location: "Remote",
      title: "Fullstack Web Developer (Independent Study)",
      logoUrl: "/binar.jpg",
      start: "Feb 2022",
      end: "Jul 2022",
      description:
        "Co-developed and designed an e-commerce website, act as a project manager and team leader in the final project. Leveraged Tech-Stack such React, Sequelize, MUI, Express.js, etc to build the aforementioned website.",
    },
  ],
  education: [
    {
      school: "Universitas Sriwijaya",
      href: "https://unsri.ac.id/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/unsri.png",
      start: "2019",
      end: "2024",
    },
    {
      school: "SMKN 1 Prabumulih",
      href: "https://www.smknegeri1prabumulih.sch.id/",
      degree: "Computer and Network Engineering",
      logoUrl: "/smk1.png",
      start: "2016",
      end: "2019",
    },
  ],
  licenses: [
    {
      title: "Bangkit Academy 2024 Batch 1 Mentor",
      href: "https://drive.google.com/file/d/14-GoTyC-StYA_Tj84M_6V4lIY2RoTHPC/view?usp=sharing",
      dates: "Issued: Jul 2024",
      active: true,
      description:
        "",
      technologies: [
        "Mentoring",
        "Google Cloud",
        "Machine Learning",
        "Python",
        "Team Leadership",
        "Mentoring",
        "Project Management",
      ],
      links: [
        {
          type: "Show Credentials",
          href: "https://drive.google.com/file/d/14-GoTyC-StYA_Tj84M_6V4lIY2RoTHPC/view?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/mentoring_2.jpg",
      video: "",
    },
    {
      title: "Bangkit Academy 2024 Batch 2 Mentor",
      href: "https://drive.google.com/file/d/14-GoTyC-StYA_Tj84M_6V4lIY2RoTHPC/view?usp=sharing",
      dates: "Issued: Feb 2025",
      active: true,
      description:
        "",
      technologies: [
        "Mentoring",
        "Google Cloud",
        "Machine Learning",
        "Python",
        "Team Leadership",
        "Mentoring",
        "Project Management",
      ],
      links: [
        {
          type: "Show Credentials",
          href: "https://drive.google.com/file/d/14MwAhHG5Qd3j5CIwkQ-CAka4A-Q7m6EX/view",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/mentoring_3.jpg",
      video: "",
    },
    {
      title: "Bangkit Academy 2023 Batch 1 Incubation",
      href: "https://drive.google.com/file/d/1q8lJvvj_QiJpoil0M7Xqz-nIEFxHs9p1/view",
      dates: "Issued: Feb 2024",
      active: true,
      description:
        "",
      technologies: [
        "Project Management",
        "Team Leadership",
        "Google Cloud",
        "Entrepreneurship",
        "Business Strategy",
        "LLM",
        "PayloadCMS",
        "Docker",
        "Linux",
        "React",
        "Next.js"
      ],
      links: [
        {
          type: "Show Credentials",
          href: "https://drive.google.com/file/d/1q8lJvvj_QiJpoil0M7Xqz-nIEFxHs9p1/view",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/incubation.jpg",
      video: "",
    },
    {
      title: "Bangkit Academy Top 20 Best Capstone Project",
      href: "https://drive.google.com/file/d/1q8lJvvj_QiJpoil0M7Xqz-nIEFxHs9p1/view",
      dates: "Issued: Jul 2023",
      active: true,
      description:
        "",
      technologies: [
        "Machine Learning",
        "Data Analytics",
        "Tensorflow",
        "Python",
        "Project Management",
        "Business Strategy",
        "Team Leadership",
        "Google Cloud"
      ],
      links: [
        {
          type: "Show Credentials",
          href: "https://drive.google.com/file/d/1q8lJvvj_QiJpoil0M7Xqz-nIEFxHs9p1/view",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/top_20.jpg",
      video: ""
    },
    {
      title: "Bangkit Academy Graduate with Distinction",
      href: "https://drive.google.com/file/d/1q8lJvvj_QiJpoil0M7Xqz-nIEFxHs9p1/view",
      dates: "Issued: Jul 2023",
      active: true,
      description:
        "",
      technologies: [
        "Machine Learning",
        "Python",
        "Tensorflow",
        "Project Management",
        "Team Leadership",
        "Google Cloud",
        "Business Strategy",
        "Data Analytics",
      ],
      links: [
        {
          type: "Show Credentials",
          href: "https://drive.google.com/file/d/1q8lJvvj_QiJpoil0M7Xqz-nIEFxHs9p1/view",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/distinction.jpg",
      video: ""
    },
    {
      title: "TensorFlow Developer Certificate",
      href: "https://www.credential.net/e27e4a7f-d20d-49ef-acfb-478308c178a5",
      dates: "Issued: Dec 2023",
      active: true,
      description:
        "",
      technologies: [
        "Machine Learning",
        "Python",
        "Tensorflow",
      ],
      links: [
        {
          type: "Show Credentials",
          href: "https://www.credential.net/e27e4a7f-d20d-49ef-acfb-478308c178a5",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/tensorflow.jpg",
      video: ""
    },
    {
      title: "Google Project Management",
      href: "https://www.coursera.org/account/accomplishments/professional-cert/ATK9CLALDHLX?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
      dates: "Issued: Dec 2024",
      active: true,
      description:
        "",
      technologies: [
        "Project Management",
        "Team Leadership",
        "Planning",
        "Asana",
        "Business Strategy",
        "Collaboration",
      ],
      links: [
        {
          type: "Show Credentials",
          href: "https://www.coursera.org/account/accomplishments/professional-cert/ATK9CLALDHLX?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/google_project_management.jpeg",
      video: ""
    },
    {
      title: "DeepLearning.AI TensorFlow Developer Specialization",
      href: "https://www.coursera.org/account/accomplishments/specialization/5G665CER6GWF",
      dates: "Issued: May 2023",
      active: true,
      description:
        "",
      technologies: [
        "Machine Learning",
        "Data Analytics",
        "Tensorflow",
        "Python",
      ],
      links: [
        {
          type: "Show Credentials",
          href: "https://www.coursera.org/account/accomplishments/specialization/5G665CER6GWF",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/ml_1.jpg",
      video: ""
    },
    {
      title: "TensorFlow: Data and Deployment Specialization",
      href: "https://www.coursera.org/account/accomplishments/specialization/QXABGUZ97T6G",
      dates: "June 2023 - Present",
      active: true,
      description: "",
      technologies: [
        "Machine Learning",
        "Data Analytics",
        "Javascript",
        "Tensorflow",
        "Python",
      ],
      links: [
        {
          type: "Show Credential",
          href: "https://www.coursera.org/account/accomplishments/specialization/QXABGUZ97T6G",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/ml_3.jpg",
      video: "",
    },
    {
      title: " Stanford University: Machine Learning Specialization",
      href: "https://www.coursera.org/account/accomplishments/specialization/U3FEN6ZDWZ5V",
      dates: "Issued: Apr 2023",
      active: true,
      description: "",
      technologies: [
        "Machine Learning",
        "Data Analytics",
        "Python",
      ],
      links: [
        {
          type: "Show Credential",
          href: "https://www.coursera.org/account/accomplishments/specialization/U3FEN6ZDWZ5V",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/ml_2.jpg",
      video: "",
    },
    {
      title: "Fullstack Web Development",
      href: "https://drive.google.com/file/d/1VXriESkqr1ZN7F4D-2dVG0F8Xz96X9MX/view",
      dates: "Issued: Jul 2022",
      active: true,
      description: "",
      technologies: [
        "React",
        "Javascript",
        "Project Management",
        "Team Leadership",
      ],
      links: [
        {
          type: "Show Credential",
          href: "https://drive.google.com/file/d/1VXriESkqr1ZN7F4D-2dVG0F8Xz96X9MX/view",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/binar_1.jpg",
      video: ""
    },
  ],
  projects: [
    {
      title: "PondPedia",
      dates: "",
      href: "https://www.pondpedia.com/",
      active: true,
      description:
        "Born from a shared vision between MoECRT, Google, and the prestigious Kampus Merdeka program called Bangkit Academy to solve Indonesia's development challenges through technology. PondPedia emerges as an aquaculture technology company driven by a noble commitment to improve the sustainability of the aquaculture industry through technology.",
      technologies: [
        "React",
        "Next.js",
        "Typescript",
        "PayloadCMS",
        "PostgreSQL",
        "TailwindCSS",
        "LLM",
        "Docker",
      ],
      links: [
        {
          type: "Link",
          href: "https://www.pondpedia.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/pondpedia_site.png",
      video: "",
    },
    {
      title: "Reluctant Slave",
      dates: "",
      href: "https://www.reluctantslave.com/",
      active: true,
      description:
        "This is where I post Islamic contents, because I like to write things, especially about my religion.",
      technologies: [
        "React",
        "Next.js",
        "Typescript",
        "PayloadCMS",
        "PostgreSQL",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Link",
          href: "https://www.reluctantslave.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/reluctantslave_site.png",
      video: "",
    },
  ],
  miscs: [
    {
      title: "Moderator for Bangkit Guest Speaker Session #3",
      href: "https://www.youtube.com/watch?v=rkldn8CKZcM",
      dates: "Issued: October 2024",
      active: true,
      description:
        'Have contributed as a moderator in The Bangkit Guest Speaker Session #3 "Startup Secrets: How to Scale from Zero to Hero".',
      links: [
        {
          type: "Show Credentials",
          href: "https://www.youtube.com/watch?v=rkldn8CKZcM",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/gss_2.jpg",
      video: "",
    },
    {
      title: "Special Award from The Dean of The Unsri's Faculty of Computer Science",
      href: "https://www.youtube.com/live/e772iWAtczU?si=vdL94eQbjUD22uRy&t=4822",
      dates: "Issued: Aug 2024",
      active: true,
      description:
        "Received a special award from The Dean of The Unsri's Faculty of Computer Science for my achievement in creating a Google-incubated startup called PondPedia.",
      links: [
        {
          type: "Show Credentials",
          href: "https://www.youtube.com/live/e772iWAtczU?si=vdL94eQbjUD22uRy&t=4822",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/dean.png",
      video: "",
    },
    {
      title: "Moderator for Bangkit Guest Speaker Session #7",
      href: "https://www.youtube.com/watch?v=aPovq2N2sSU",
      dates: "Issued: May 2024",
      active: true,
      description:
        'Have contributed as a moderator in The Bangkit Guest Speaker Session #7 "Implementing Technology for Business Transformation".',
      links: [
        {
          type: "Show Credentials",
          href: "https://drive.google.com/file/d/14-GoTyC-StYA_Tj84M_6V4lIY2RoTHPC/view?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/gss.jpg",
      video: ""
    },
    {
      title: "Mentoring a Machine Learning Class with 100% Graduation Rate",
      href: "https://drive.google.com/file/d/14-GoTyC-StYA_Tj84M_6V4lIY2RoTHPC/view",
      dates: "Issued: Jul 2024",
      active: true,
      description:
        "Have contributed as a mentor in one of the machine learning class at Bangkit Academy 2024 Batch 1 with 100% of them have successfully graduated.",
      links: [
        {
          type: "Show Credentials",
          href: "https://drive.google.com/file/d/14-GoTyC-StYA_Tj84M_6V4lIY2RoTHPC/view",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/mentoring.jpg",
      video: ""
    },
    {
      title: "Bangkit Academy Graduate with Distinction",
      href: "https://drive.google.com/file/d/1q8lJvvj_QiJpoil0M7Xqz-nIEFxHs9p1/view",
      dates: "Issued: Jul 2023",
      active: true,
      description:
        "Graduated with distinction (10%) from Bangkit 2023, a prestigious program led by Google in collaboration with GoTo and Traveloka, in the Machine Learning learning path.",
      links: [
        {
          type: "Show Credentials",
          href: "https://drive.google.com/file/d/1q8lJvvj_QiJpoil0M7Xqz-nIEFxHs9p1/view",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/distinction.jpg",
      video: ""
    },
    {
      title: "Bangkit Academy Top 20 Best Capstone Project",
      href: "https://drive.google.com/file/d/1q8lJvvj_QiJpoil0M7Xqz-nIEFxHs9p1/view",
      dates: "Issued: Jul 2023",
      active: true,
      description:
        "Our capstone team was recognized as one of the top 20 product-based projects out of 787, which earned us the opportunity to enter the highly prestigious Bangkit Academy Batch 1 Incubation Program.",
      links: [
        {
          type: "Show Credentials",
          href: "https://drive.google.com/file/d/1q8lJvvj_QiJpoil0M7Xqz-nIEFxHs9p1/view",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/top_20.jpg",
      video: ""
    },
    {
      title: "Participating in Bangkit Academy 2023 Batch 1 Incubation Program",
      href: "https://drive.google.com/file/d/1q8lJvvj_QiJpoil0M7Xqz-nIEFxHs9p1/view",
      dates: "Issued: Jul 2023",
      active: true,
      description:
        "Successfully participating in Bangkit 2023 Batch 1 Incubation Program, where we build a still-in-idea-phase Google-incubated startup called PondPedia.",
      links: [
        {
          type: "Show Credentials",
          href: "https://drive.google.com/file/d/1q8lJvvj_QiJpoil0M7Xqz-nIEFxHs9p1/view",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/incubation.jpg",
      video: ""
    },
  ]
} as const;
