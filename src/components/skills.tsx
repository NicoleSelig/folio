import React from "react";
import {
  SiTypescript,
  SiMicrosoftazure,
  SiAzurepipelines,
  SiGithubactions,
  SiTerraform,
  SiTailwindcss,
  SiPython,
  SiNextdotjs,
} from "react-icons/si";
import SectionLabel from "./sectionLabel";
import Skill from "./skill";

export default function Skills() {
  return (
    <div id="skills" className="w-full md:h-screen p-2 flex">
      <div className="max-w-[1240px] mx-auto flex-col justify-center h-full">
        <SectionLabel label="Skills" header="What I Can Do"/>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Skill
            label="Typescript"
            logo={<SiTypescript color="#ED009C" size={64} />}
          />
          <Skill
            label="Microsoft Azure"
            logo={<SiMicrosoftazure color="#ED009C" size={64} />}
          />
          <Skill
            label="Azure Pipelines"
            logo={<SiAzurepipelines color="#ED009C" size={64} />}
          />
          <Skill
            label="Next.js"
            logo={<SiNextdotjs color="#ED009C" size={64} />}
          />
          <Skill
            label="Github Actions"
            logo={<SiGithubactions color="#ED009C" size={64} />}
          />
          <Skill
            label="Terraform"
            logo={<SiTerraform color="#ED009C" size={64} />}
          />
          <Skill label="Python" logo={<SiPython color="#ED009C" size={64} />} />
          <Skill
            label="Tailwind CSS"
            logo={<SiTailwindcss color="#ED009C" size={64} />}
          />
        </div>
      </div>
    </div>
  );
}
