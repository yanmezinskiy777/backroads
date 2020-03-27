import React from "react";
import classes from "../../css/blog-card.module.css";
import Img from "gatsby-image";
import Anilink from "gatsby-plugin-transition-link/AniLink";

const BlogCard = ({ blog }) => {
  const { slug, title, image, published } = blog;
  return (
    <article className={classes.blog}>
      <div className={classes.imgContainer}>
        <Img fluid={image.fluid} className={classes.img} alt="single post" />
      </div>
      <Anilink fade className={classes.link} to={`/blog/${slug}`}>
        read more
      </Anilink>
      <h6 className={classes.date}>{published}</h6>
      <div className={classes.footer}>
        <h4>{title}</h4>
      </div>
    </article>
  );
};

export default BlogCard;
