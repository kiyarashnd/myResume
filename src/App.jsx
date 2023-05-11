import Header from "./Header";
import Body from "./Body";
import Project from "./Project";

function App() {
  // this place of destructuring is important :
  // const { company, dates, duties, title } = jobs[value];

  return (
    <section className="section">
      <Header />
      <Body />
      <Project />
    </section>
  );
}

export default App;
// Inspired by https://gatsby-strapi-portfolio-project.netlify.app/
