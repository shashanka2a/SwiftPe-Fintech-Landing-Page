"use client"

import { Card, CardContent } from "./ui/card";
import { ArrowDown, ArrowRight, CreditCard, Zap, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

export function HowItWorksSection() {
  const steps = [
    {
      icon: <CreditCard className="h-7 w-7 text-white" />,
      title: "Connect Wallet",
      description: "no gas fees",
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      icon: <Zap className="h-7 w-7 text-white" />,
      title: "Enter Details",
      description: "live FX rates",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: <CheckCircle2 className="h-7 w-7 text-white" />,
      title: "Money Delivered",
      description: "instant receipt",
      gradient: "from-blue-500 to-indigo-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How SwiftPe Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Send USDC from anywhere and deliver INR to any Indian bank account in 3 simple steps.
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop Layout */}
        <div className="hidden md:block relative">
          {/* Progress Line */}
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-full max-w-2xl h-0.5 bg-gradient-to-r from-teal-200 via-cyan-200 to-blue-200 z-0"></div>

          <div className="grid grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <motion.div
                  className="relative group"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Card className="text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm group-hover:bg-white">
                    <CardContent className="p-8">
                      {/* Large Step Number with Gradient */}
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                        <span className="text-white font-bold text-xl">{index + 1}</span>
                      </div>

                      {/* Icon */}
                      <div className={`w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-xl flex items-center justify-center mb-4 mx-auto opacity-90`}>
                        {step.icon}
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-500 text-sm font-medium">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Arrow Connector */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-16 -right-6 transform -translate-y-1/2 z-20">
                      <motion.div
                        className="w-12 h-8 flex items-center justify-center"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <ArrowRight className="h-5 w-5 text-teal-400" strokeWidth={2.5} />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      {/* Step Number */}
                      <div className={`w-14 h-14 bg-gradient-to-br ${step.gradient} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          {step.title}
                        </h3>
                        <p className="text-gray-500 text-sm font-medium">
                          {step.description}
                        </p>
                      </div>

                      {/* Icon */}
                      <div className={`w-10 h-10 bg-gradient-to-br ${step.gradient} rounded-lg flex items-center justify-center opacity-90 flex-shrink-0`}>
                        {step.icon}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Mobile Arrow */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-3">
                    <motion.div
                      animate={{ y: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowDown className="h-5 w-5 text-teal-400" strokeWidth={2.5} />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Enhanced CTA */}
        <ScrollReveal>
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-100">
              <div className="w-2 h-2 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full mr-3 animate-pulse"></div>
              <p className="text-gray-700 font-medium">
                Ready to make your first transfer? It takes less than 2 minutes to get started.
              </p>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}