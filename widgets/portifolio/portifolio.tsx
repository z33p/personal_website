import githubResposReturn from "../../lib/data/github_repos_return.json";
import React from "react";
import Section from "../section";
import CardRepository from "./card_repository";

export default function Portfolio() {
  return (
    <Section id="portfolio" title="Portfólio" applyDivider>
      <div className="row">
        {githubResposReturn.data.user.pinnedItems.edges.map((edge, index) => {
          const { node: repository } = edge;

          const languagens = repository.languages.nodes.map((language) => ({
            name: language.name,
            color: language.color,
          }));

          return (
            <CardRepository
              key={index}
              name={repository.name}
              description={repository.description}
              languages={languagens}
              url={repository.url}
              className={`col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2 py-2`}
            />
          );
        })}
      </div>
      <div className="d-flex justify-content-end p-3">
        <a
          className="d-inline-block"
          href="https://github.com/z33p"
          target="_blank"
          rel="noreferrer"
        >
          Ver mais
        </a>
      </div>
    </Section>
  );
}