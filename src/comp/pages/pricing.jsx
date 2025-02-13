import React, { useState } from 'react';
import Navbar from '../components/navbar';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      name: 'Free',
      subtitle: 'For freelancers and individuals',
      price: 0,
      features: [
        'Create and manage up to 5 invoices',
        'Basic invoice templates',
        'Download invoices as PDFs',
        'Community support',
        'Basic reporting'
      ],
      buttonText: 'Start for free',
      buttonVariant: 'white'
    },
    {
      name: 'Pro',
      subtitle: 'For small businesses',
      price: 9,
      features: [
        'Create and manage up to 50 invoices',
        'Custom invoice templates',
        'Track payments and overdue invoices',
        'Automatic tax calculations',
        'Remainders for invoice',
        'Priority support',
        'Advanced reporting'
      ],
      buttonText: 'Get started',
      buttonVariant: 'purple',
      highlighted: true
    },
    {
      name: 'Business',
      subtitle: 'For growing organizations',
      price: 49,
      features: [
        'Unlimited invoices',
        'Custom invoice branding',
        'Team collaboration and access control',
        'Automated recurring invoices',
        'Advanced payment integrations',
        'Dedicated account manager',
        'Priority customer support'
      ],
      buttonText: 'Contact team',
      buttonVariant: 'white'
    }
  ];

  const handlePlanSelect = (planName) => {
    setSelectedPlan(planName);
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-black text-white pt-24 pb-8 relative">
        {/* Simple Grid Background */}
        <div 
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(to right, black, transparent 15%, transparent 85%, black),
                linear-gradient(to bottom, black, transparent 15%, transparent 85%, black),
                linear-gradient(to right, rgba(75, 75, 75, 0.3) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(75, 75, 75, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '100% 100%, 100% 100%, 40px 40px, 40px 40px',
              opacity: 0.8
            }}
          />
    

        <style>
          {`
            .pricing-card {
              cursor: pointer;
              transition: all 0.3s ease;
              position: relative;
              z-index: 1;
              backdrop-filter: blur(8px);
              background: rgba(17, 24, 39, 0.8);
            }

            .pricing-card:hover {
              transform: translateY(-12px);
              box-shadow: 0 22px 40px rgba(87, 0, 255, 0.1);
              z-index: 2;
            }

            .feature-item {
              opacity: 0;
              animation: fadeIn 0.5s ease-out forwards;
            }

            .plan-button {
              transition: all 0.3s ease;
            }

            .plan-button:hover {
              transform: scale(1.05);
            }

            .selected-plan {
              border: 2px solid #8B5CF6;
              box-shadow: 0 0 20px rgba(139, 92, 246, 0.2);
            }

            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}
        </style>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Choose a plan that works for you
            </h1>
            <p className="text-gray-400">
              Start managing invoices with ease today and unlock advanced features with our premium plans.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center gap-2 mb-12">
            <button
              className={`px-4 py-2 rounded transition-all duration-300 ${billingCycle === 'monthly' ? 'bg-gray-800' : 'bg-transparent'}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded transition-all duration-300 ${billingCycle === 'yearly' ? 'bg-gray-800' : 'bg-transparent'}`}
              onClick={() => setBillingCycle('yearly')}
            >
              Yearly
            </button>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-lg p-8 pricing-card ${selectedPlan === plan.name ? 'selected-plan' : ''} ${plan.highlighted && !selectedPlan ? 'border border-purple-500' : ''}`}
                onClick={() => handlePlanSelect(plan.name)}
              >
                <h2 className="text-xl font-bold mb-2">{plan.name}</h2>
                <p className="text-gray-400 mb-4">{plan.subtitle}</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold">${billingCycle === 'monthly' ? plan.price : plan.price * 12}</span>
                  <span className="text-gray-400">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li 
                      key={feature} 
                      className="flex items-center gap-2 feature-item"
                      style={{ animationDelay: `${0.1 + featureIndex * 0.1}s` }}
                    >
                      <svg
                        className="w-5 h-5 text-purple-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-medium plan-button ${plan.buttonVariant === 'purple' ? 'bg-purple-500 hover:bg-purple-600 text-white' : 'bg-white hover:bg-gray-100 text-black'}`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;