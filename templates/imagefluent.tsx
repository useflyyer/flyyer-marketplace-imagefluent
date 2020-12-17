import React from "react"
import { TemplateProps } from "@flayyer/flayyer-types";
import classNames from "classnames";

import "../styles/tailwind.css";

import background from "../static/the_guy.png";
import logo from "../static/logo.svg";

function Layer({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  return <div {...props} className={classNames("absolute inset-0", className)} />;
}

const Logo = ({ className, ...props }: React.ComponentPropsWithoutRef<"img">) => (
  <img src={logo} className={classNames("filter-white" /* custom */, "w-20 h-20", "object-contain", className)} {...props} />
);

function overFlowStyle(lines = 1): Record<string, string>{
  return {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: lines.toString(),
    WebkitBoxOrient: 'vertical',
  };
}

// Make sure to 'export default' a React component
export default function MainTemplate({ agent, variables }: TemplateProps) {
  const {
    title = "Accepting volunteers",
    image = background,
    description = 'Digital Leaders',
    description2 = "Apply today",
    brand = "someBrand",
    logo = null,
  } = variables;

  if (agent.name === "whatsapp") {

    return (
      <>
        <Layer className="flex flex-row flex-grow-0 flex-none text-white" style={{ backgroundColor: "#580A12" }}>
          <div className="flex flex-col flex-1 px-10 pt-16 justify-center">
            <h1 className="text-7xl font-extrabold pt-5 text-yellow-100 leading-tight" style={overFlowStyle(1)}>
              {description2}
            </h1 >
            <div className="flex-1 flex flex-row justify-center">
              <Logo className="w-64 h-64" />
            </div>
          </div>
        </Layer>
      </>
    )
  }

  return (
    <>
      <Layer className="flex flex-col items-stretch bg-white justify-stretch justify-items-stretch pt-6">
        <div className="flex flex-row flex-grow-1 flex-1 text-white" style={{ backgroundColor: "#580A12" }}>
          <div className="flex flex-col flex-1 justify-around py-16 pl-16" style={{ flexGrow: 3 }} >
            <h2 className="text-4xl font-extrabold tracking-tighter" style={overFlowStyle(1)}>
              {title}
            </h2>
            <div>
              <h1 className="text-6xl font-extrabold leading-tight tracking-tighter" style={overFlowStyle(2)}>
                {description}
              </h1>
              <h1 className="text-6xl font-extrabold text-yellow-100 leading-snug tracking-tighter" style={overFlowStyle(1)}>
                {description2}
              </h1 >
            </div>
            <div className="flex flex-row justify-start items-center w-full">
              {
                logo === null
                  ?
                  <Logo className="w-24 h-24" />
                  :
                  <img src={logo} className="object-contain" />
              }
              <h2 className="flex-1 text-5xl font-extrabold italic" style={overFlowStyle(1)}>{brand}</h2>
            </div>
          </div>
          <div className="flex flex-col justify-stretch items-stretch flex-1" style={{ flexGrow: 2 }}>
            <img className="object-cover flex-1 flex-grow-1" src={decodeURIComponent(image)} />
          </div>
        </div>
      </Layer>
      <Layer className="flex flex-row pt-10 flex-grow-1 flex-none">
        <div className="flex flex-row flex-1 justify-end items-end pl-16" style={{ flexGrow: 3 }}>
          
        </div>
        <div className="flex flex-col flex-1 justify-end items-start" style={{ flexGrow: 2 }}>
          <svg
            width="100"
            height="100">
            <path
              style={{ fill: "#FDF2F8", strokeWidth: 0 }}
              d="M 0,0 A 100,100 0 0 1 100,100 H 0 Z" />
          </svg>
          <svg
            width="100"
            height="100">
            <path
              style={{ fill: "#fff6d5", strokeWidth: 0 }}
              d="M 100,0 A 100,100 0 0 1 0,100 V 0 Z" />
          </svg>

        </div>
      </Layer>
    </>
  );
}
