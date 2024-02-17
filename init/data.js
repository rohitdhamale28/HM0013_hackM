const sampleCourses = [
  {
    title: "Web Development Bootcamp",
    description:
      "Learn web development from scratch and build modern websites and web applications.",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 999,
    domain: "Web Development",
  },
  {
    title: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
    description:
      "Learn to create Machine Learning Algorithms in Python and R from two Data Science experts.",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY2hpbmUlMjBsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1599,
    domain: "Data Science",
  },
  {
    title: "The Complete Digital Marketing Course - 12 Courses in 1",
    description:
      "Master Digital Marketing Strategy, Social Media Marketing, SEO, YouTube, Email, Facebook Marketing, Analytics & More!",
    image: "https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 2499,
    domain: "Digital Marketing",
  },
  {
    title: "Photography Masterclass: A Complete Guide to Photography",
    description:
      "Master photography techniques to take stunning photos and build a photography career.",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 799,
    domain: "Photography",
  },
  {
    title: "Learn Spanish: Complete Spanish Language Course",
    description:
      "Master Spanish language skills from beginner to advanced level.",
    image: "https://images.unsplash.com/photo-1579516932430-5131852e91f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNwYW5pc2glMjBhbmQlMjBjbGVhciUyMGltYWdlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    price: 799,
    domain: "Language Learning",
  },
  {
    title: "JavaScript: Understanding the Weird Parts",
    description:
      "An advanced JavaScript course for everyone! Scope, closures, prototypes, this, and more.",
    image: "https://images.unsplash.com/photo-1587378345775-dc5e1d7c8a29?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8amF2YXNjcmlwdCUyMHdoZWVsJTIwcG9ydHN8ZW58MHx8MHx8&ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 799,
    domain: "Web Development",
  },
  {
    title: "Python for Data Science and Machine Learning Bootcamp",
    description:
      "Learn Python for data science, machine learning, and data visualization!",
    image: "https://images.unsplash.com/photo-1556228726-915ade3af1ad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHB5dGhvbiUyMGZvciUyMGRhdGElMjBzY2llbmNlJTIwbWFjaGluZXx8ZW58MHx8MHx8&ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 999,
    domain: "Data Science",
  },
  {
    title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    description:
      "Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!",
    image: "https://images.unsplash.com/photo-1526925539331-5343ad697c25?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhY3QlMjBpbWFnZXMlMjB1cGxvYWQlMjB3b3JrZmxvdyUyMGRhdGElMjBoaWdoJTIwZnJvbSUyMGhvb2tzfGVufDB8fDB8fA%3D%3D&ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 999,
    domain: "Web Development",
  },
  {
    title: "Angular - The Complete Guide (2021 Edition)",
    description:
      "Master Angular 12 (formerly 'Angular 2') and build awesome, reactive web apps with the successor of Angular.js",
    image: "https://images.unsplash.com/photo-1594900788305-8ec8e49652f2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGFuZ3VsYXIlMjBoaWdoZXN8ZW58MHx8MHx8&ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 999,
    domain: "Web Development",
  },
  {
    title: "iOS 14 & Swift 5 - The Complete iOS App Development Bootcamp",
    description:
      "From beginner to iOS app developer with just one course. Xcode 12 & Swift 5.",
    image: "https://images.unsplash.com/photo-1604577594829-3d8e0b982b11?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGJhY2tncm91bmQlMjBhcHAlMjBkZXZlbG9wZWQlMjBpb3MlMjBhcHAlMjBkZXZlbG9wZXN8ZW58MHx8MHx8&ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1499,
    domain: "Mobile Development",
  },
  {
    title: "Android App Development Masterclass using Kotlin",
    description:
      "Learn Kotlin Android App Development And Become an Android Developer. Incl. Kotlin Tutorial and Android Tutorial Videos.",
    image: "https://images.unsplash.com/photo-1584015543817-21055936eb06?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFuZHJvaWQlMjBhcHBzJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 999,
    domain: "Mobile Development",
  },
  {
    title: "Ethical Hacking & Cyber Security Course : A Complete Package",
    description:
      "Learn ethical hacking, Kali Linux, Cyber security, System Hacking, Penetration Testing Online.",
    image: "https://images.unsplash.com/photo-1587581679453-1b2abf17c06f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGFja2luZyUyMGN5YmVyJTIwc2VjdXJpdHklMjBwYWNrYWdlfGVufDB8fDB8fA%3D%3D&ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1499,
    domain: "Cyber Security",
  },
  {
    title: "AWS Certified Solutions Architect - Associate 2020",
    description:
      "Want to pass the AWS Solutions Architect - Associate Exam? Want to become Amazon Web Services Certified? Do this course!",
    image: "https://images.unsplash.com/photo-1565299621405-e9662b8a5d86?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXdzJTIwY2Vzc2lvbiUyMHNvbHV0aW9ucyUyMGFyZ2VudGluZyUyMGltYWdlc3xlbnwwfHwwfHw%3D&ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1499,
    domain: "Cloud Computing",
  },
  {
    title: "The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert",
    description:
      "Become an In-demand SQL Master by creating complex databases and building reports through real-world projects",
    image: "https://images.unsplash.com/photo-1529675777820-3b12a724530c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG15c3FsJTIwbWVzc2FnZXN8ZW58MHx8MHx8&ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 799,
    domain: "Database Management",
  },
  {
    title: "Complete Guitar System - Beginner to Advanced",
    description:
      "Learn all the guitar basics and a complete beginner's system for learning to play guitar that sounds great right away.",
    image: "https://images.unsplash.com/photo-1579308906844-1bbdeeb95c6a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGd1aXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 599,
    domain: "Music",
  },
  {
    title: "The Complete Financial Analyst Course 2021",
    description:
      "Excel, Accounting, Financial Statement Analysis, Business Analysis, Financial Math, PowerPoint: Everything is Included!",
    image: "https://images.unsplash.com/photo-1554080353-3fb2cc4f2216?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmluYW5jaWFsJTIwYW5hbHlzdHJhY3Rpb258ZW58MHx8MHx8&ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 999,
    domain: "Finance",
  },
  {
    title: "Entire MBA in 1 Course: Award Winning Business School Prof",
    description:
      "Everything You Need to Know About Business from Start-up to IPO by Ivy League MBA Grad, former Goldman employee & VC",
    image: "https://images.unsplash.com/photo-1556740736-c5c6be2e7104?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWJhfGVufDB8fDB8fA%3D%3D&ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1999,
    domain: "Business",
  },
  {
    title: "Complete Blender Creator: Learn 3D Modelling for Beginners",
    description:
      "Use Blender to create beautiful 3D models for video games, 3D printing, house design etc. No prior knowledge required.",
    image: "https://images.unsplash.com/photo-1610964941467-68b1b2d886e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxlbmRlcitkZWdyZWV8ZW58MHx8MHx8&ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 799,
    domain: "3D Modelling",
  },
  {
    title: "Learn Ethical Hacking From Scratch",
    description:
      "Become an ethical hacker that can hack computer systems like black hat hackers and secure them like security experts.",
    image: "https://images.unsplash.com/photo-1588695280141-8c91de110024?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFja2luZyUyMGV0aGljYWwlMjBoYWNraW5nJTIwaW1hZ2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 999,
    domain: "Cyber Security",
  },
  {
    title: "Photography Masterclass: A Complete Guide to Photography",
    description:
      "Master photography techniques to take stunning photos and build a photography career.",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 799,
    domain: "Photography",
  },
  {
    title: "Complete C# Unity Game Developer 2D",
    description:
      "Learn Unity in C# & Code Your First Seven 2D Video Games for Web, Mac & PC. The Tutorials Cover Tilemap (35 hours)",
    image: "https://images.unsplash.com/photo-1502209522997-3355f1c41c30?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVuaXRlZCUyMGltYWdlc3xlbnwwfHwwfHw%3D&ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 799,
    domain: "Game Development",
  },
  {
    title: "The Data Science Course 2021: Complete Data Science Bootcamp",
    description:
      "Complete Data Science Training: Mathematics, Statistics, Python, Advanced Statistics in Python, Machine & Deep Learning",
    image: "https://images.unsplash.com/photo-1598887347324-d9493c7966a8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRhdGFzY2llbmNlJTIwcHJvZHVjdGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1499,
    domain: "Data Science",
  },
  {
    title: "The Complete SQL Bootcamp 2021: Go from Zero to Hero",
    description:
      "Become an expert at SQL! In this course you will learn from scratch.",
    image: "https://images.unsplash.com/photo-1559931333-e2b2bfc8a16f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHNxbCUyMGRhdGF8ZW58MHx8MHx8&ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 799,
    domain: "Database Management",
  },
  {
    title: "Java Programming Masterclass for Software Developers",
    description:
      "Learn Java In This Course And Become a Computer Programmer. Obtain valuable Core Java Skills And Java Certification",
    image: "https://images.unsplash.com/photo-1510915228340-29b3b5a748f7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGphdmElMjBpbWFnZXN8ZW58MHx8MHx8&ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 999,
    domain: "Software Development",
  },
  {
    title: "The Ultimate Drawing Course - Beginner to Advanced",
    description:
      "Learn the #1 most important building block of all art.",
    image: "https://images.unsplash.com/photo-1534237710435-05a5d8fa0280?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRyYXdpbmcrc291dGglMjBpbWFnZXN8ZW58MHx8MHx8&ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 599,
    domain: "Art",
  },
  {
    title: "The Complete Digital Marketing Course - 12 Courses in 1",
    description:
      "Master Digital Marketing Strategy, Social Media Marketing, SEO, YouTube, Email, Facebook Marketing, Analytics & More!",
      image: "https://images.unsplash.com/photo-1559931333-e2b2bfc8a16f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHNxbCUyMGRhdGF8ZW58MHx8MHx8&ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      price: 799,
      domain: "Database Management",
    }

  ];
  module.exports = { data: sampleCourses };