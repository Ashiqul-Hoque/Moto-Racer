import React from "react";
import "./Blogs.css";

const blogs = () => {
  return (
    <div>
      <div>
        <h4>What is "Context API" ?</h4>
        <p>
          React context is an essential tool for every React developer.React
          context allows us to pass down and use (consume) data in whatever
          component we need in our React app without using props. In other
          words, React context allows us to share data (state) across our
          components more easily. These types of data include: Theme data (like
          dark or light mode) User data (the currently authenticated user)
          Location-specific data (like user language or locale) Props drilling
          is a term to describe when you pass props down multiple levels to a
          nested component, through components that don't need it. The issue is
          that we are drilling the theme prop through multiple components that
          don't immediately need it.This is the benefit of React context – we
          can bypass using props entirely and therefore avoid the issue of props
          drilling.
        </p>
      </div>
      <div>
        <h4>What is "Semantic Tag" ?</h4>
        <p>
          Semantic HTML5 addresses this shortcoming by defining specific tags to
          indicate clearly what role is played by the content those tags
          contain. That explicit information helps robots/crawlers like Google
          and Bing to better understand which content is important, which is a
          subsidiary, which is for navigation, and so on. By adding semantic
          HTML tags to your pages, you provide additional information that helps
          Google and Bing understand the roles and relative importance of the
          different parts of your page. Google's and Bing’s bots (spiders) are,
          if not blind, seriously sight-impaired. For them, the visual clues are
          phenomenally difficult to see and understand — they need your help. If
          you can successfully communicate to Google and Bing which part of the
          page is the header, which is the footer, and which is for navigation,
          they will thank you. Most importantly, by telling them which is the
          most important content, you give them an explicit instruction to
          prioritize that content. For users who are blind or visually impaired
          and rely on screen readers to verbally describe what is on a page,
          proper use of HTML5 semantic elements will allow screen readers to
          more accurately communicate your content by making the visual audible.
          It is vital to embrace this newer version of HTML so you can make your
          content accessible to all possible site visitors.
        </p>
      </div>
    </div>
  );
};

export default blogs;
