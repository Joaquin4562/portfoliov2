import React from "react";
import { Appbar } from "../components/Appbar";
import { AcercaDeMi } from "./AcercaDeMi";
import { Inicio } from "./Inicio";
import { Projects } from "./Projects";
import { Contact } from './Contact';

export const Main = () => {
    return (
        <div className="">
            <Appbar />
            <Inicio />
            <AcercaDeMi />
            <Projects />
            <Contact />
        </div>
    );
};
