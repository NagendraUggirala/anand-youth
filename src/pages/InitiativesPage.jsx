import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaLeaf, FaTint, FaUtensils, FaTshirt, FaPills, FaCross, FaDove,
  FaPaw, FaLightbulb, FaExclamationTriangle, FaHardHat, FaTree,
  FaSeedling, FaFaucet, FaDrumstickBite, FaUsers, FaHandshake,
  FaHeart, FaGlobeAmericas, FaClock, FaCheckCircle, FaArrowRight,
  FaUser, FaUserTie, FaUserGraduate, FaChalkboardTeacher, FaLaptopCode, FaUserMd
} from 'react-icons/fa';

const InitiativesPage = () => {
  const initiatives = [
    {
      id: 1,
      title: "Environmental Care",
      icon: FaLeaf,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-700",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
      description: "Anand Youth promotes a cleaner and greener environment through tree plantation drives and free plant distribution. The goal is to increase greenery and encourage eco-friendly living.",
      activities: [
        "Tree plantation drives",
        "Free plant distribution",
        "Eco-friendly awareness programs"
      ]
    },
    {
      id: 2,
      title: "Water Relief",
      icon: FaTint,
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-700",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      description: "We provide clean drinking water in public places, crowded events, and heat-prone areas to ensure hydration and reduce water-related health problems.",
      activities: [
        "Public water distribution",
        "Event hydration support",
        "Summer relief programs"
      ]
    },
    {
      id: 3,
      title: "Food Support",
      icon: FaUtensils,
      color: "from-orange-500 to-amber-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      textColor: "text-orange-700",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
      description: "Nutritious meals are served to people in need. Food drives are organized during festivals, emergencies, and community programs so no one goes hungry.",
      activities: [
        "Free meal distribution",
        "Festival food drives",
        "Emergency food support"
      ]
    },
    {
      id: 4,
      title: "Clothing & Medical Help",
      icon: FaTshirt,
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-700",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80",
      description: "We collect unused clothes, restore them, and distribute them to underprivileged families. Basic medicines are also provided to individuals who cannot afford healthcare.",
      activities: [
        "Cloth collection & distribution",
        "Basic medical aid",
        "Healthcare support"
      ]
    },
  
    {
      id: 6,
      title: "Animal Safety",
      icon: FaPaw,
      color: "from-amber-500 to-yellow-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      textColor: "text-amber-700",
      image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&q=80",
      description: "Reflective radium belts are given to stray animals to prevent accidents at night, helping to keep them safe and visible on roads.",
      activities: [
        "Radium belt distribution",
        "Animal safety awareness",
        "Road safety for animals"
      ]
    },
    {
      id: 7,
      title: "Disaster Relief",
      icon: FaExclamationTriangle,
      color: "from-red-500 to-rose-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      textColor: "text-red-700",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80",
      description: "During natural calamities like floods, storms, or fires, we provide emergency support, relief kits, and active ground assistance to affected communities.",
      activities: [
        "Emergency relief kits",
        "On-ground assistance",
        "Disaster response support"
      ]
    }
  ];

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Our Initiatives
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-6 md:mb-8 leading-relaxed">
              Serving Society with Purpose
            </p>
            <p className="text-lg md:text-xl text-blue-50 max-w-2xl mx-auto leading-relaxed">
              A wide range of welfare initiatives focused on community service, environmental protection, 
              human dignity, and animal care. Each initiative is driven by compassion and the belief that 
              every small act of kindness can create a big impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Initiatives Cards Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {initiatives.map((initiative, index) => {
              const IconComponent = initiative.icon;
              return (
                <motion.div
                  key={initiative.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`${initiative.bgColor} rounded-2xl shadow-lg overflow-hidden border-2 ${initiative.borderColor} group cursor-pointer`}
                >
                  {/* Image Section */}
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <img
                      src={initiative.image}
                      alt={initiative.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${initiative.color} opacity-70 group-hover:opacity-50 transition-opacity duration-300`}></div>
                    
                    {/* Icon Badge */}
                    <div className={`absolute top-4 left-4 ${initiative.bgColor} p-3 rounded-full shadow-lg`}>
                      <IconComponent className={`text-2xl md:text-3xl ${initiative.textColor}`} />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-5 md:p-6">
                    <h3 className={`text-xl md:text-2xl font-bold ${initiative.textColor} mb-3`}>
                      {initiative.title}
                    </h3>
                    <p className="text-gray-700 text-sm md:text-base mb-4 leading-relaxed">
                      {initiative.description}
                    </p>

                    {/* Activities List */}
                    <ul className="space-y-2 mb-4">
                      {initiative.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <span className={`${initiative.textColor} mr-2 mt-1`}>•</span>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-12"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 mb-3 md:mb-4">
                Our Mission & Vision
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                Driven by compassion, responsibility, and the belief that every act of kindness creates lasting impact
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-green-50 p-6 md:p-8 rounded-2xl shadow-md"
              >
                <div className="flex items-center mb-4">
                  <FaHeart className="text-red-500 text-3xl md:text-4xl mr-4" />
                  <h3 className="text-xl md:text-2xl font-bold text-blue-800">Our Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  To serve society with compassion, responsibility, and humanity through youth-driven programs 
                  that support people, nature, and the environment. We believe that true progress begins with 
                  collective effort and that every small act of kindness can create a big impact.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-50 to-blue-50 p-6 md:p-8 rounded-2xl shadow-md"
              >
                <div className="flex items-center mb-4">
                  <FaGlobeAmericas className="text-green-500 text-3xl md:text-4xl mr-4" />
                  <h3 className="text-xl md:text-2xl font-bold text-blue-800">Our Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  To build a society rooted in compassion, responsibility, environmental protection, human dignity, 
                  and community unity. Through our collective efforts, we aim to create positive change in every 
                  corner of the community and inspire others to join us in making a difference.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Activities Section */}
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
              Recent Activities
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              See how our initiatives are making a real difference in communities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80",
                title: "Massive Plantation Drive",
                date: "March 2024",
                location: "City Park & Schools",
                description: "Planted 500+ saplings across 10 communities, creating green spaces and raising environmental awareness among students and residents.",
                impact: "500+ Trees Planted"
              },
              {
                image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80",
                title: "Community Food Drive",
                date: "February 2024",
                location: "Community Center",
                description: "Served nutritious meals to 200+ families during a special festival event, ensuring no one went hungry during the celebrations.",
                impact: "200+ Families Fed"
              },
              {
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
                title: "Summer Water Relief",
                date: "January 2024",
                location: "Multiple Locations",
                description: "Set up 15 water distribution points across the city during peak summer, providing clean drinking water to thousands of people daily.",
                impact: "5000+ People Served"
              }
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {activity.date}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg md:text-xl font-bold text-blue-800 mb-2">{activity.title}</h3>
                  <p className="text-gray-500 text-xs mb-2 flex items-center">
                    <FaClock className="mr-1" />
                    {activity.location}
                  </p>
                  <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">{activity.description}</p>
                  <div className="flex items-center text-green-600 font-semibold text-sm md:text-base">
                    <FaCheckCircle className="mr-2" />
                    {activity.impact}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
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
              Our Impact
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Making a difference through dedicated community service
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              { number: "1000+", label: "Lives Impacted", icon: FaUsers, color: "text-blue-600" },
              { number: "50+", label: "Initiatives", icon: FaLeaf, color: "text-green-600" },
              { number: "200+", label: "Volunteers", icon: FaHandshake, color: "text-orange-600" },
              { number: "10000+", label: "Trees Planted", icon: FaTree, color: "text-emerald-600" }
            ].map((stat, index) => {
              const StatIcon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`mb-3 ${stat.color} flex justify-center`}>
                    <StatIcon className="text-4xl md:text-5xl" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">{stat.number}</div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Get Involved Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 mb-3 md:mb-4">
              How to Get Involved
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              There are many ways you can contribute to our mission and make a positive impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: FaUsers,
                title: "Become a Volunteer",
                description: "Join our team of dedicated volunteers and participate in various community initiatives.",
                color: "from-blue-500 to-cyan-600"
              },
              {
                icon: FaHandshake,
                title: "Partner With Us",
                description: "Organizations and businesses can partner with us to amplify our impact.",
                color: "from-green-500 to-emerald-600"
              },
              {
                icon: FaSeedling,
                title: "Sponsor Initiatives",
                description: "Sponsor specific initiatives like tree plantation or food drives.",
                color: "from-orange-500 to-amber-600"
              },
              {
                icon: FaHeart,
                title: "Spread Awareness",
                description: "Help us spread the word about our initiatives through social media and community networks.",
                color: "from-purple-500 to-pink-600"
              }
            ].map((way, index) => {
              const WayIcon = way.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <div className={`mb-4 bg-gradient-to-br ${way.color} p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center`}>
                    <WayIcon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-blue-800 mb-3">{way.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">{way.description}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-blue-600 font-semibold text-sm md:text-base hover:text-blue-800 transition-colors"
                  >
                    Learn More <FaArrowRight className="ml-2" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              Stories from Our Community
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Real experiences from people whose lives have been touched by our initiatives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Rajesh Kumar",
                role: "Community Volunteer",
                avatar: FaUserTie,
                comment: "Anand Youth's plantation drive in our neighborhood has transformed our area. The free plants and environmental awareness programs have made a real difference. Truly inspiring work!",
                initiative: "Environmental Care"
              },
              {
                name: "Priya Sharma",
                role: "Beneficiary",
                avatar: FaUser,
                comment: "During a difficult time, Anand Youth provided food support for my family. Their compassionate service and the dignity with which they help people is truly remarkable.",
                initiative: "Food Support"
              },
              {
                name: "Amit Patel",
                role: "Community Member",
                avatar: FaLaptopCode,
                comment: "The water relief initiative during summer was a lifesaver. Clean drinking water in public spaces helped so many people. Thank you Anand Youth for your selfless service.",
                initiative: "Water Relief"
              }
            ].map((testimonial, index) => {
              const AvatarIcon = testimonial.avatar;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl shadow-md p-6 border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-600 p-3 rounded-full mr-4">
                      <AvatarIcon className="text-white text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm md:text-base mb-4 leading-relaxed italic">
                    "{testimonial.comment}"
                  </p>
                  <div className="text-xs text-blue-600 font-semibold">
                    Related to: {testimonial.initiative}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
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
              Ready to Make a Difference?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8 leading-relaxed">
              Join Anand Youth in serving society with compassion and responsibility. 
              Together, we can create positive change in our community and environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/volunteer"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 md:px-10 md:py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Join as Volunteer
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 md:px-10 md:py-4 rounded-lg font-bold text-lg transition-all duration-300"
              >
                Support These Initiatives
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InitiativesPage;

