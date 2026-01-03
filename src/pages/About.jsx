import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'React/Next.js', level: 95, color: 'bg-olive' },
    { name: 'Node.js/Express', level: 90, color: 'bg-maroon' },
    { name: 'Tailwind CSS', level: 98, color: 'bg-olive' },
    { name: 'MongoDB', level: 85, color: 'bg-maroon' },
    { name: 'TypeScript', level: 88, color: 'bg-olive' },
    { name: 'AWS/DevOps', level: 80, color: 'bg-maroon' },
  ];

  const experiences = [
    { year: '2023-Present', role: 'Senior Full Stack Developer', company: 'TechVision Inc.' },
    { year: '2021-2023', role: 'Frontend Lead', company: 'Digital Solutions Ltd.' },
    { year: '2019-2021', role: 'Web Developer', company: 'Creative Agency' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-olive-light/10 rounded-full mb-6">
              <Award className="w-4 h-4 text-olive mr-2" />
              <span className="text-sm font-medium text-olive-dark">5+ Years Experience</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-maroon">Me</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              I'm a passionate full-stack developer with expertise in modern web technologies. 
              My journey in web development started 5 years ago, and since then I've been 
              helping businesses transform their ideas into digital reality.
            </p>
            
            <div className="space-y-4">
              {[
                'Pixel-perfect implementation',
                'Performance optimization',
                'Clean & maintainable code',
                'Responsive design'
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <CheckCircle className="w-5 h-5 text-olive mr-3" />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl border border-gray-200">
              <div className="aspect-square rounded-xl overflow-hidden mb-8">
                <div className="w-full h-full bg-gradient-to-r from-olive to-maroon flex items-center justify-center">
                  <span className="text-white text-6xl font-bold">DEV</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-maroon mb-2">50+</div>
                  <div className="text-gray-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-olive mb-2">100%</div>
                  <div className="text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technical <span className="text-olive">Skills</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proficient in modern web development technologies and frameworks
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="mb-8"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-900">{skill.name}</span>
                  <span className="font-bold text-maroon">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    className={`h-full ${skill.color} rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Work <span className="text-maroon">Experience</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              My professional journey in the tech industry
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start mb-12`}
              >
                <div className="md:w-1/2 md:px-8 mb-6 md:mb-0">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                    <div className="flex items-center mb-4">
                      <Clock className="w-5 h-5 text-olive mr-2" />
                      <span className="font-bold text-maroon">{exp.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.role}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>
                </div>
                
                <div className="hidden md:block relative">
                  <div className="w-4 h-4 bg-maroon rounded-full"></div>
                  {index !== experiences.length - 1 && (
                    <div className="absolute top-4 left-2 w-0.5 h-24 bg-gradient-to-b from-maroon to-olive"></div>
                  )}
                </div>
                
                <div className="md:w-1/2 md:px-8"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gradient-to-r from-olive/5 to-maroon/5 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My <span className="text-olive">Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Collaboration',
                description: 'Working closely with clients to achieve shared goals'
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: 'Quality',
                description: 'Delivering high-quality, tested, and maintainable code'
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: 'Timely Delivery',
                description: 'Respecting deadlines and delivering on time'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-6 text-maroon">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;