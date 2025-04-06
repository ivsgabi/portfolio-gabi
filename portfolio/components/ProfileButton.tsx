import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProfileVideo from "./ProfileVideoComponent";

export function ProfileButton() {
  return (
    <div className="relative flex items-center justify-center h-screen">      
      <Link href="/loading">
        <Button 
          asChild
          className="h-120 more-transparent-white rounded-2xl transparent-white transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-xl"
        >
          <div className="justify-center items-center w-83 flex flex-col">
            <ProfileVideo />
            <div className="mb-12 text-center">
              <h1 className="text-center text-white font-bold ">
                <span className="block text-2xl mb-1">Johana GABA</span>
              </h1>
              <p>
                <span className="block text-[13px] font-medium">Full-Stack Developer</span>
                <span className="block text-[13px] font-medium">& Data Enthusiast</span>
              </p>
            </div>
          </div>
        </Button>
      </Link>
    </div>
  );
}
