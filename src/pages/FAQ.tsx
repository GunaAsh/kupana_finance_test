import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: 'What financial services do you offer?',
      answer: 'We offer a comprehensive range of financial services including Tax Planning, Investment Management, Budgeting & Savings, Retirement Planning, Insurance Advisory, and Debt Management. Each service is tailored to meet your specific financial goals and needs.',
    },
    {
      question: 'How does your AI-powered financial advice work?',
      answer: 'Our AI system analyzes your financial data, market trends, and personal goals to provide personalized recommendations. It combines advanced algorithms with human expertise to deliver accurate, timely, and relevant financial advice.',
    },
    {
      question: 'What makes your investment strategies unique?',
      answer: 'Our investment strategies combine AI-driven market analysis with traditional financial wisdom. We use data-driven insights to identify opportunities while maintaining a balanced approach to risk management.',
    },
    {
      question: 'How do you ensure the security of my financial data?',
      answer: 'We employ bank-level encryption and security protocols to protect your data. Our systems are regularly audited and updated to maintain the highest standards of data protection and privacy.',
    },
    {
      question: 'Can I schedule a consultation with a financial advisor?',
      answer: 'Yes, you can schedule a consultation through our contact form or chat with our AI assistant to book an appointment. We offer both virtual and in-person meetings with our experienced financial advisors.',
    },
    {
      question: 'What is your approach to retirement planning?',
      answer: 'Our retirement planning approach is comprehensive and personalized. We consider factors like your current age, desired retirement age, lifestyle goals, and risk tolerance to create a sustainable retirement strategy.',
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* FAQ Header */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Find answers to common questions about our services and financial solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={ref} className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-600" />
                  )}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 py-4 bg-gray-50"
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our team is here to help you with any specific questions about our services
            </p>
            <button
              onClick={() => window.location.href = '/contact'}
              className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;