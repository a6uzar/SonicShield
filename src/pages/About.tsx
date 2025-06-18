
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Info, 
  Shield, 
  Brain, 
  Database, 
  Users, 
  Award,
  Github,
  Linkedin,
  Mail,
  ExternalLink
} from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "AI Research Lead",
      expertise: "Deep Learning, Audio Processing",
      image: "/api/placeholder/120/120",
      social: { github: "#", linkedin: "#", email: "sarah@crimesound.ai" }
    },
    {
      name: "Marcus Rodriguez",
      role: "Full-Stack Developer",
      expertise: "React, Node.js, Cloud Architecture",
      image: "/api/placeholder/120/120",
      social: { github: "#", linkedin: "#", email: "marcus@crimesound.ai" }
    },
    {
      name: "Priya Patel",
      role: "Data Scientist",
      expertise: "Machine Learning, Signal Processing",
      image: "/api/placeholder/120/120",
      social: { github: "#", linkedin: "#", email: "priya@crimesound.ai" }
    },
    {
      name: "James Wilson",
      role: "Security Consultant",
      expertise: "Cybersecurity, Risk Assessment",
      image: "/api/placeholder/120/120",
      social: { github: "#", linkedin: "#", email: "james@crimesound.ai" }
    }
  ];

  const datasets = [
    {
      name: "UrbanSound8K",
      description: "Urban sound classification dataset",
      samples: "8,732 samples",
      classes: "10 classes"
    },
    {
      name: "ESC-50",
      description: "Environmental Sound Classification",
      samples: "2,000 samples", 
      classes: "50 classes"
    },
    {
      name: "AudioSet",
      description: "Large-scale audio event dataset",
      samples: "2M+ samples",
      classes: "632 classes"
    },
    {
      name: "Custom Dataset",
      description: "Proprietary crime-related audio data",
      samples: "5,000+ samples",
      classes: "15 classes"
    }
  ];

  const technologies = [
    { name: "TensorFlow", category: "Deep Learning" },
    { name: "Librosa", category: "Audio Processing" },
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Docker", category: "DevOps" },
    { name: "AWS", category: "Cloud" },
    { name: "MongoDB", category: "Database" },
    { name: "Redis", category: "Caching" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
            <Info className="mr-3 h-10 w-10 text-cyan-400" />
            About CrimeSound AI
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionizing public safety through advanced AI-powered audio classification 
            and real-time threat detection systems.
          </p>
        </motion.div>

        {/* Problem Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <Card className="bg-slate-800/50 backdrop-blur-sm border-red-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Shield className="mr-2 h-6 w-6 text-red-400" />
                The Problem We're Solving
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Critical Challenges</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>Emergency response teams often lack real-time situational awareness</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>Manual audio monitoring is time-intensive and error-prone</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>Critical incidents may go undetected in high-noise environments</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>Traditional security systems focus on visual, not audio threats</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Our Solution</h3>
                  <p className="text-gray-300 leading-relaxed">
                    CrimeSound AI leverages cutting-edge deep learning models to automatically 
                    classify audio streams in real-time, detecting potential threats like gunshots, 
                    screams, and glass breaking with high accuracy. Our system provides instant 
                    alerts to security personnel, enabling rapid response and potentially saving lives.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Motivation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <Card className="bg-slate-800/50 backdrop-blur-sm border-cyan-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Brain className="mr-2 h-6 w-6 text-cyan-400" />
                Our Motivation: Unheard Voices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-invert max-w-none">
                <blockquote className="border-l-4 border-cyan-500 pl-6 italic text-gray-300 text-lg mb-6">
                  "In moments of crisis, every second counts. Our mission is to give voice to the unheard 
                  and provide the tools needed to respond swiftly to emergencies."
                </blockquote>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 rounded-lg bg-slate-700/30 border border-slate-600/30">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">94.2%</div>
                    <div className="text-sm text-gray-300">Classification Accuracy</div>
                  </div>
                  <div className="text-center p-6 rounded-lg bg-slate-700/30 border border-slate-600/30">
                    <div className="text-3xl font-bold text-purple-400 mb-2">&lt;1.2s</div>
                    <div className="text-sm text-gray-300">Response Time</div>
                  </div>
                  <div className="text-center p-6 rounded-lg bg-slate-700/30 border border-slate-600/30">
                    <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                    <div className="text-sm text-gray-300">Continuous Monitoring</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Datasets */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Database className="mr-2 h-6 w-6 text-purple-400" />
                Training Datasets
              </CardTitle>
              <CardDescription>
                Comprehensive audio datasets used to train our classification models
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {datasets.map((dataset, index) => (
                  <motion.div
                    key={dataset.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index }}
                    className="p-4 rounded-lg bg-slate-700/30 border border-slate-600/30 hover:border-purple-500/30 transition-all duration-300"
                  >
                    <h4 className="font-semibold text-white mb-2">{dataset.name}</h4>
                    <p className="text-sm text-gray-400 mb-3">{dataset.description}</p>
                    <div className="space-y-1">
                      <Badge variant="outline" className="text-xs mr-2 mb-1 border-gray-600 text-gray-300">
                        {dataset.samples}
                      </Badge>
                      <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                        {dataset.classes}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Technology Stack */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <Card className="bg-slate-800/50 backdrop-blur-sm border-green-500/30">
            <CardHeader>
              <CardTitle className="text-white">Technology Stack</CardTitle>
              <CardDescription>
                Modern technologies powering our AI-driven platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index }}
                    className="p-3 rounded-lg bg-slate-700/30 border border-slate-600/30 text-center hover:border-green-500/30 transition-all duration-300"
                  >
                    <div className="font-medium text-white text-sm">{tech.name}</div>
                    <div className="text-xs text-gray-400 mt-1">{tech.category}</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Team */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <Card className="bg-slate-800/50 backdrop-blur-sm border-orange-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Users className="mr-2 h-6 w-6 text-orange-400" />
                Meet Our Team
              </CardTitle>
              <CardDescription>
                Passionate experts dedicated to advancing public safety through AI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="text-center p-6 rounded-lg bg-slate-700/30 border border-slate-600/30 hover:border-orange-500/30 transition-all duration-300"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <h4 className="font-semibold text-white mb-1">{member.name}</h4>
                    <p className="text-sm text-cyan-400 mb-2">{member.role}</p>
                    <p className="text-xs text-gray-400 mb-4">{member.expertise}</p>
                    <div className="flex justify-center space-x-2">
                      <Button variant="ghost" size="sm" className="p-2 h-8 w-8 text-gray-400 hover:text-white">
                        <Github className="h-3 w-3" />
                      </Button>
                      <Button variant="ghost" size="sm" className="p-2 h-8 w-8 text-gray-400 hover:text-white">
                        <Linkedin className="h-3 w-3" />
                      </Button>
                      <Button variant="ghost" size="sm" className="p-2 h-8 w-8 text-gray-400 hover:text-white">
                        <Mail className="h-3 w-3" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 backdrop-blur-sm border-cyan-500/30">
            <CardContent className="p-8">
              <Award className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Join Our Mission</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Interested in contributing to public safety innovation? We're always looking for 
                talented individuals to join our team and help build a safer tomorrow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View GitHub Repository
                </Button>
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
