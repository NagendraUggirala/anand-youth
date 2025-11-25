import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import { 
  FaLeaf, FaTint, FaUtensils, FaHeart, FaTree, FaHandshake, FaDove, 
  FaUsers, FaUser, FaUserTie, FaUserGraduate, FaUserMd, FaChalkboardTeacher, 
  FaLaptopCode, FaMoneyBill, FaBox, FaSeedling, FaExclamationTriangle, 
  FaHardHat, FaTshirt, FaPills, FaPaw, FaLightbulb, FaGlobeAmericas,
  FaFaucet, FaDrumstickBite, FaCross, FaUmbrella
} from 'react-icons/fa';

const Home = () => {
  const [currentReviewSet, setCurrentReviewSet] = useState(0);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [isHoveringHero, setIsHoveringHero] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  // Auto-rotate reviews every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewSet((prev) => (prev + 1) % Math.ceil(reviews.length / (window.innerWidth < 768 ? 1 : 3)));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate hero carousel every 5 seconds
  useEffect(() => {
    if (isHoveringHero) return;
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHoveringHero]);

  // Hero carousel slides
  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
      title: "Serving Society with Compassion",
      subtitle: "Building a Better Tomorrow Together",
      description: "Anand Youth is dedicated to creating positive change through community-driven initiatives that touch lives and transform communities.",
      cta: "Join Our Mission"
    },
    {
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&q=80",
      title: "Environmental Care & Green Living",
      subtitle: "Protecting Our Planet for Future Generations",
      description: "Through plantation drives and eco-friendly initiatives, we're building a greener, healthier environment for all.",
      cta: "Plant a Tree"
    },
    {
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1200&q=80",
      title: "Humanitarian Support & Relief",
      subtitle: "No One Left Behind",
      description: "From food support to medical aid, we ensure that every member of our community receives the care and dignity they deserve.",
      cta: "Support Our Cause"
    },
    {
      image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1200&q=80",
      title: "Youth-Driven Change",
      subtitle: "Empowering the Next Generation",
      description: "Our youth volunteers are the heart of our mission, driving positive change and inspiring others to make a difference.",
      cta: "Become a Volunteer"
    }
  ];

  const features = [
    {
      icon: FaLeaf,
      title: "Environmental Care",
      description: "Plantation drives and green living initiatives to protect and preserve our planet"
    },
    {
      icon: FaTint,
      title: "Water Relief",
      description: "Ensuring clean drinking water access in public spaces and areas in need"
    },
    {
      icon: FaUtensils,
      title: "Food Support",
      description: "Nutritious meals for those in need, ensuring no one sleeps hungry"
    },
    {
      icon: FaHeart,
      title: "Community Service",
      description: "Compassionate support for clothing, medical aid, and dignified services"
    }
  ];

  const services = [
    {
      title: "Environmental Initiatives",
      description: "Tree plantation drives and free plant distribution to promote green living",
      icon: FaTree,
      features: ["Plantation Drives", "Plant Distribution", "Eco Awareness", "Green Spaces"]
    },
    {
      title: "Humanitarian Support",
      description: "Food, clothing, and medical aid for underprivileged communities",
      icon: FaHandshake,
      features: ["Free Meals", "Cloth Distribution", "Medical Aid", "Emergency Relief"]
    },
    {
      title: "Community Welfare",
      description: "Dignified services including last rites and animal care initiatives",
      icon: FaDove,
      features: ["Last Rites Service", "Animal Safety", "Disaster Relief", "Community Unity"]
    }
  ];

  const values = [
    {
      title: "Compassion",
      description: "Every initiative is driven by compassion and the belief that small acts of kindness create big impact",
      icon: FaHeart
    },
    {
      title: "Responsibility",
      description: "Taking responsibility for our community, environment, and the well-being of all living beings",
      icon: FaHandshake
    },
    {
      title: "Collective Effort",
      description: "True progress begins with collective effort - youth-driven programs serving society together",
      icon: FaUsers
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Community Volunteer",
      rating: 5,
      comment: "Anand Youth's plantation drive in our neighborhood has transformed our area. The free plants and environmental awareness programs have made a real difference. Truly inspiring work!",
      avatar: FaUserTie,
      date: "January 2024"
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Beneficiary",
      rating: 5,
      comment: "During a difficult time, Anand Youth provided food support for my family. Their compassionate service and the dignity with which they help people is truly remarkable.",
      avatar: FaUser,
      date: "December 2023"
    },
    {
      id: 3,
      name: "Amit Patel",
      location: "Community Member",
      rating: 5,
      comment: "The water relief initiative during summer was a lifesaver. Clean drinking water in public spaces helped so many people. Thank you Anand Youth for your selfless service.",
      avatar: FaLaptopCode,
      date: "November 2023"
    },
    {
      id: 4,
      name: "Sunita Reddy",
      location: "School Teacher",
      rating: 5,
      comment: "Our school received free plants from Anand Youth. The children learned about environmental care, and our school now has a beautiful green space. Wonderful initiative!",
      avatar: FaChalkboardTeacher,
      date: "October 2023"
    },
    {
      id: 5,
      name: "Vikram Singh",
      location: "Volunteer",
      rating: 5,
      comment: "I've been volunteering with Anand Youth for over a year. Their commitment to serving society with compassion and responsibility is inspiring. Every initiative makes a real impact.",
      avatar: FaUserGraduate,
      date: "September 2023"
    },
    {
      id: 6,
      name: "Neha Gupta",
      location: "Community Leader",
      rating: 5,
      comment: "The clothing and medical support provided by Anand Youth has helped many families in our area. Their approach to community service is truly commendable and makes a lasting difference.",
      avatar: FaUserMd,
      date: "August 2023"
    }
  ];

  // Get current set of reviews based on screen size
  const getCurrentReviews = () => {
    const isMobile = window.innerWidth < 768;
    const reviewsPerView = isMobile ? 1 : 3;
    return reviews.slice(currentReviewSet * reviewsPerView, currentReviewSet * reviewsPerView + reviewsPerView);
  };

  const [currentReviews, setCurrentReviews] = useState(getCurrentReviews());

  // Update reviews when window resizes or review set changes
  useEffect(() => {
    const handleResize = () => {
      setCurrentReviews(getCurrentReviews());
    };

    window.addEventListener('resize', handleResize);
    setCurrentReviews(getCurrentReviews());

    return () => window.removeEventListener('resize', handleResize);
  }, [currentReviewSet]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const reviewVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex justify-center space-x-1 mb-3">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`text-lg ${
              index < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  // Trending cards data - Community Initiatives
  const trendingCards = [
    {
      id: 1,
      title: "Environmental Care & Green Living",
      subtitle: "Protecting Our Planet",
      description: "Regular tree-planting initiatives and free plant distribution to promote green spaces and environmental sustainability.",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
      badge: "Active",
      badgeColor: "bg-green-500",
      features: ["Plantation Drives", "Free Plant Distribution", "Eco-Friendly Living"],
      gradient: "from-green-500 to-emerald-600"
    },
    {
      id: 2,
      title: "Water Relief & Hydration Support",
      subtitle: "Ensuring Clean Water Access",
      description: "Distribution of clean drinking water in public spaces, events, and areas in need—ensuring hydration, health, and relief.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      badge: "Ongoing",
      badgeColor: "bg-blue-500",
      features: ["Drinking Water Supply", "Public Spaces", "Health & Relief"],
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      id: 3,
      title: "Food Support & Free Meals",
      subtitle: "No One Sleeps Hungry",
      description: "Nutritious meals served to those in need. Special food drives during festivals, emergencies, and community events.",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
      badge: "Essential",
      badgeColor: "bg-orange-500",
      features: ["Free Food Service", "Festival Drives", "Emergency Support"],
      gradient: "from-orange-500 to-red-600"
    },
    {
      id: 4,
      title: "Clothing & Medical Support",
      subtitle: "Dignity & Healthcare for All",
      description: "Collecting, restoring, and distributing clothes to underprivileged families. Providing essential medicines and medical support.",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80",
      badge: "Critical",
      badgeColor: "bg-purple-500",
      features: ["Cloth Distribution", "Basic Medical Aid", "Community Health"],
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  const heroVariants = {
    enter: { opacity: 0, x: 300 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -300 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <section 
        className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden"
        onMouseEnter={() => setIsHoveringHero(true)}
        onMouseLeave={() => setIsHoveringHero(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHeroSlide}
            variants={heroVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${heroSlides[currentHeroSlide].image})`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-blue-700/70"></div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentHeroSlide}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6 }}
                  className="text-white"
                >
                  <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                    {heroSlides[currentHeroSlide].title}
                  </h1>
                  <p className="text-xl md:text-2xl lg:text-3xl text-orange-300 font-semibold mb-4 md:mb-6">
                    {heroSlides[currentHeroSlide].subtitle}
                  </p>
                  <p className="text-base md:text-lg lg:text-xl text-blue-100 mb-6 md:mb-8 max-w-2xl leading-relaxed">
                    {heroSlides[currentHeroSlide].description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/volunteer"
                      className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 md:px-10 md:py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center"
                    >
                      {heroSlides[currentHeroSlide].cta}
                    </Link>
                    <Link
                      to="/initiatives"
                      className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-3 md:px-10 md:py-4 rounded-lg font-bold text-lg transition-all duration-300 text-center"
                    >
                      Explore Initiatives
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full shadow-lg transition-all duration-300 z-20"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full shadow-lg transition-all duration-300 z-20"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentHeroSlide ? 'bg-orange-500 w-8' : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              { number: "1000+", label: "Lives Impacted", icon: FaHeart, color: "text-red-500" },
              { number: "50+", label: "Initiatives", icon: FaLeaf, color: "text-green-500" },
              { number: "200+", label: "Active Volunteers", icon: FaUsers, color: "text-blue-500" },
              { number: "10000+", label: "Trees Planted", icon: FaTree, color: "text-emerald-500" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`mb-2 ${stat.color} flex justify-center`}>
                    <IconComponent className="text-4xl md:text-5xl" />
                  </div>
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 mb-2">{stat.number}</div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trending Cards Section */}
      <section className="relative py-8 md:py-12 bg-gradient-to-br  to-blue-700">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 md:mb-8"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3">
              Our Active Initiatives
            </h1>
            <p className="text-blue-200 text-sm md:text-base">
              Community-driven programs serving people, nature, and the environment with compassion
            </p>
          </motion.div>

          {/* Trending Cards Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {trendingCards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative bg-white rounded-2xl shadow-2xl overflow-hidden cursor-pointer"
                >
                  {/* Trending Badge */}
                  <div className={`absolute top-4 right-4 ${card.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold z-10 shadow-lg`}>
                    {card.badge}
                  </div>

                  {/* Image Section */}
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <motion.img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${card.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-4 md:p-5">
                    <h3 className="text-lg md:text-xl font-bold text-blue-800 mb-1 md:mb-2 leading-tight line-clamp-1">
                      {card.title}
                    </h3>
                    <p className="text-sm md:text-base text-orange-600 font-semibold mb-2 md:mb-3">
                      {card.subtitle}
                    </p>
                    <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4 leading-relaxed line-clamp-2">
                      {card.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-1.5 mb-4 md:mb-5">
                      {card.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + idx * 0.1 + 0.3 }}
                          className="flex items-center text-xs md:text-sm text-gray-700"
                        >
                          <span className="text-green-500 mr-1.5 text-sm">✓</span>
                          <span className="line-clamp-1">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-2">
                      <Link
                        to="/initiatives"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md text-xs md:text-sm text-center"
                      >
                        Learn More
                      </Link>
                      <Link
                        to="/volunteer"
                        className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-xs md:text-sm text-center"
                      >
                        Join Us
                      </Link>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:to-blue-600/10 transition-all duration-300 pointer-events-none rounded-2xl"></div>
                </motion.div>
              ))}
            </div>

            {/* Brand Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6 md:mt-8 text-center"
            >
              <p className="text-white/90 text-sm md:text-base">
                <span className="text-orange-400 font-semibold">"Dharmo Rakshati Rakshitah"</span> - Building Trust, Delivering Excellence
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recent Activities & Impact Section */}
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
              Recent Activities & Impact
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
              See how our initiatives are making a real difference in communities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80",
                title: "Massive Plantation Drive",
                date: "March 2024",
                description: "Planted 500+ saplings across 10 communities, creating green spaces and raising environmental awareness.",
                impact: "500+ Trees Planted"
              },
              {
                image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80",
                title: "Community Food Drive",
                date: "February 2024",
                description: "Served nutritious meals to 200+ families during a special festival event, ensuring no one went hungry.",
                impact: "200+ Families Fed"
              },
              {
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
                title: "Water Relief Campaign",
                date: "January 2024",
                description: "Set up 15 water distribution points across the city during peak summer, providing clean drinking water to thousands.",
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
                  <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">{activity.description}</p>
                  <div className="flex items-center text-green-600 font-semibold text-sm md:text-base">
                    <span className="mr-2">✓</span>
                    {activity.impact}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
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
              Upcoming Events
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
              Join us in our upcoming community initiatives and make a difference
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                date: "15",
                month: "Apr",
                title: "Earth Day Plantation Drive",
                location: "City Park",
                time: "8:00 AM - 12:00 PM",
                description: "Join us for a special Earth Day celebration with mass plantation and environmental awareness activities.",
                type: "Environmental"
              },
              {
                date: "22",
                month: "Apr",
                title: "Community Health Camp",
                location: "Community Center",
                time: "10:00 AM - 4:00 PM",
                description: "Free health checkup and medical aid distribution for underprivileged families.",
                type: "Medical"
              },
              {
                date: "30",
                month: "Apr",
                title: "Summer Water Relief Program",
                location: "Multiple Locations",
                time: "All Day",
                description: "Setting up water distribution points across the city to help people beat the summer heat.",
                type: "Relief"
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md p-4 md:p-6 mb-4 md:mb-6 flex flex-col md:flex-row gap-4 md:gap-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex-shrink-0 text-center md:text-left">
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-lg p-4 w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center">
                    <div className="text-2xl md:text-3xl font-bold">{event.date}</div>
                    <div className="text-xs md:text-sm font-semibold">{event.month}</div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {event.type}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-blue-800 mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base mb-3">{event.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {event.time}
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0 flex items-center">
                  <Link
                    to="/contact"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base whitespace-nowrap"
                  >
                    Join Event
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Involved Section */}
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
              How to Get Involved
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
              There are many ways you can contribute to our mission and make a positive impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: FaUsers,
                title: "Become a Volunteer",
                description: "Join our team of dedicated volunteers and participate in various community initiatives.",
                action: "Sign Up"
              },
              {
                icon: FaMoneyBill,
                title: "Donate",
                description: "Your financial contribution helps us reach more people and expand our programs.",
                action: "Donate Now"
              },
              {
                icon: FaSeedling,
                title: "Sponsor a Tree",
                description: "Contribute to our plantation drives by sponsoring trees for a greener environment.",
                action: "Sponsor"
              },
              {
                icon: FaBox,
                title: "Donate Supplies",
                description: "Contribute clothes, food items, or medical supplies to support our relief programs.",
                action: "Contact Us"
              }
            ].map((way, index) => {
              const IconComponent = way.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md border border-blue-100 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="mb-4 flex justify-center text-blue-600">
                    <IconComponent className="text-5xl md:text-6xl" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-blue-800 mb-3">{way.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">{way.description}</p>
                  <Link
                    to="/contact"
                    className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base"
                  >
                    {way.action}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 md:py-16 bg-gray-50">
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
                Welcome to Anand Youth
              </h2>
              <div className="w-16 md:w-20 h-1  mx-auto mb-4 md:mb-6"></div>
              <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed px-2">
                Anand Youth is a mission-driven community initiative dedicated to serving society with compassion, 
                responsibility, and humanity. We believe that true progress begins with collective effort, and our 
                youth-driven programs are designed to support people, nature, and the environment in meaningful ways. 
                Through a wide range of social welfare activities, we strive to bring positive change to every corner of the community.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="px-2"
              >
                <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-3 md:mb-4">Our Mission</h3>
                <p className="text-gray-700 mb-3 md:mb-4 leading-relaxed text-sm md:text-base">
                  "Dharmo Rakshati Rakshitah" - this ancient wisdom forms the bedrock of our operations. 
                  We believe that when you serve society with righteousness and compassion, positive change follows naturally.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  Through our diverse initiatives in environmental care, water relief, food support, clothing distribution, 
                  medical aid, dignified last rites, animal care, and disaster relief, we aim to build a society rooted in 
                  compassion, responsibility, environmental protection, human dignity, and community unity.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-4 md:p-6 rounded-xl shadow-lg mx-2"
              >
                <h4 className="text-lg md:text-xl font-semibold text-blue-800 mb-3 md:mb-4">What We Do</h4>
                <ul className="space-y-2 md:space-y-3">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2 md:mr-3 mt-1 text-sm">•</span>
                    <span className="text-gray-700 text-sm md:text-base">Environmental care through plantation drives and green living</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2 md:mr-3 mt-1 text-sm">•</span>
                    <span className="text-gray-700 text-sm md:text-base">Water relief and hydration support in public spaces</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2 md:mr-3 mt-1 text-sm">•</span>
                    <span className="text-gray-700 text-sm md:text-base">Food support ensuring no one sleeps hungry</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2 md:mr-3 mt-1 text-sm">•</span>
                    <span className="text-gray-700 text-sm md:text-base">Clothing, medical aid, and dignified services for all</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
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
              The Anand Youth Impact
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
              Making a meaningful difference through compassionate community service and youth-driven initiatives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto px-2">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-blue-50 to-white p-4 md:p-6 rounded-xl shadow-md border border-blue-100 text-center"
              >
                <div className="mb-3 md:mb-4 flex justify-center text-blue-600">
                  <feature.icon className="text-3xl md:text-4xl" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-blue-800 mb-2 md:mb-3 leading-tight">{feature.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Carousel - Responsive (1 on mobile, 3 on desktop) */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 mb-3 md:mb-4">
              Community Voices
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
              Stories from community members whose lives have been touched by our initiatives
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto px-2">
            {/* Review Carousel - Responsive Layout */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentReviewSet}
                  variants={reviewVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={`grid gap-4 md:gap-6 ${
                    window.innerWidth < 768 ? 'grid-cols-1' : 'grid-cols-3'
                  }`}
                >
                  {currentReviews.map((review) => (
                    <div key={review.id} className="bg-white rounded-xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-all duration-300">
                      <StarRating rating={review.rating} />
                      <blockquote className="text-gray-700 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed min-h-[80px] md:min-h-[96px]">
                        "{review.comment}"
                      </blockquote>
                      <div className="flex items-center space-x-2 md:space-x-3">
                        <div className="text-blue-600">
                          <review.avatar className="text-2xl md:text-3xl" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 text-sm md:text-base">{review.name}</div>
                          <div className="text-xs text-gray-600">{review.location}</div>
                          <div className="text-xs text-gray-500">{review.date}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Dots */}
              <div className="flex justify-center space-x-2 mt-6 md:mt-8">
                {[...Array(Math.ceil(reviews.length / (window.innerWidth < 768 ? 1 : 3)))].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReviewSet(index)}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                      index === currentReviewSet ? 'bg-orange-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Reviews Summary */}
            <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-center">
              <div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 mb-1 md:mb-2">1000+</div>
                <div className="text-gray-600 font-semibold text-sm md:text-base">Lives Impacted</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-600 mb-1 md:mb-2">50+</div>
                <div className="text-gray-600 font-semibold text-sm md:text-base">Initiatives Completed</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-600 mb-1 md:mb-2">200+</div>
                <div className="text-gray-600 font-semibold text-sm md:text-base">Active Volunteers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Our Community Programs
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
              Comprehensive welfare initiatives designed to support people, nature, and the environment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto px-2">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-4 md:p-6">
                  <div className="mb-3 md:mb-4 text-center text-blue-600 flex justify-center">
                    <service.icon className="text-4xl md:text-5xl" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-blue-800 mb-2 md:mb-3 text-center leading-tight">{service.title}</h3>
                  <p className="text-gray-600 text-center mb-3 md:mb-4 text-sm md:text-base">{service.description}</p>
                  <ul className="space-y-1 md:space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700 text-xs md:text-sm">
                        <span className="text-orange-500 mr-1 md:mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
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
              Our Guiding Principles
            </h2>
            <p className="text-base md:text-lg text-gray-600 px-2">
              The values that drive every decision and action at Anand YOUTH
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto px-2">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-4 md:p-6"
              >
                <div className="mb-3 md:mb-4 text-orange-500 flex justify-center">
                  <value.icon className="text-3xl md:text-4xl" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-blue-800 mb-2 md:mb-3 leading-tight">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Initiatives Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-green-50 via-blue-50 to-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 mb-3 md:mb-4">
              ANAND YOUTH – OUR INITIATIVES
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed px-2">
              A wide range of welfare initiatives focused on community service, environmental protection, 
              human dignity, and animal care. Each initiative is driven by compassion and the belief that 
              every small act of kindness can create a big impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto px-2">
            {[
              {
                id: 1,
                title: "Environmental Care & Green Living",
                icon: FaLeaf,
                color: "from-green-500 to-emerald-600",
                bgColor: "bg-green-50",
                borderColor: "border-green-200",
                image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
                activities: [
                  {
                    icon: FaTree,
                    title: "Plantation Drives",
                    description: "Regular tree-planting activities to promote greenery, reduce pollution, and encourage a healthier environment for future generations."
                  },
                  {
                    icon: FaSeedling,
                    title: "Free Plant Distribution",
                    description: "Plants distributed to schools, households, and communities to motivate eco-friendly living and increase awareness about nature conservation."
                  }
                ]
              },
              {
                id: 2,
                title: "Water Relief & Hydration Support",
                icon: FaTint,
                color: "from-blue-500 to-cyan-600",
                bgColor: "bg-blue-50",
                borderColor: "border-blue-200",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
                activities: [
                  {
                    icon: FaFaucet,
                    title: "Drinking Water Supply",
                    description: "Clean drinking water provided in public spaces, events, and areas facing water scarcity—ensuring health, hydration, and immediate relief for the community."
                  }
                ]
              },
              {
                id: 3,
                title: "Food Support & Free Meals",
                icon: FaUtensils,
                color: "from-orange-500 to-red-600",
                bgColor: "bg-orange-50",
                borderColor: "border-orange-200",
                image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
                activities: [
                  {
                    icon: FaDrumstickBite,
                    title: "Free Food Service",
                    description: "Nutritious meals served to individuals in need. Special food drives organized during festivals, emergencies, and community gatherings so nobody sleeps hungry."
                  }
                ]
              },
              {
                id: 4,
                title: "Clothing & Medical Support",
                icon: FaTshirt,
                color: "from-purple-500 to-pink-600",
                bgColor: "bg-purple-50",
                borderColor: "border-purple-200",
                image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80",
                activities: [
                  {
                    icon: FaTshirt,
                    title: "Cloth Collection & Distribution",
                    description: "Unused clothes collected, washed, repaired, and distributed to underprivileged families, ensuring dignity and comfort for those in need."
                  },
                  {
                    icon: FaPills,
                    title: "Basic Medical Aid",
                    description: "Essential medicines and basic health support provided for people who cannot afford primary medical care."
                  }
                ]
              },
            
              {
                id: 6,
                title: "Animal Safety & Care",
                icon: FaPaw,
                color: "from-amber-500 to-yellow-600",
                bgColor: "bg-amber-50",
                borderColor: "border-amber-200",
                image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&q=80",
                activities: [
                  {
                    icon: FaLightbulb,
                    title: "Reflective Radium Belts for Animals",
                    description: "Radium belts distributed to stray animals to prevent road accidents and increase their visibility during night hours, ensuring their safety."
                  }
                ]
              },
              {
                id: 7,
                title: "Disaster & Calamity Relief",
                icon: FaExclamationTriangle,
                color: "from-red-500 to-rose-600",
                bgColor: "bg-red-50",
                borderColor: "border-red-200",
                image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80",
                activities: [
                  {
                    icon: FaHardHat,
                    title: "Natural Calamity Support",
                    description: "During floods, storms, fires, and other disasters, our team provides immediate help, relief kits, supplies, and on-ground assistance to affected families."
                  }
                ]
              }
            ].map((initiative, index) => {
              const InitiativeIcon = initiative.icon;
              return (
                <motion.div
                  key={initiative.id}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`${initiative.bgColor} rounded-2xl shadow-lg overflow-hidden border-2 ${initiative.borderColor} group cursor-pointer`}
                >
                  {/* Image Section */}
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <motion.img
                      src={initiative.image}
                      alt={initiative.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${initiative.color} opacity-80`}></div>
                    <div className="absolute top-4 left-4 text-white">
                      <InitiativeIcon className="text-4xl md:text-5xl" />
                    </div>
                    <motion.div
                      className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t ${initiative.color} text-white`}
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <h3 className="text-lg md:text-xl font-bold">{initiative.title}</h3>
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className="p-4 md:p-6">
                    <div className="space-y-4">
                      {initiative.activities.map((activity, actIndex) => {
                        const ActivityIcon = activity.icon;
                        return (
                          <motion.div
                            key={actIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + actIndex * 0.2 + 0.4 }}
                            viewport={{ once: true }}
                            className="flex items-start space-x-3"
                          >
                            <div className="flex-shrink-0 text-blue-600">
                              <ActivityIcon className="text-2xl md:text-3xl" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">
                                {activity.title}
                              </h4>
                              <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                                {activity.description}
                              </p>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Vision Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 md:mt-16 max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-6 md:p-8 text-white shadow-2xl">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center flex items-center justify-center gap-2">
                <FaHeart className="text-red-300" />
                Our Vision Through These Initiatives
              </h3>
              <p className="text-center text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                Through these collective efforts, Anand Youth aims to build a society rooted in:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {[
                  { icon: FaHeart, text: "Compassion" },
                  { icon: FaHandshake, text: "Responsibility" },
                  { icon: FaGlobeAmericas, text: "Environmental Protection" },
                  { icon: FaUsers, text: "Community Unity" }
                ].map((value, idx) => {
                  const VisionIcon = value.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + idx * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                      className="bg-white/20 backdrop-blur-sm rounded-lg p-3 md:p-4 text-center"
                    >
                      <div className="mb-2 flex justify-center">
                        <VisionIcon className="text-2xl md:text-3xl" />
                      </div>
                      <div className="font-semibold text-sm md:text-base">{value.text}</div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg md:text-xl text-blue-200 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
              Join Anand Youth in serving society with compassion and responsibility. Together, we can create 
              positive change in our community and environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link 
                to="/volunteer" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
              >
                Join as Volunteer
              </Link>
              <Link 
                to="/initiatives" 
                className="border border-white text-white hover:bg-white hover:text-blue-800 px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold transition-all duration-300 text-sm md:text-base"
              >
                Explore Initiatives
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;