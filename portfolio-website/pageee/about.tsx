// pages/about.tsx
import React from 'react';
import { Card, CardContent } from '../components/ui/card'; // Corrected import path

const AboutPage = () => {
  return (
    <div>
      <h1>About Me</h1>
      <Card>
        <CardContent>
          <p>This is the about section of my portfolio.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutPage;