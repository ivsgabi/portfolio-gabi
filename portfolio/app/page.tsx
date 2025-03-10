"use client"
import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import TypingEffectComponent from "@/components/TypingEffectComponent"; 
import {Card, CardHeader, CardBody, Image} from "@heroui/react";
import { url } from "inspector";

export function FormRow() {
  return (
    <React.Fragment>
      <Grid className="text-center" item>
        <Card className="relative group bg-white/10 backdrop-blur-lg text-white p-4 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl h-100 w-80">
          <div className="overflow-hidden rounded-lg flex justify-center items-center">
            <img className="C-icon-svg h-20 object-contain transition-transform duration-500 group-hover:scale-110" />
          </div>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start text-gray-600">
            <p className="text-tiny uppercase font-bold">Skill Name</p>
            <small className="text-default-500">Linked Projects</small> 
          </CardHeader>
        </Card>
      </Grid>
      <Grid className="text-center" item>
        <Card className="relative group bg-white/10 backdrop-blur-lg text-white p-4 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl h-100 w-80">
          <div className="overflow-hidden rounded-lg flex justify-center items-center">
            <img className="C-icon-svg h-20 object-contain transition-transform duration-500 group-hover:scale-110" />
          </div>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start text-gray-600">
            <p className="text-tiny uppercase font-bold">Skill Name</p>
            <small className="text-default-500">Linked Projects</small>
          </CardHeader>
        </Card>
      </Grid>
      <Grid className="text-center" item>
        <Card className="relative group bg-white/10 backdrop-blur-lg text-white p-4 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl h-100 w-80">
          <div className="overflow-hidden rounded-lg flex justify-center items-center">
            <img className="C-icon-svg h-20 object-contain transition-transform duration-500 group-hover:scale-110" />
          </div>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start text-gray-600">
            <p className="text-tiny uppercase font-bold">Skill Name</p>
            <small className="text-default-500">Linked projects</small>
          </CardHeader>
        </Card>
      </Grid>
      <Grid className="text-center" item>
        <Card className="relative group bg-white/10 backdrop-blur-lg text-white p-4 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl h-100 w-80">
          <div className="overflow-hidden rounded-lg flex justify-center items-center">
            <img className="C-icon-svg h-20 object-contain transition-transform duration-500 group-hover:scale-110" />
          </div>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start text-gray-600">
            <p className="text-tiny uppercase font-bold">Skill Name</p>
            <small className="text-default-500">Linked projects</small>
          </CardHeader>
        </Card>
      </Grid>
    </React.Fragment>
  );
}

export default function Home() {
  return (
    <div className="bg-gray-300">
       <section id="home" className="h-screen flex items-center justify-center">
        <Grid container spacing={2}>
          <Grid item xl={8}>
            <div className='ml-30 text-7xl'>
            <TypingEffectComponent inputs={[
                "Hello World.",
                "I'm Johana Gaba,",
                "a Full Stack Developer and Data Enthusiast.",
              ]} />
            </div>
          </Grid>
          <Grid item xl={4}>
            <div className='mr-30 text-2xl'>
            Pour la petite présentation, tu connais, blablabla,... j'ecris encore un peu pour que ça fasse deux lignes et que je vois la marge tu connais (à compléter)
            </div>
          </Grid>
        </Grid>
      </section>
      <section id="about" className="h-screen flex items-center justify-center">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <div className="text-black text-3xl ml-30 mr-30 text-left flex flex-col items-start">
                <h1 className="text-4xl font-bold mb-6">
                  About Me
                </h1>
                <p>
                  Ici, blablabla étudiante en informatique de 21 ans, blablabla blalablabla, blablabla,...
                  <br />
                  blablabla étudiante en informatique de 21 ans, blablabla blalablabla, blablabla,...
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="text-black text-3xl ml-30 mr-30 text-left flex flex-col items-start">
                <h1 className="text-4xl font-bold mb-6">
                  Background
                </h1>
                <p>
                  Background text blablabla,...
                </p>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="text-black text-3xl ml-30 mr-30 text-left flex flex-col items-start">
                <h1 className="text-4xl font-bold mb-6">
                  Formation
                </h1>
                <p>
                  Formation text blablabla,...
                </p>
              </div>
            </Grid>
          </Grid>
        </section>
      <section id="skills" className="h-screen flex items-center justify-center">
          <h1 className="text-black text-7xl ml-45 font-bold">
            Skills
          </h1>
          <Box className="w-full flex justify-center">
            <Grid container spacing={3} justifyContent="center" alignItems="center">
              <Grid container item spacing={3} justifyContent="center">
                <FormRow />
              </Grid>
              <Grid container item spacing={3} justifyContent="center">
                <FormRow />
              </Grid>
              <Grid container item spacing={3} justifyContent="center">
                <FormRow />
              </Grid>
            </Grid>
          </Box>
      </section>
      <section id="works" className="h-screen flex items-center justify-center">
        <h1>Works</h1>
      </section>
    </div>
    
  );
}
