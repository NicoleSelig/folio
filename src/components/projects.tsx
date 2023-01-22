import React from "react";
import SectionLabel from "./sectionLabel";
import HYSImage from '../../public/assets/projects/help-your-selves.png'
import PortalImage from '../../public/assets/projects/portal-scene.png'
import RedPandaImage from '../../public/assets/projects/red-panda.png'
import Project from "./project";

export default function Projects() {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <SectionLabel label="Projects" header="Things I've Built" />
        <div className="grid md:grid-cols-2 gap-8">
            <Project name="Red Panda Scouting Companion" tech="-Next.js -Javascript -Azure CosmosDB -Azure Web Apps -Terraform -GitHub Actions" image={RedPandaImage} externalLink="https://testlolscoutwa01@azurewebsites.net" githubLink="https://github.com/LOLRedPanda/app-core" />
            <Project name="The Pink Portal" tech="-THREE.js -React THREE Fiber" image={PortalImage} externalLink="https://threejs-journey-two.vercel.app/" githubLink="https://github.com/NicoleSelig/threejs-journey/tree/master/26%20-%20portal%20scene%20react%20three%20fiber" />
            <Project name="Help Your Selves Puzzle Game" tech="-Unity -C#" image={HYSImage} externalLink="https://wwwsepcom.itch.io/help-your-selves" githubLink="https://github.com/NicoleSelig/help-your-selves" />
        </div>
      </div>
    </div>
  );
}
