import blogPlatforms from "./blog-platforms";
import designs from "./designs";
import socialMedia from "./social-media";

const groups = [
  {
    title: "Blog Platforms",
    group: blogPlatforms,
    align: "sm:text-left"
  },
  {
    title: "Social Media",
    group: socialMedia,
    align: "sm:text-center"
  },
  {
    title: "Designs",
    group: designs,
    align: "sm:text-right"
  }
];

export default groups;
