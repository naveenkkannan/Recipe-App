import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black  text-white  py-0.5">
      <div>
        <div className="flex justify-center items-center">
          Made by Naveen Kannan &nbsp;
          <a
            className="hover:bg-red-900 rounded-full"
            href="https://github.com/naveenkkannan/Recipe-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />{" "}
          </a>
        </div>
      </div>
    </footer>
  );
}
