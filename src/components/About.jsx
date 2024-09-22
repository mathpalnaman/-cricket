import React from "react";

const About = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-4">
        Welcome to our Cricket website, your ultimate destination for everything related to cricket! 
        Whether you're a casual fan, a die-hard enthusiast, or a budding player, we have something for everyone.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
      <p className="mb-4">
        Our mission is to promote the sport of cricket by providing comprehensive resources, updates, 
        and a community for cricket lovers. We aim to bring fans closer to the game by offering news, 
        statistics, tutorials, and a platform to connect with other enthusiasts.
      </p>
      <h2 className="text-2xl font-semibold mb-2">What We Offer</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Latest news and updates about cricket tournaments</li>
        <li>Player statistics and profiles</li>
        <li>Guides and tutorials for aspiring players</li>
        <li>Event registration and management for tournaments</li>
        <li>A community forum for discussions and networking</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Join Us</h2>
      <p>
        Join us in celebrating the spirit of cricket! Stay tuned for exciting updates and events. 
        We look forward to having you as part of our cricketing family!
      </p>
    </div>
  );
};

export default About;
