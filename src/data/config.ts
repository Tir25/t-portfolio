const config = {
  title: "genZcoder | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Naresh, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Naresh, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Naresh",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Tirth Raval",
  email: "tirthraval27@gmail.com",
  site: "https://nareshkhatri.site",

  // for github stars button
  githubUsername: "Tir25",
  githubRepo: "PortfolioWebsite",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/tirth-raval-bbbba3210/",
    instagram: "https://www.instagram.com/tirthraval27/?next=%2F",
    facebook: "https://www.facebook.com/profile.php?id=61584192766446",
    github: "https://github.com/Tir25",
    email: "mailto:tirthraval27@gmail.com",
  },
};
export { config };
