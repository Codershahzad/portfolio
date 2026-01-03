import { motion } from 'framer-motion';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Palette, Rocket } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Building responsive and scalable web applications',
      color: 'text-maroon'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces',
      color: 'text-olive'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Performance',
      description: 'Optimizing for speed and efficiency',
      color: 'text-maroon'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-3 h-3 bg-olive rounded-full"></div>
              <div className="w-3 h-3 bg-maroon rounded-full"></div>
              <div className="w-3 h-3 bg-olive-light rounded-full"></div>
              <span className="ml-4 text-sm font-medium text-gray-500">AVAILABLE FOR WORK</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gray-900">Crafting Digital</span>
              <span className="block text-maroon mt-2">Experiences</span>
              <span className="text-olive">That Matter</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              I'm a passionate developer specializing in creating modern web applications 
              with clean code and beautiful designs. Let's build something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/projects">
                <Button variant="primary" size="lg" className="flex items-center gap-2">
                  View My Work
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline-olive" size="lg">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="w-full h-96 md:h-[500px] bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-40 h-40 mx-auto mb-6 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-olive to-maroon rounded-full animate-pulse-glow"></div>
                      <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                        <span className="text-4xl font-bold bg-gradient-to-r from-olive to-maroon bg-clip-text text-transparent">
                          DEV
                        </span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Full Stack Developer</h3>
                    <p className="text-gray-500 mt-2">React • Node.js • Tailwind</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-olive-light/20 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-maroon-light/20 rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What I <span className="text-olive">Offer</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive web solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`${service.color} mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'Projects Completed' },
              { value: '5+', label: 'Years Experience' },
              { value: '100%', label: 'Client Satisfaction' },
              { value: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-maroon mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;