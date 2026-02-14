import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ToolPage from './pages/ToolPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col transition-colors duration-300">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:postId" element={<BlogPostPage />} />
            <Route path="/:toolId" element={<ToolPage />} />
            <Route path="/about" element={
              <div className="container mx-auto px-4 py-20 max-w-4xl prose dark:prose-invert">
                <h1 className="text-5xl font-black border-b-4 border-red-600 pb-6 mb-12">About pdftools.bar</h1>
                <div className="space-y-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                  <p>Welcome to <strong>pdftools.bar</strong>, your premier cloud-based solution for professional PDF management. Our platform was built on the principle that high-end document tools should be accessible to everyone, without the need for bloated, expensive software.</p>
                  <p>By leveraging the power of modern server-side processing and industry-leading APIs, we ensure that every task—from merging complex reports to compressing large design portfolios—is handled with precision, speed, and absolute confidentiality.</p>
                  <div className="grid sm:grid-cols-3 gap-8 pt-8">
                    <div className="p-6 bg-slate-50 dark:bg-zinc-900 rounded-3xl text-center">
                      <div className="text-3xl font-black text-red-600">10M+</div>
                      <div className="text-sm font-bold uppercase tracking-wider mt-2">Files Processed</div>
                    </div>
                    <div className="p-6 bg-slate-50 dark:bg-zinc-900 rounded-3xl text-center">
                      <div className="text-3xl font-black text-red-600">100%</div>
                      <div className="text-sm font-bold uppercase tracking-wider mt-2">Secure SSL</div>
                    </div>
                    <div className="p-6 bg-slate-50 dark:bg-zinc-900 rounded-3xl text-center">
                      <div className="text-3xl font-black text-red-600">Fast</div>
                      <div className="text-sm font-bold uppercase tracking-wider mt-2">Cloud Engine</div>
                    </div>
                  </div>
                </div>
              </div>
            } />
            <Route path="/contact" element={
              <div className="container mx-auto px-4 py-24 max-w-5xl">
                <div className="text-center mb-20 space-y-4">
                  <h1 className="text-5xl font-black dark:text-white">Get in <span className="text-red-600">Touch</span></h1>
                  <p className="text-lg text-slate-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">Whether you have a feature request, found a bug, or just want to say hi, our team is always listening.</p>
                </div>
                
                <div className="grid lg:grid-cols-5 gap-16 items-start">
                  <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-zinc-800 flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-red-100 dark:bg-red-950/40 rounded-3xl flex items-center justify-center text-red-600 text-3xl mb-6 ring-8 ring-slate-50 dark:ring-zinc-950">📧</div>
                      <h3 className="text-xl font-black mb-2 dark:text-white">Email Us</h3>
                      <a href="mailto:ypawan12@gmail.com" className="text-red-600 font-black text-lg hover:underline transition-all">ypawan12@gmail.com</a>
                      <p className="text-xs text-zinc-500 mt-4 uppercase font-bold tracking-widest">Available 24/7</p>
                    </div>

                    <div className="bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-zinc-800 flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-3xl flex items-center justify-center text-zinc-900 dark:text-white text-3xl mb-6 ring-8 ring-slate-50 dark:ring-zinc-950">🌍</div>
                      <h3 className="text-xl font-black mb-2 dark:text-white">Global Reach</h3>
                      <p className="text-zinc-500 font-medium">Remote first team across the globe.</p>
                    </div>
                  </div>

                  <form className="lg:col-span-3 space-y-6 bg-slate-50 dark:bg-zinc-950 p-10 rounded-[2.5rem] border border-slate-100 dark:border-zinc-900" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-black text-zinc-700 dark:text-zinc-300 ml-1 uppercase tracking-wider">Full Name</label>
                        <input type="text" className="w-full px-6 py-4 rounded-2xl border-2 border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:border-red-600 dark:focus:border-red-600 outline-none transition-all placeholder:text-zinc-300 dark:placeholder:text-zinc-700" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-black text-zinc-700 dark:text-zinc-300 ml-1 uppercase tracking-wider">Email</label>
                        <input type="email" className="w-full px-6 py-4 rounded-2xl border-2 border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:border-red-600 dark:focus:border-red-600 outline-none transition-all placeholder:text-zinc-300 dark:placeholder:text-zinc-700" placeholder="john@example.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-black text-zinc-700 dark:text-zinc-300 ml-1 uppercase tracking-wider">Message</label>
                      <textarea rows={5} className="w-full px-6 py-4 rounded-2xl border-2 border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:border-red-600 dark:focus:border-red-600 outline-none transition-all placeholder:text-zinc-300 dark:placeholder:text-zinc-700" placeholder="How can we help you?"></textarea>
                    </div>
                    <button className="w-full bg-red-600 text-white font-black py-5 rounded-2xl shadow-xl shadow-red-500/20 hover:bg-red-700 active:scale-[0.98] transition-all text-lg">Send Message</button>
                  </form>
                </div>
              </div>
            } />
            <Route path="/privacy-policy" element={
              <div className="container mx-auto px-4 py-20 max-w-4xl prose dark:prose-invert">
                <h1 className="text-5xl font-black text-center mb-12 border-b-4 border-red-600 pb-6">Privacy Policy</h1>
                <div className="space-y-8 text-zinc-600 dark:text-zinc-400">
                  <p className="font-bold text-zinc-900 dark:text-zinc-100 italic">Effective Date: October 1, 2023</p>
                  <p>Your trust is our most valuable asset. <strong>pdftools.bar</strong> is committed to protecting your personal data and your files.</p>
                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-zinc-900 dark:text-white">1. Data Minimization</h3>
                    <p>We do not require an account for most of our basic tools on pdftools.bar. We only collect the necessary data to process your files.</p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-zinc-900 dark:text-white">2. Auto-Deletion Protocol</h3>
                    <p>Files uploaded to pdftools.bar are strictly used for the requested conversion or optimization and are automatically deleted from our production servers within 60 minutes.</p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-zinc-900 dark:text-white">3. Security Standards</h3>
                    <p>We use TLS/SSL encryption for all communication between your device and our servers. Our infrastructure is regularly audited for security vulnerabilities.</p>
                  </div>
                </div>
              </div>
            } />
            <Route path="/terms" element={
              <div className="container mx-auto px-4 py-20 max-w-4xl prose dark:prose-invert">
                <h1 className="text-5xl font-black text-center mb-12 border-b-4 border-red-600 pb-6">Terms of Service</h1>
                <div className="space-y-8 text-zinc-600 dark:text-zinc-400">
                  <p>By using <strong>pdftools.bar</strong>, you agree to the following terms and conditions. Please read them carefully.</p>
                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-zinc-900 dark:text-white">1. Acceptance of Terms</h3>
                    <p>By accessing our website, you signify your agreement to these Terms of Service and our Privacy Policy.</p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-zinc-900 dark:text-white">2. Use of Service</h3>
                    <p>You may use our PDF tools for personal or professional use. You agree not to use the service for any illegal activities or to upload malicious files.</p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-zinc-900 dark:text-white">3. Intellectual Property</h3>
                    <p>You retain all rights to the files you upload. pdftools.bar does not claim ownership of any content processed through our servers.</p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-zinc-900 dark:text-white">4. Disclaimer of Warranty</h3>
                    <p>The service is provided "as is" without any warranties. We are not responsible for any data loss or errors during processing.</p>
                  </div>
                </div>
              </div>
            } />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;