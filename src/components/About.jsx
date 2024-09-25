import { div } from "framer-motion/client";
import React from "react";


const About = () => {
  return (
    <div className="bg-Aboutus h-screen w-full bg-cover overflow-hidden">
      <div className="max-w-4xl mx-auto p-6 ">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="mb-4 text-2xl">
        Welcome to our cricket website, the go-to hub for all things cricket! Whether you're a passionate fan, aspiring player, or simply love the game, we offer everything you need—from the latest news to exclusive content—designed for cricket enthusiasts of every level.
      </p>
      <h2 className="text-3xl font-bold mb-2">Our Mission</h2>
      <p className="mb-4 text-2xl">
        Our mission is to promote the sport of cricket by providing comprehensive resources, updates, 
        and a community for cricket lovers. We aim to bring fans closer to the game by offering news, 
        statistics, tutorials, and a platform to connect with other enthusiasts.
      </p>
      <h2 className="text-3xl font-bold mb-2">What We Offer</h2>
      <ul className="list-disc list-inside mb-4 text-2xl font-semibold">
        <li>Latest news and updates about cricket tournaments</li>
        <li>Player statistics and profiles</li>
        <li>Guides and tutorials for aspiring players</li>
        <li>Event registration and management for tournaments</li>
        <li>A community forum for discussions and networking</li>
      </ul>
      <h2 className="text-3xl font-bold mb-2">Join Us</h2>
      <p className= "text-2xl font-semibold">
      Join us in celebrating the true spirit of cricket! Stay connected with us for thrilling updates, upcoming tournaments, and exclusive events. Whether you're a seasoned player or a passionate fan, we can't wait to welcome you into our cricketing family and share the excitement of the game with you!
      </p>
    </div>
    </div>
  );
};

export default About;
