import blogPlatforms from "./blog-platforms";
import designs from "./designs";
import socialMedia from "./social-media";

const groups = [
  {
    title: "Blog Platforms",
    group: blogPlatforms,
    align: "md:text-left"
  },
  {
    title: "Social Media",
    group: socialMedia,
    align: "md:text-center"
  },
  {
    title: "Designs",
    group: designs,
    align: "md:text-right"
  }
];

export default groups;
