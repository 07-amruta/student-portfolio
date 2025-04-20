import React from 'react';
import { Button } from '../components/ui/button'; // Use named import
import { Card } from '../components/ui/card'; // Ensure this matches the actual file structure

const HomePage = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <h1>Welcome to My Portfolio Website!</h1>
      <Card>
        <p>This is a simple card description.</p>
      </Card>
      <Button onClick={handleClick}>Click Me</Button> {/* Pass label as a child */}
    </div>
  );
};

export default HomePage;