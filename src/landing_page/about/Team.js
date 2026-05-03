import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/aaman.jpeg" alt="image of aaman"
            style={{ borderRadius: "110%", width: "50%" }}
          />
          <h4 className="mt-5">Aaman Khan</h4>
          <h6>Full Stack Developer</h6>
        </div>
        <div className="col-6 p-3">
     <p>
  Aaman Khan is the developer of TRADENOVA, a project created to understand 
  and implement the core functionalities of modern stock trading platforms.
</p>

<p>
  He built this application using the MERN stack, focusing on secure authentication, 
  backend architecture, and a responsive user interface.
</p>

<p>
  This project highlights his practical knowledge of full-stack development 
  and his ability to build real-world web applications.
</p>
         
          <p>
            Connect on <a href="/Homepage">Homepage</a> / <a href="/TradingQnA">TradingQnA</a> /{" "}
            <a href="https://www.linkedin.com/in/aaman-khan-796204264/">Linkedin</a>
          </p>
        </div>

        <div className="col-6 p-3 text-center">
          <img
            src="media/images/anmol.png" alt="anmol"
            style={{ borderRadius: "110%", width: "50%" }}
          />
          <h4 className="mt-5">Anmol Mishra</h4>
          <h6>Full Stack Developer </h6>
        </div>
        <div className="col-6 p-3">
        
          <p>
  Anmol Mishra contributed to the development of TRADENOVA, focusing on 
  building and improving core features of the platform.
</p>

<p>
  He specializes in the MERN stack and Java, with an interest in developing 
  scalable web applications and efficient backend systems.
</p>

<p>
  This project reflects his practical experience in full-stack development 
  and collaborative teamwork.
</p>
          <p>
            Connect on <a href="/Homepage">Homepage</a> / <a href="/Trading">TradingQnA</a> /{" "}
            <a href="https://www.linkedin.com/in/anmol-mishra-dev">Linkedin</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;