"use client"

import { Button } from "./ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/10" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-300/10 rounded-full blur-xl" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Start Sending Money to India Today
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join our early community and experience the future of cross-border payments. 
              No setup fees, just fast and secure transfers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Early Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-3 transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Join Waitlist
              </Button>
            </div>

            {/* Simple early user benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto text-blue-100">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-lg">🚀</span>
                <span className="text-sm">Early access features</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-lg">💰</span>
                <span className="text-sm">Zero setup fees</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-lg">🎯</span>
                <span className="text-sm">Priority support</span>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}