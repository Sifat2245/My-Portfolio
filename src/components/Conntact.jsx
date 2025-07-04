import { motion, useInView } from "framer-motion"; // eslint-disable-line no-unused-vars
import { useRef, useState } from "react";
import { Mail, MessageCircleMore, MapPin, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "mdsaifuddinahmed360@gmail.com",
      action: "mailto:mdsaifuddinahmed360@gmail.com",
    },
    {
      icon: MessageCircleMore,
      title: "Whatsapp",
      content: "+88 01903-321075",
      action: "whatsapp: +88 01903-321075",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Narayanganj, Dhaka, Bangladesh",
      action: "https://www.google.com/maps/place/Narayanganj/@23.638887,90.4102529,12z/data=!3m1!4b1!4m6!3m5!1s0x3755b10812a520a3:0x6d3af4457bec4c90!8m2!3d23.642881!4d90.488286!16zL20vMDZtNTNj?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="pb-32 px-4 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-display font-bold gradient-text mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8c0829] to-[#7b1e3b] mx-auto mb-8"></div>
          <p className="text-xl text-[#ffebf3]/80 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your next project
            and create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-display font-bold gradient-text mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.title}
                    href={info.action}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-[#8c0829]/10 transition-all duration-200 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#8c0829] to-[#7b1e3b] rounded-full flex items-center justify-center group-hover:animate-glow">
                      <info.icon size={24} className="text-[#ffebf3]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#ffebf3] group-hover:text-[#8c0829] transition-colors">
                        {info.title}
                      </h4>
                      <p className="text-[#ffebf3]/70">{info.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-effect p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-display font-bold gradient-text mb-4">
                Let's Build Something Great
              </h3>
              <p className="text-[#ffebf3]/80 leading-relaxed">
                I'm always excited to work on new projects and collaborate with
                amazing people. Whether you need a full-stack web application, a
                stunning frontend, or just want to discuss ideas, I'm here to
                help.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass-effect p-8 rounded-2xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle
                    size={64}
                    className="text-[#8c0829] mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-display font-bold text-[#8c0829] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-[#ffebf3]/80">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[#ffebf3]/80 mb-2 font-medium">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#1c1c1c]/50 border border-[#ffebf3]/20 rounded-lg focus:border-[#8c0829] focus:outline-none focus:ring-2 focus:ring-[#8c0829]/20 transition-all duration-200 text-[#ffebf3]"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-[#ffebf3]/80 mb-2 font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#1c1c1c]/50 border border-[#ffebf3]/20 rounded-lg focus:border-[#8c0829] focus:outline-none focus:ring-2 focus:ring-[#8c0829]/20 transition-all duration-200 text-[#ffebf3]"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#ffebf3]/80 mb-2 font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#1c1c1c]/50 border border-[#ffebf3]/20 rounded-lg focus:border-[#8c0829] focus:outline-none focus:ring-2 focus:ring-[#8c0829]/20 transition-all duration-200 text-[#ffebf3]"
                      placeholder="Project Discussion"
                    />
                  </div>

                  <div>
                    <label className="block text-text/80 mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-[#1c1c1c]/50 border border-[#ffebf3]/20 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-text resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-[#8c0829] hover:bg-[#8c0829]/90 text-[#ffebf3] rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed animate-glow"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-[#ffebf3]/30 border-t-[#ffebf3] rounded-full"
                      />
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
