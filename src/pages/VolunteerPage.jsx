import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaHeart, FaLeaf, FaPaw, FaExclamationTriangle, FaUsers, FaHandshake,
  FaUser, FaUserGraduate, FaUserTie, FaUserMd, FaCheckCircle, FaArrowRight,
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaTasks
} from 'react-icons/fa';

const VolunteerPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    interests: [],
    availableTime: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const interestOptions = [
    'Food Support',
    'Water Relief',
    'Environmental Care',
    'Clothing & Medical Help',
    'Animal Safety',
    'Disaster Relief',
    'All of the above'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleInterestChange = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (formData.interests.length === 0) newErrors.interests = 'Please select at least one area of interest';
    if (!formData.availableTime.trim()) newErrors.availableTime = 'Available time is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Volunteer form submitted:', formData);
      setSubmitStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          email: '',
          location: '',
          interests: [],
          availableTime: ''
        });
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80)"
          }}
        ></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-4">
              <FaHeart className="text-red-300 text-5xl md:text-6xl" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Become a Volunteer
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 md:mb-8 text-blue-100">
              Become the Change
            </h2>
            <p className="text-lg md:text-xl text-blue-50 max-w-3xl mx-auto leading-relaxed">
              Volunteering with Anand Youth means becoming a part of a mission that believes in service, 
              humanity, compassion, and community upliftment. Every small contribution creates a big difference 
              in someone's life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 mb-3 md:mb-4">
              Why Volunteer With Us?
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Your time and effort matter. Whether you want to support environmental causes, help the needy, 
              assist during disasters, or spread kindness—every contribution counts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: FaHandshake,
                title: "Serve Humanity",
                description: "Help provide food, water, clothes, medical aid, and support to people who need it the most.",
                color: "from-blue-500 to-cyan-600"
              },
              {
                icon: FaLeaf,
                title: "Protect the Environment",
                description: "Join our tree plantation drives, green initiatives, and eco-friendly awareness programs.",
                color: "from-green-500 to-emerald-600"
              },
              {
                icon: FaPaw,
                title: "Support Animal Welfare",
                description: "Assist in distributing radium belts and caring for stray animals.",
                color: "from-amber-500 to-yellow-600"
              },
              {
                icon: FaExclamationTriangle,
                title: "Be Part of Relief Teams",
                description: "Provide help during floods, fires, storms, and emergencies.",
                color: "from-red-500 to-rose-600"
              },
              {
                icon: FaUsers,
                title: "Grow as a Leader",
                description: "Develop responsibility, teamwork, kindness, and leadership qualities.",
                color: "from-purple-500 to-pink-600"
              },
              {
                icon: FaHeart,
                title: "Be the Voice of Change",
                description: "Your actions inspire others and create positive change in society.",
                color: "from-orange-500 to-red-600"
              }
            ].map((benefit, index) => {
              const BenefitIcon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className={`bg-gradient-to-br ${benefit.color} p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4`}>
                    <BenefitIcon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-800 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Volunteer Responsibilities Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 mb-3 md:mb-4">
              Volunteer Responsibilities
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Simple & Clear - You can choose where you are comfortable and available
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {[
                "Participate in weekly or monthly activities",
                "Support food & water distribution",
                "Help in organizing community drives",
                "Assist in medical or clothing support programs",
                "Join emergency or disaster relief work",
                "Spread awareness about social causes",
                "Help with photography, reporting, or management (optional roles)"
              ].map((responsibility, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                >
                  <FaCheckCircle className="text-green-500 text-xl mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">{responsibility}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Join Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 mb-3 md:mb-4">
              Who Can Join?
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              No age barrier. No qualifications needed. Only compassion and willingness to serve.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              { icon: FaUserGraduate, label: "Students", color: "text-blue-600" },
              { icon: FaUserTie, label: "Working Professionals", color: "text-green-600" },
              { icon: FaUser, label: "Homemakers", color: "text-orange-600" },
              { icon: FaUserMd, label: "Retired Individuals", color: "text-purple-600" }
            ].map((category, index) => {
              const CategoryIcon = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`${category.color} mb-3 flex justify-center`}>
                    <CategoryIcon className="text-5xl md:text-6xl" />
                  </div>
                  <p className="font-semibold text-gray-800 text-sm md:text-base">{category.label}</p>
                </motion.div>
              );
            })}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <p className="text-lg md:text-xl font-semibold text-blue-800">
              Anyone who wants to help society
            </p>
          </motion.div>
        </div>
      </section>


      {/* Final Motivation Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              "When hands join together, humanity grows stronger."
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8 leading-relaxed">
              Become a part of Anand Youth and help us make a real difference. Your compassion and 
              willingness to serve can transform lives and create lasting positive change in our community.
            </p>
            <Link
              to="/initiatives"
              className="inline-flex items-center bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 md:px-10 md:py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Explore Our Initiatives <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default VolunteerPage;

