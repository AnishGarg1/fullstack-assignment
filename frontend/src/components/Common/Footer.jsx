import React from 'react'
import logo from "../../logo.png"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-4">
        <div>
          <h3 className="text-lg font-bold">Abstract</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Start Trial
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Download
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold">Resources</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Release Notes
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Status
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold">Community</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Dribbble
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Podcast
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold">Company</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Legal
              </a>
            </li>
          </ul>
          <div className="mt-8">
            <h4 className="font-bold">Contact Us</h4>
            <p className="mt-2">info@abstract.com</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-10 text-center">
        <img src={logo} className="mx-auto mb-4 h-6 w-6" />
        <p>© Copyright 2024</p>
        <p>Abstract Studio Design, Inc.</p>
        <p>All rights reserved</p>
      </div>
    </footer>
  )
}