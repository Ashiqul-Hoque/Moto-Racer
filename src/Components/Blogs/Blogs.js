import React from "react";
import "./Blogs.css";

const blogs = () => {
  return (
    <div className="container my-5 px-4">
      <div>
        <h4 className="text-primary">What is "Context API" ?</h4>
        <p>
          React context is an essential tool for React developers. React context
          allows us to pass down the data or allow us to share data in whatever
          component we need in our React app without using props.
          <br />
          These types of data include:
          <br />
          <li> Theme data (like dark or light mode)</li>
          <li> User data (the currently authenticated user) </li>
          <li>Location-specific data (like user language or locale)</li>
          <br />
          In the case of props drilling we pass props down multiple levels to a
          nested component, through components that don't need it. The problem
          is we are drilling the prop through multiple components that don't
          need it. This is the benefit of React context that can bypass using
          props entirely and avoid the issue of props drilling.
        </p>
      </div>
      <div className="mt-5">
        <h4 className="text-primary">What is "Semantic Tag" ?</h4>
        <p>
          Semantic tags are the HTML5 tags which indicate what role is played by
          the content those tags contain. This information helps Google and Bing
          to better understand which content is important, which is a
          subsidiary, which is for navigation, and so on. By adding semantic
          HTML tags to our pages, we provide additional information that helps
          Google and Bing understand the roles and relative importance of the
          different parts of our page. Most importantly, by telling them which
          is the most important content, we give them an explicit instruction to
          prioritize that content.
          <br />
          For users who are blind, on screen readers to verbally describe what
          is on a page. It is vital to this newer version of HTML so we can make
          our content accessible to all possible site visitors.
        </p>
      </div>
    </div>
  );
};

export default blogs;
