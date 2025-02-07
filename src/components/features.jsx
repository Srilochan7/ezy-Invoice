import React from 'react';
import { FileText, CreditCard, Mail } from 'lucide-react';

const Footer = () => {
  const letters = ['L', 'I', 'N', 'K', 'F', 'Y'];
  
  return (
    <footer className="bg-black py-12 px-4">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex justify-center mb-8">
          {letters.map((letter, index) => (
            <span
              key={index}
              className="text-4xl font-bold text-gray-800 transition-all duration-300 hover:text-violet-500 hover:drop-shadow-[0_0_15px_rgba(139,92,246,0.7)]"
              style={{ letterSpacing: '0.5em' }}
            >
              {letter}
            </span>
          ))}
        </div>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Linkify INC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const FeatureCard = ({ icon: Icon, title, description, number }) => (
  <div className="bg-white/10 p-6 rounded-xl border border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-xl relative">
    <div className="mb-4">
      <Icon className="text-purple-500 w-12 h-12" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-gray-300">{description}</p>
    <div className="absolute top-6 right-6">
      <div className="w-8 h-8 rounded-full bg-black/50 border border-gray-700 flex items-center justify-center">
        <span className="text-gray-300">{number}</span>
      </div>
    </div>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: FileText,
      title: "Invoice Generation",
      description: "Create professional, customizable invoices with ease. Automatically calculate totals, taxes, and generate clean, branded templates.",
      number: "1"
    },
    {
      icon: CreditCard,
      title: "Invoice Management",
      description: "Track paid, pending, and overdue invoices. Maintain a clear overview of your financial status with intuitive categorization.",
      number: "2"
    },
    {
      icon: Mail,
      title: "Automated Emails",
      description: "Set up automatic email notifications for pending invoices. Customize reminder schedules to improve timely payments.",
      number: "3"
    }
  ];

  return (
    <section id="section1">
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-16 px-4">
        <div className="container mx-auto flex flex-col items-center">
          <button className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm hover:bg-white/20">
          <span>📊</span>

            Featues
            <span className="ml-1">→</span>
          </button>
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">
              Effortless invoicing<br />management in 3 steps
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Follow these simple steps to optimize, organize, and manage your invoices with ease.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;