import { motion } from 'framer-motion'
import { Download, Zap, Image, Palette, Star, CheckCircle } from 'lucide-react'

const LandingPage = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Unlimited Generation",
      description: "No credit limits or restrictions. Generate as many images as you want."
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: "Batch Processing",
      description: "Generate multiple images simultaneously with our advanced batch system."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Professional Styles",
      description: "Access to premium art styles and advanced customization options."
    }
  ]

  const benefits = [
    "No monthly subscriptions",
    "Offline processing capability",
    "High-resolution outputs",
    "Commercial license included",
    "Regular model updates",
    "Priority support"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Pixel Wizard AI
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The ultimate desktop application for unlimited AI image generation. 
            Create stunning visuals without limits, subscriptions, or restrictions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-4"
          >
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto shadow-2xl">
              <Download className="w-5 h-5" />
              Download for Windows
            </button>
            
            <div className="flex items-center justify-center gap-2 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
              <span className="text-gray-300 ml-2">4.9/5 from 10,000+ users</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Powerful Features
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:bg-slate-700/50 transition-all duration-300"
            >
              <div className="text-purple-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Why Choose Pixel Wizard AI?
            </h2>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-lg text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-2xl p-8 border border-purple-500/30"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">
                $49.99
              </div>
              <div className="text-gray-400 mb-6">
                One-time purchase
              </div>
              <div className="space-y-3 text-left">
                <div className="flex justify-between">
                  <span className="text-gray-300">Unlimited generations</span>
                  <span className="text-green-400">✓</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Commercial license</span>
                  <span className="text-green-400">✓</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Lifetime updates</span>
                  <span className="text-green-400">✓</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">24/7 Support</span>
                  <span className="text-green-400">✓</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-purple-800/20 to-blue-800/20 rounded-2xl p-12 border border-purple-500/30"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Start Creating?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of artists, designers, and content creators who have already 
            unlocked unlimited creativity with Pixel Wizard AI.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-lg text-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto shadow-2xl">
            <Download className="w-6 h-6" />
            Download Now - $49.99
          </button>
          <p className="text-sm text-gray-400 mt-4">
            30-day money-back guarantee • Windows 10/11 compatible
          </p>
        </motion.div>
      </section>
    </div>
  )
}

export default LandingPage
