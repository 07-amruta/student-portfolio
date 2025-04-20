// pages/about.tsx
import React from 'react';
import Card from '../components/Card';

const AboutPage = () => {
  return (
    <div>
      <h1>About Me</h1>
      <Card 
        title="About Me" 
        description="This is the about section of my portfolio." 
      />
    </div>
  );
};

export default AboutPage;
