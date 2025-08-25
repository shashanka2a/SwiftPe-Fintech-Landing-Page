"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Zap, Shield, Globe, CreditCard } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

export function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "No Gas Fees",
      description: "Send USDC without worrying about blockchain gas costs. We handle all the technical complexity for you.",
      color: "text-yellow-600 bg-yellow-50"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Multichain Support",
      description: "Works with Ethereum, Polygon, and Arbitrum. Send from your preferred blockchain network.",
      color: "text-blue-600 bg-blue-50"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure & Compliant",
      description: "Bank-grade security with full KYC compliance. Your money and data are always protected.",
      color: "text-green-600 bg-green-50"
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "UPI-Style Receipts",
      description: "Get familiar receipt format with transaction details, just like your favorite payment apps.",
      color: "text-purple-600 bg-purple-50"
    }
  ];

  return (
    <section id="features" className="py-16 lg:py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose SwiftPe?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple, fast, and secure cross-border transfers powered by stablecoin technology.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${feature.color} mb-4`}>
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Simple value proposition */}
        <ScrollReveal>
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to send your first transfer?
              </h3>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Join early users who are already sending money to India with zero gas fees and instant delivery.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-500">
                <div className="flex items-center">
                  <span className="text-lg mr-2">⚡</span>
                  <span>Under 30 seconds</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg mr-2">🔒</span>
                  <span>Bank-grade security</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg mr-2">💸</span>
                  <span>No hidden fees</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}