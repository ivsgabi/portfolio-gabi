"use client"
import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'

function FormRow() {
  return (
    <React.Fragment>
      <Grid className="text-center" item xl={3}>
        SKILL 01
      </Grid>
      <Grid className="text-center" item xl={3}>
        SKILL 02
      </Grid>
      <Grid className="text-center" item xl={3}>
        SKILL 03
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
            <div className='ml-30 mr-30 text-8xl'>
              Hello World, I am Johana GABA blablabla,... (à compléter)
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
          <h1 className="text-black text-4xl ml-30 mr-30 font-bold">
            Skills
          </h1>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
              <Grid container item spacing={3}>
                <FormRow />
              </Grid>
              <Grid container item spacing={3}>
                <FormRow />
              </Grid>
              <Grid container item spacing={3}>
                <FormRow />
              </Grid>
              <Grid container item spacing={3}>
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
