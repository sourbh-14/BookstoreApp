import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 relative bg-cover bg-center" style={{ backgroundImage: "url('https://www.example.com/background.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">About Book Store</h1>
        <p className="text-lg mb-4">
          Welcome to Book Store, your one-stop destination for a wide range of books across various genres. Whether you are a book lover, a student, or a professional looking for the latest bestsellers, academic texts, or niche literature, our store has something for everyone.
        </p>
        <div className="mt-8">
          <h2 className="text-3xl font-semibold mb-4">Our Features</h2>
          <ul className="list-disc list-inside space-y-2 text-left mx-auto max-w-lg">
            <li className="text-lg">Extensive Collection: Browse through a vast collection of books from different genres including fiction, non-fiction, academic, and more.</li>
            <li className="text-lg">User-Friendly Interface: Easily search for and find books with our intuitive and user-friendly interface.</li>
            <li className="text-lg">Personalized Recommendations: Get book recommendations based on your reading history and preferences.</li>
            <li className="text-lg">Secure and Easy Checkout: Enjoy a seamless and secure checkout process with multiple payment options.</li>
            <li className="text-lg">Community Reviews: Read reviews from other readers and share your thoughts on books you've read.</li>
          </ul>
        </div>
        <div className="mt-8">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg">
            At Book Store, we believe in the power of reading to inspire, educate, and entertain. Our mission is to provide an accessible and enjoyable platform for book enthusiasts to discover and purchase their favorite books.
          </p>
        </div>
        <div className="text-center mt-12">
          <p className="text-lg font-semibold">Thank you for visiting Book Store. Happy Reading!</p>
          <Link to="/" className="mt-4 inline-block bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 duration-200">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
