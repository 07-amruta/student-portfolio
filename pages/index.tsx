// pages/index.tsx
import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';

const HomePage = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <h1>Welcome to My Portfolio Website!</h1>
      <Card 
        title="Card Title" 
        description="This is a simple card description." 
      />
      <Button 
        label="Click Me" 
        onClick={handleClick} 
      />
    </div>
  );
};

export default HomePage;
