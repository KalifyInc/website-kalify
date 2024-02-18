import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Conheça a equipe</h2>
          <p>
            Por trás de toda solução e inovação existe uma equipe por trás, essa é a Kalify Inc.
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                <a href={d.link} target="_blank" rel="noreferrer">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
