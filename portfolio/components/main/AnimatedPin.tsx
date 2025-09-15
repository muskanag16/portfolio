"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";
import Img from 'next/image'

interface PropsType {
    href : string ,
    title : string , 
    desc : string , 
    src : string ,
}

export function AnimatedPinDemo(props : PropsType) {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center">
      <PinContainer
        title="Source Code"
        href={props.href}
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] hover:shadow-blue-500/[0.25] hover:shadow-xl">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {props.title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              {props.desc}
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4">
            <Img
            src={props.src}
            width={"800"}
            height={"800"}
            alt="Image"
            className="rounded-lg hover:shadow-blue-500/[0.25] hover:shadow-xl"
            />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
