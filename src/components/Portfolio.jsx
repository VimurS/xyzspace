import useScrollReveal from "../hooks/useScrollReveal";

function Portfolio() {

    useScrollReveal();
    
  const projects = [1, 2, 3]; // Simulating project data

  return (
    <section className="portfolio " id="portfolio">
      <h3 className="work-section">Work</h3>
      <div className="project-list">
        {projects.map((id) => (
          <div className="project" key={id}>
            <img src={`https://via.placeholder.com/600x400?text=Project+${id}`} alt={`Project ${id}`} />
            <div>
              <h5>Project {id}</h5>
              <p>A short description of the project.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
