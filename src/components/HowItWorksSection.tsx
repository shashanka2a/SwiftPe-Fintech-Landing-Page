"use client"

import { Card, CardContent } from "./ui/card";
import { ArrowRight, Wallet, Zap, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

export function HowItWorksSection() {
  const steps = [
    {
      icon: <Wallet className="h-8 w-8 text-blue-600" />,
      title: "Connect Wallet",
      description: "Link your wallet with USDC. We support Circle Wallet, MetaMask, and other popular wallets.",
      highlight: "No gas fees required"
    },
    {
      icon: <Zap className="h-8 w-8 text-purple-600" />,
      title: "Enter Details",
      description: "Add recipient's bank details or UPI ID. Our system converts USDC to INR at live rates.",
      highlight: "Real-time conversion rates"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-green-600" />,
      title: "Money Delivered",
      description: "Recipient gets INR instantly with a detailed receipt. Track your transfer in real-time.",
      highlight: "Instant delivery"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <div className="relative">
                <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-2xl mb-6 mx-auto">
                      {step.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
                      {step.highlight}
                    </div>
                  </CardContent>
                </Card>

                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 -right-4 transform z-10">
                    <ArrowRight className="h-6 w-6 text-gray-300" />
                  </div>
                )}

                {/* Step number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    {index + 1}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Simple call to action */}
        <ScrollReveal>
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">
              Ready to make your first transfer? It takes less than 2 minutes to get started.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}