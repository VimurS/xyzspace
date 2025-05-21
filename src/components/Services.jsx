import { useState } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

function Services() {
  useScrollReveal();

  const services = [
    {
      // icon: "/src/assets/social-media.png",
      title: "Branding",
      desc: "We craft visual identities and compelling brand stories.",
      details: [
        "Logo Design",
        "Brand Guidelines",
        "Storytelling",
        "Corporate Identity",
      ],
    },
    {
      // icon: "/src/assets/network.png",
      title: "Digital Marketing",
      desc: "Boost your reach with modern marketing strategies.",
      details: [
        "SEO Optimization",
        "Social Media Campaigns",
        "Google Ads",
        "Email Marketing",
      ],
    },
    {
      // icon: "/src/assets/network.png",
      title: "Web Development",
      desc: "We build fast, secure, and scalable websites.",
      details: [
        "Responsive Design",
        "Frontend Development",
        "Backend Integration",
        "CMS Setup",
      ],
    },
    {
      // icon: "/src/assets/product-design.png",
      title: "Product Development",
      desc: "Reliable and secure hosting tailored for you.",
      details: [
        "Cloud Hosting",
        "Domain Setup",
        "SSL & Security",
        "Maintenance",
      ],
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="services" id="services">
      <h3 className="section-title">Services</h3>
      <div className="service-list">
        {services.map((service, index) => (
          <div className="service-card reveal" key={index}>
            {/* <img src={service.icon} alt={service.title} className="service-icon" /> */}
            <h4 className="ServiceTitle">{service.title}</h4>
            <p>{service.desc}</p>
            <button className="accordion-toggle" onClick={() => toggleAccordion(index)}>
              {openIndex === index ? "Hide Details" : "Check Services"}
            </button>
            <ul className={`accordion-content ${openIndex === index ? "open" : ""}`}>
              {service.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
