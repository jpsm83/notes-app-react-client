import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="flex wrap w-full justify-evenly items-center bg-gray-200">
      <div className="footTag sm:text-md">
        <h4 className="font-bold mb-4">About</h4>
        <ul>
          <li>
            <Link className="anchorLink" href="">
              Looks simple
            </Link>
          </li>
          <li>
            <Link className="anchorLink" href="">
              But got me
            </Link>
          </li>
          <li>
            <Link className="anchorLink" href="">
              A lot time
            </Link>
          </li>
          <li>
            <Link className="anchorLink" href="">
              To get here
            </Link>
          </li>
        </ul>
      </div>
      <div className="footTag sm:text-md">
        <h4 className="font-bold mb-4">Comunity</h4>
        <ul>
          <li>
            <Link className="anchorLink" href="">
              It is not perfect
            </Link>
          </li>
          <li>
            <Link className="anchorLink" href="">
              It is far from amazing
            </Link>
          </li>
          <li>
            <Link className="anchorLink" href="">
              But I am pretty
            </Link>
          </li>
          <li>
            <Link className="anchorLink" href="">
              Happy with my results
            </Link>
          </li>
        </ul>
      </div>
      <div className="footTag sm:text-md">
        <h4 className="font-bold mb-4">Food</h4>
        <ul>
          <li>
            <Link className="anchorLink" href="">
              I worked very
            </Link>
          </li>
          <li>
            <Link className="anchorLink" href="">
              Hard to get here
            </Link>
          </li>
          <li>
            <Link className="anchorLink" href="">
              Every step was
            </Link>
          </li>
          <li>
            <Link className="anchorLink" href="">
              Huge personal achivement
            </Link>
          </li>
        </ul>
      </div>
      <div className="footTag sm:text-md">
        <h4 className="font-bold mb-4">Support</h4>
        <ul>
          <li>
            <Link className="anchorLink" href="">
              I hope you
            </Link>
          </li>
          <li>
            <Link className="anchorLink" href="">
              Will appreciate
            </Link>
          </li>
          <li>
            <Link className="anchorLink" href="">
              My work
            </Link>
          </li>
          <li>
            <Link className="anchorLink" href="">
              {"Thanks :)"}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
