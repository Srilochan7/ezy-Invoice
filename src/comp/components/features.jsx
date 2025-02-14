import React from 'react';
import { FileText, CreditCard, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon: Icon, title, description, number, index }) => (
  <motion.div
    className="bg-white/10 p-6 rounded-xl border border-white/20 hover:bg-white/20 hover:shadow-xl relative"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    viewport={{ amount: 0.5 }} // Re-triggers when 50% is in view
    whileHover={{ scale: 1.05 }}
  >
    <motion.div
      className="mb-4"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
      viewport={{ amount: 0.5 }}
    >
      <Icon className="text-purple-500 w-12 h-12" />
    </motion.div>
    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-gray-300">{description}</p>
    <motion.div
      className="absolute top-6 right-6"
      initial={{ scale: 0, rotate: -180 }}
      whileInView={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
      viewport={{ amount: 0.5 }}
    >
      <div className="w-8 h-8 rounded-full bg-black/50 border border-gray-700 flex items-center justify-center">
        <span className="text-gray-300">{number}</span>
      </div>
    </motion.div>
  </motion.div>
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
    <section id="features">
      <div className="min-h-screen bg-black text-white pt-24 pb-8 relative">
        {/* Background Gradient */}
        <div
          className="absolute inset-0 z-0" // Ensure background is behind content
          style={{
            background: `
              linear-gradient(to right, black, transparent 15%, transparent 85%, black),
              linear-gradient(to bottom, black, transparent 15%, transparent 85%, black),
              linear-gradient(to right, rgba(75, 75, 75, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(75, 75, 75, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '100% 100%, 100% 100%, 40px 40px, 40px 40px',
            opacity: 0.7
          }}
        />
        {/* Main content container */}
        <div className="container mx-auto flex flex-col items-center z-10 relative">
          <motion.button
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm hover:bg-white/20"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ amount: 0.5 }}
          >
            <span>📊</span>
            Features
            <span className="ml-1">→</span>
          </motion.button>
          <div className="text-center mb-12">
            <motion.h2
              className="text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ amount: 0.5 }}
            >
              Effortless Invoice<br />management in 3 steps
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ amount: 0.5 }}
            >
              Follow these simple steps to optimize, organize, and manage your invoices with ease.
            </motion.p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
