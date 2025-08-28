import { motion } from "framer-motion";
import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0b132b] via-[#1c2541] to-[#3a506b] text-white overflow-x-hidden">
      {/* Subtle animated background blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-gradient-to-br from-[#ff6e40]/50 to-[#ffd166]/30 rounded-full blur-3xl opacity-60"
          animate={{ y: [0, 40, 0], x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: [0.42, 0, 0.58, 1] }}
        />
        <motion.div
          className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[350px] bg-gradient-to-tr from-[#3a86ff]/40 to-[#8338ec]/20 rounded-full blur-2xl opacity-50"
          animate={{ y: [0, -30, 0], x: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </div>
      {/* Header/Navbar */}
      <header className="fixed top-0 left-0 w-full z-30 bg-[#101d35]/70 backdrop-blur-md">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 font-bold text-2xl tracking-tight text-[#ff6e40]">
            {/* Simple SVG Placeholder */}
            <svg width="32" height="32" fill="none" className="text-[#ffd166]" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="16" fill="currentColor" />
              <text x="16" y="21" textAnchor="middle" fontSize="16" fill="#0b132b" fontFamily="sans-serif">S</text>
            </svg>
            Sainsbury's
          </a>
          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 text-base font-medium">
            <li>
              <a href="#home" className="hover:text-[#ffd166] focus:text-[#ffd166] transition-colors duration-200">Home</a>
            </li>
            <li>
              <a href="#features" className="hover:text-[#ffd166] focus:text-[#ffd166] transition-colors duration-200">Features</a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#ffd166] focus:text-[#ffd166] transition-colors duration-200">About</a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-[#ffd166] focus:text-[#ffd166] transition-colors duration-200">Testimonials</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#ffd166] focus:text-[#ffd166] transition-colors duration-200">Contact</a>
            </li>
          </ul>
          {/* Hamburger Menu (visual only) */}
          <div className="md:hidden flex flex-col gap-1 w-8 h-8 justify-center items-center">
            <span className="block w-7 h-0.5 bg-[#ffd166] rounded"></span>
            <span className="block w-7 h-0.5 bg-[#ffd166] rounded"></span>
            <span className="block w-7 h-0.5 bg-[#ffd166] rounded"></span>
          </div>
        </nav>
      </header>
      <main className="pt-24">
        {/* Hero Section */}
        <section id="home" className="relative flex flex-col items-center justify-center text-center px-6 py-28 sm:py-36">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ffd166] via-[#ff6e40] to-[#ff6e40]/80"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
          >
            Discover the Future of Grocery Shopping
          </motion.h1>
          <motion.p
            className="max-w-2xl mx-auto text-lg md:text-xl text-[#e0e0e0] mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
          >
            Shop smarter, fresher, and faster with Sainsbury's. Experience an innovative, AI-powered supermarket designed to delight and deliver—right to your door.
          </motion.p>
          <motion.a
            href="#features"
            className="inline-block px-8 py-3 bg-[#ff6e40] text-[#0b132b] rounded-lg font-semibold text-lg shadow-xl hover:bg-[#ffd166] focus:bg-[#ffd166] transition-colors duration-200"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            Start Shopping
          </motion.a>
        </section>
        {/* Features Section */}
        <section id="features" className="relative px-6 py-20 bg-[#16213e]/80">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#ffd166]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, amount: 0.7 }}
          >
            Why Shop With Sainsbury's?
          </motion.h2>
          <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-3">
            <motion.div
              className="bg-[#1c2541]/80 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="mb-4">
                <svg width="48" height="48" fill="none" className="mx-auto text-[#ffd166]" viewBox="0 0 48 48">
                  <rect x="10" y="15" width="28" height="18" rx="5" fill="currentColor" />
                  <rect x="16" y="22" width="16" height="4" rx="2" fill="#ff6e40" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-2 text-[#ffd166]">AI-Powered Personalisation</h3>
              <p className="text-[#e0e0e0]">
                Get tailored product recommendations, smart shopping lists, and exclusive offers powered by advanced AI.
              </p>
            </motion.div>
            <motion.div
              className="bg-[#1c2541]/80 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="mb-4">
                <svg width="48" height="48" fill="none" className="mx-auto text-[#ffd166]" viewBox="0 0 48 48">
                  <circle cx="24" cy="24" r="20" fill="currentColor" />
                  <path d="M32 24l-8 8-8-8" stroke="#ff6e40" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-2 text-[#ffd166]">Freshness Guaranteed</h3>
              <p className="text-[#e0e0e0]">
                Enjoy farm-fresh produce and top-quality groceries, picked and delivered with care, every time.
              </p>
            </motion.div>
            <motion.div
              className="bg-[#1c2541]/80 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="mb-4">
                <svg width="48" height="48" fill="none" className="mx-auto text-[#ffd166]" viewBox="0 0 48 48">
                  <rect x="12" y="14" width="24" height="20" rx="5" fill="currentColor" />
                  <path d="M24 18v8l6 3" stroke="#ff6e40" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-2 text-[#ffd166]">Lightning-Fast Delivery</h3>
              <p className="text-[#e0e0e0]">
                Choose your delivery slot and get your order at your doorstep, on time—every time.
              </p>
            </motion.div>
          </div>
        </section>
        {/* About Section */}
        <section id="about" className="px-6 py-20 bg-[#1c2541]/80">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center gap-12">
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#ffd166]">About Sainsbury's</h2>
              <p className="text-[#e0e0e0] text-lg mb-6">
                For over 150 years, Sainsbury's has been at the heart of British grocery. Today, we're redefining the experience—combining trusted quality with advanced technology to make shopping simpler, faster, and more sustainable.
              </p>
              <p className="text-[#e0e0e0]">
                Our mission: to deliver the food you love, in a way that fits your life. We believe in fresh produce, responsible sourcing, and using innovation to put customers first—every day.
              </p>
            </motion.div>
            <motion.div
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <div className="w-full max-w-sm aspect-square rounded-3xl bg-gradient-to-br from-[#ff6e40]/60 to-[#ffd166]/50 flex items-center justify-center shadow-2xl">
                <svg width="140" height="140" fill="none" viewBox="0 0 140 140">
                  <ellipse cx="70" cy="70" rx="60" ry="60" fill="#ff6e40" opacity="0.8"/>
                  <ellipse cx="70" cy="70" rx="40" ry="40" fill="#ffd166" opacity="0.7"/>
                  <text x="70" y="84" textAnchor="middle" fontSize="40" fill="#0b132b" fontFamily="sans-serif" fontWeight="bold">AI</text>
                </svg>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section id="testimonials" className="px-6 py-20 bg-[#16213e]/70">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#ffd166]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, amount: 0.7 }}
          >
            What Our Customers Say
          </motion.h2>
          <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-3">
            <motion.div
              className="bg-[#1c2541]/90 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.42, 0, 0.58, 1] }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="mb-4">
                <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
                  <circle cx="24" cy="24" r="24" fill="#ffd166" opacity="0.7" />
                  <text x="24" y="32" textAnchor="middle" fontSize="24" fill="#0b132b" fontFamily="sans-serif" fontWeight="bold">A</text>
                </svg>
              </div>
              <p className="text-lg text-[#e0e0e0] mb-3 italic">"The AI recommendations are spot on—my weekly shop is faster and I waste less food!"</p>
              <span className="font-bold text-[#ffd166]">Alex P.</span>
            </motion.div>
            <motion.div
              className="bg-[#1c2541]/90 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.42, 0, 0.58, 1] }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="mb-4">
                <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
                  <circle cx="24" cy="24" r="24" fill="#ff6e40" opacity="0.7" />
                  <text x="24" y="32" textAnchor="middle" fontSize="24" fill="#0b132b" fontFamily="sans-serif" fontWeight="bold">S</text>
                </svg>
              </div>
              <p className="text-lg text-[#e0e0e0] mb-3 italic">"Everything’s so fresh. I love picking my delivery slot and having it arrive right on time."</p>
              <span className="font-bold text-[#ffd166]">Sara K.</span>
            </motion.div>
            <motion.div
              className="bg-[#1c2541]/90 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.42, 0, 0.58, 1] }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="mb-4">
                <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
                  <circle cx="24" cy="24" r="24" fill="#3a86ff" opacity="0.7" />
                  <text x="24" y="32" textAnchor="middle" fontSize="24" fill="#0b132b" fontFamily="sans-serif" fontWeight="bold">M</text>
                </svg>
              </div>
              <p className="text-lg text-[#e0e0e0] mb-3 italic">"Easy to use, beautiful website, and the offers help me save every week."</p>
              <span className="font-bold text-[#ffd166]">Michael L.</span>
            </motion.div>
          </div>
        </section>
        {/* CTA Section */}
        <section id="cta" className="relative px-6 py-16 bg-gradient-to-r from-[#1c2541]/90 to-[#16213e]/80 flex flex-col items-center text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-6 text-[#ffd166]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, amount: 0.7 }}
          >
            Ready For A Smarter Grocery Experience?
          </motion.h2>
          <motion.p
            className="text-lg text-[#e0e0e0] mb-8 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, amount: 0.7 }}
          >
            Join thousands of happy shoppers and start exploring our new, AI-powered platform today.
          </motion.p>
          <motion.a
            href="#contact"
            className="inline-block px-8 py-3 bg-[#ff6e40] text-[#0b132b] rounded-lg font-semibold text-lg shadow-xl hover:bg-[#ffd166] focus:bg-[#ffd166] transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            Get In Touch
          </motion.a>
        </section>
        {/* Contact Section */}
        <section id="contact" className="px-6 py-20 bg-[#1c2541]/80">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#ffd166]">Contact Us</h2>
              <p className="text-[#e0e0e0] mb-4">
                We're here to help—whether you have questions, feedback, or just want to say hello.
              </p>
              <div className="mb-2 flex items-center gap-2">
                <svg width="20" height="20" fill="none" className="text-[#ffd166]" viewBox="0 0 20 20">
                  <path d="M2 4.5A2.5 2.5 0 0 1 4.5 2h11A2.5 2.5 0 0 1 18 4.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 15.5v-11Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M3.5 5 10 10.5 16.5 5" stroke="#ff6e40" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span>support@sainsburys.co.uk</span>
              </div>
              <div className="mb-2 flex items-center gap-2">
                <svg width="20" height="20" fill="none" className="text-[#ffd166]" viewBox="0 0 20 20">
                  <path d="M4 8.5C4 11.5376 7.13401 14 10 14s6-2.4624 6-5.5V7a6 6 0 0 0-12 0v1.5Z" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="10" cy="7" r="2" stroke="#ff6e40" strokeWidth="1.5"/>
                </svg>
                <span>0800 328 1700</span>
              </div>
              <div className="mb-2 flex items-center gap-2">
                <svg width="20" height="20" fill="none" className="text-[#ffd166]" viewBox="0 0 20 20">
                  <path d="M5 8a5 5 0 0 1 10 0c0 5-5 9-5 9S5 13 5 8Z" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="10" cy="8" r="2" stroke="#ff6e40" strokeWidth="1.5"/>
                </svg>
                <span>London, UK</span>
              </div>
            </motion.div>
            <motion.form
              className="bg-[#16213e]/90 rounded-2xl p-8 shadow-xl flex flex-col gap-5"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, amount: 0.6 }}
              onSubmit={e => e.preventDefault()}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#ffd166] mb-1">Name</label>
                <input
                  id="name"
                  type="text"
                  className="w-full rounded-md bg-[#1c2541] border border-[#ffd166]/40 focus:border-[#ffd166] focus:ring-[#ffd166] text-white px-4 py-2 transition duration-200 outline-none"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#ffd166] mb-1">Email</label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-md bg-[#1c2541] border border-[#ffd166]/40 focus:border-[#ffd166] focus:ring-[#ffd166] text-white px-4 py-2 transition duration-200 outline-none"
                  placeholder="you@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#ffd166] mb-1">Message</label>
                <textarea
                  id="message"
                  className="w-full rounded-md bg-[#1c2541] border border-[#ffd166]/40 focus:border-[#ffd166] focus:ring-[#ffd166] text-white px-4 py-2 h-28 resize-none transition duration-200 outline-none"
                  placeholder="How can we help you?"
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-2 px-6 py-2 bg-[#ff6e40] text-[#0b132b] rounded-lg font-semibold shadow-md hover:bg-[#ffd166] focus:bg-[#ffd166] transition-colors duration-200"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-[#101d35]/95 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="flex items-center gap-2 font-bold text-lg text-[#ff6e40] mb-4 md:mb-0">
            <svg width="28" height="28" fill="none" className="text-[#ffd166]" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="16" fill="currentColor" />
              <text x="16" y="21" textAnchor="middle" fontSize="16" fill="#0b132b" fontFamily="sans-serif">S</text>
            </svg>
            Sainsbury's
          </div>
          <ul className="flex gap-6 flex-wrap text-[#e0e0e0] text-sm">
            <li>
              <a href="#home" className="hover:text-[#ffd166] focus:text-[#ffd166] transition-colors duration-200">Home</a>
            </li>
            <li>
              <a href="#features" className="hover:text-[#ffd166] focus:text-[#ffd166] transition-colors duration-200">Features</a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#ffd166] focus:text-[#ffd166] transition-colors duration-200">About</a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-[#ffd166] focus:text-[#ffd166] transition-colors duration-200">Testimonials</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#ffd166] focus:text-[#ffd166] transition-colors duration-200">Contact</a>
            </li>
          </ul>
          <div className="flex gap-5 items-center">
            <a href="#" aria-label="Twitter" className="hover:text-[#ffd166] focus:text-[#ffd166] transition-colors duration-200">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className="text-[#ffd166]">
                <path d="M22 5.924c-.793.352-1.645.59-2.54.699a4.487 4.487 0 0 0 1.965-2.483 8.93 8.93 0 0 1-2.825 1.08A4.478 4.478 0 0 0 12.07 9.03a12.712 12.712 0 0 1-9.226-4.68.497.497 0 0 0-.06.23c0 1.553.79 2.927 2.01 3.728-.732-.022-1.42-.225-2.022-.564v.054a4.48 4.48 0 0 0 3.592 4.395c-.326.09-.669.138-1.023.138-.25 0-.492-.024-.728-.07a4.49 4.49 0 0 0 4.186 3.113A8.986 8.986 0 0 1 2 19.047c-.353 0-.701-.02-1.045-.06A12.697 12.697 0 0 0 7.29 21c8.39 0 12.984-6.952 12.984-12.98 0-.197-.004-.392-.013-.586A9.08 9.08 0 0 0 22 5.924z" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-[#ffd166] focus:text-[#ffd166] transition-colors duration-200">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className="text-[#ffd166]">
                <path d="M17.525 9H14V7.5A.5.5 0 0 1 14.5 7h2a.5.5 0 0 0 .5-.5V4.5A.5.5 0 0 0 16.5 4h-3A4.5 4.5 0 0 0 9 8.5V9H7a.5.5 0 0 0-.5.5v2A.5.5 0 0 0 7 12h2v8a.5.5 0 0 0 .5.5h3A.5.5 0 0 0 13 20v-8h2.292a.5.5 0 0 0 .49-.408l.5-2A.5.5 0 0 0 17.525 9z" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-[#ffd166] focus:text-[#ffd166] transition-colors duration-200">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className="text-[#ffd166]">
                <rect width="18" height="18" x="3" y="3" rx="5" fill="currentColor" />
                <circle cx="12" cy="12" r="4" fill="#ff6e40"/>
                <circle cx="17" cy="7" r="1.5" fill="#ffd166"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-[#e0e0e0]/70">
          &copy; {new Date().getFullYear()} Sainsbury's Supermarket. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;