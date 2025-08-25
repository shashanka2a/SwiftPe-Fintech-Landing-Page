import { Badge } from "./ui/badge";
import { Shield, Award, Lock, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { ScrollReveal } from "./ScrollReveal";

export function TrustSection() {
  const trustLogos = [
    { name: "Circle", description: "Powered by Circle USDC", verified: true },
    { name: "Polygon", description: "Multichain Support", verified: true },
    { name: "Ethereum", description: "Built on Ethereum", verified: true },
    { name: "Chainlink", description: "Price Oracles", verified: true },
    { name: "AWS", description: "Cloud Infrastructure", verified: true },
    { name: "Stripe", description: "Payment Processing", verified: true }
  ];

  const certifications = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "SOC 2 Type II",
      description: "Certified security controls",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "ISO 27001",
      description: "Information security management",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "FINCEN Registered",
      description: "Licensed money transmitter",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "KYC/AML Compliant",
      description: "Full regulatory compliance",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const securityFeatures = [
    { icon: "🔐", title: "Multi-Signature Wallets", description: "All transactions require multiple approvals for maximum security" },
    { icon: "🛡️", title: "Cold Storage", description: "95% of funds stored offline in secure cold storage vaults" },
    { icon: "📊", title: "Real-Time Monitoring", description: "24/7 fraud detection and transaction monitoring systems" }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white border-t border-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50/50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Logos */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <h3 className="text-lg font-medium text-gray-500 mb-12">
              Trusted by leading organizations and powered by
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {trustLogos.map((logo, index) => (
                <motion.div 
                  key={logo.name}
                  className="text-center group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300 shadow-sm"
                    whileHover={{ rotate: 5 }}
                  >
                    <span className="text-xl font-bold text-gray-600 group-hover:text-blue-600 transition-colors">
                      {logo.name[0]}
                    </span>
                  </motion.div>
                  <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                    {logo.name}
                  </div>
                  <div className="text-xs text-gray-500">{logo.description}</div>
                  {logo.verified && (
                    <motion.div
                      className="inline-flex items-center mt-1"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                    >
                      <CheckCircle className="w-3 h-3 text-green-500" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Security & Compliance */}
        <ScrollReveal>
          <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl p-8 lg:p-12 border border-gray-200/50 shadow-xl">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200/50 text-blue-800 text-sm font-medium mb-6"
              >
                🔒 Security & Compliance
              </motion.div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Security & Compliance First
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Your funds and data are protected by enterprise-grade security measures 
                and full regulatory compliance.
              </p>
            </div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={cert.title}
                  className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div 
                    className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${cert.color} text-white rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {cert.icon}
                  </motion.div>
                  <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                    {cert.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Security Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {securityFeatures.map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="text-3xl mb-4"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Compliance Badges */}
            <motion.div 
              className="flex flex-wrap justify-center gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {[
                { label: "FinCEN Registered", color: "bg-green-100 text-green-800" },
                { label: "PCI DSS Compliant", color: "bg-blue-100 text-blue-800" },
                { label: "GDPR Compliant", color: "bg-purple-100 text-purple-800" },
                { label: "SOX Compliant", color: "bg-orange-100 text-orange-800" }
              ].map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 1, type: "spring" }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Badge variant="secondary" className={`${badge.color} hover:shadow-md transition-shadow`}>
                    {badge.label}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}