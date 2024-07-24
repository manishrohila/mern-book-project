import React from 'react'
import img1 from '../assets/img1.avif'
import img2 from '../assets/img2.jpeg'

export default function About() {
  return (
    <div className="about-page mt-11 p-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-6">
        Welcome to our book website! We are passionate about books and literature, and we've created this platform to share our love for reading with you.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
      <p className="text-lg mb-6">
        Our mission is to promote literacy, support authors, and connect book enthusiasts from around the world. We believe that books have the power to inspire, educate, and entertain.
      </p>

      <h2 className="text-5xl flex justify-around font-semibold my-4 mb-7">Meet the Team</h2>
      <div className="flex justify-center space-x-6">
        <div className="team-member">
          <img src={img1} alt="Team Member 1" className="w-32 h-32 rounded-full" />
          <h3 className="text-xl font-semibold">John Doe</h3>
          <p>Co-Founder</p>
        </div>
        <div className="team-member">
          <img src={img2} alt="Team Member 2" className="w-32 h-32 rounded-full" />
          <h3 className="text-xl font-semibold">Jane Smith</h3>
          <p>Co-Founder</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
      <p className="text-lg mb-6">
        If you have any questions, suggestions, or feedback, please feel free to contact us at <a href="mailto:info@bookwebsite.com" className="text-blue-500 hover:underline">info@bookwebsite.com</a>.
      </p>
    </div>
  );

}
