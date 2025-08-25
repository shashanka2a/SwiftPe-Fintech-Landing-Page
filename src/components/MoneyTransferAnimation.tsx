"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, DollarSign, IndianRupee } from "lucide-react";

export function MoneyTransferAnimation() {
    const [currentStep, setCurrentStep] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const steps = [
        { usd: 300, inr: 0, status: "ready" },
        { usd: 300, inr: 0, status: "converting" },
        { usd: 0, inr: 25050, status: "complete" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentStep((prev) => (prev + 1) % steps.length);
                setIsAnimating(false);
            }, 500);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const currentData = steps[currentStep];

    return (
        <div className="relative w-full max-w-md mx-auto">
            {/* Main container with phone-like appearance */}
            <div className="bg-white rounded-3xl shadow-2xl p-6 border-8 border-gray-800 relative overflow-hidden">
                {/* Status bar */}
                <div className="flex justify-between items-center mb-6 text-xs text-gray-500">
                    <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    </div>
                    <span>SwiftPe</span>
                    <div className="flex items-center space-x-1">
                        <div className="w-4 h-2 border border-gray-400 rounded-sm">
                            <div className="w-3 h-1 bg-green-400 rounded-sm"></div>
                        </div>
                    </div>
                </div>

                {/* Header */}
                <div className="text-center mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Send Money</h3>
                    <p className="text-sm text-gray-500">USD to INR Transfer</p>
                </div>

                {/* Currency containers */}
                <div className="space-y-4">
                    {/* USD Section */}
                    <motion.div
                        className="bg-blue-50 rounded-2xl p-4 border-2 border-blue-200"
                        animate={{
                            scale: currentData.status === "converting" && currentData.usd > 0 ? 0.95 : 1,
                            opacity: currentData.usd === 0 ? 0.3 : 1
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                                    <DollarSign className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-600">From</div>
                                    <div className="font-semibold text-gray-900">USD</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentData.usd}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="text-2xl font-bold text-blue-600"
                                    >
                                        ${currentData.usd}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>

                    {/* Transfer Arrow */}
                    <div className="flex justify-center py-6">
                        <motion.div
                            animate={{
                                rotate: currentData.status === "converting" ? 360 : 0,
                                scale: currentData.status === "converting" ? 1.3 : 1.1
                            }}
                            transition={{
                                rotate: { duration: 1, ease: "easeInOut" },
                                scale: { duration: 0.3 }
                            }}
                            className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-xl border-4 border-white relative"
                        >
                            <ArrowRight className="w-8 h-8 text-white" strokeWidth={3} />

                            {/* Pulsing ring effect */}
                            <motion.div
                                className="absolute inset-0 rounded-full border-2 border-blue-400"
                                animate={{
                                    scale: currentData.status === "converting" ? [1, 1.4, 1] : 1,
                                    opacity: currentData.status === "converting" ? [0.8, 0, 0.8] : 0
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: currentData.status === "converting" ? Infinity : 0,
                                    ease: "easeInOut"
                                }}
                            />
                        </motion.div>
                    </div>

                    {/* INR Section */}
                    <motion.div
                        className="bg-green-50 rounded-2xl p-4 border-2 border-green-200"
                        animate={{
                            scale: currentData.status === "converting" && currentData.inr === 0 ? 0.95 : 1,
                            opacity: currentData.inr === 0 ? 0.3 : 1
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                                    <IndianRupee className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-600">To</div>
                                    <div className="font-semibold text-gray-900">INR</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentData.inr}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="text-2xl font-bold text-green-600"
                                    >
                                        ₹{currentData.inr.toLocaleString()}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Status indicator */}
                <div className="mt-6 text-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentData.status}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center justify-center space-x-2"
                        >
                            {currentData.status === "ready" && (
                                <>
                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                    <span className="text-sm text-gray-600">Ready to send</span>
                                </>
                            )}
                            {currentData.status === "converting" && (
                                <>
                                    <motion.div
                                        className="w-2 h-2 bg-yellow-400 rounded-full"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ repeat: Infinity, duration: 1 }}
                                    ></motion.div>
                                    <span className="text-sm text-gray-600">Converting...</span>
                                </>
                            )}
                            {currentData.status === "complete" && (
                                <>
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    <span className="text-sm text-gray-600">Transfer complete!</span>
                                </>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Floating particles for visual effect */}
                <AnimatePresence>
                    {currentData.status === "converting" && (
                        <>
                            {[...Array(6)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-1 h-1 bg-blue-400 rounded-full"
                                    initial={{
                                        x: Math.random() * 300,
                                        y: Math.random() * 400,
                                        opacity: 0
                                    }}
                                    animate={{
                                        x: Math.random() * 300,
                                        y: Math.random() * 400,
                                        opacity: [0, 1, 0]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.2
                                    }}
                                />
                            ))}
                        </>
                    )}
                </AnimatePresence>
            </div>

            {/* Success notification */}
            <AnimatePresence>
                {currentData.status === "complete" && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.8 }}
                        className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-2 rounded-lg shadow-lg text-sm font-medium"
                    >
                        ✓ Sent successfully!
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}