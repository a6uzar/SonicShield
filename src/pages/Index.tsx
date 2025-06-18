
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Upload, Activity, Shield, BarChart3, Play, Zap, Users, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalUploads: 0,
    activeMonitors: 0,
    threatsDetected: 0,
    accuracy: 0
  });

  const [recentDetections, setRecentDetections] = useState([
    { id: 1, type: "gun_shot", confidence: 0.94, timestamp: "2 min ago", location: "Downtown District" },
    { id: 2, type: "glass_breaking", confidence: 0.87, timestamp: "5 min ago", location: "Shopping Mall" },
    { id: 3, type: "scream", confidence: 0.91, timestamp: "8 min ago", location: "Residential Area" },
    { id: 4, type: "siren", confidence: 0.98, timestamp: "12 min ago", location: "Highway 101" }
  ]);

  useEffect(() => {
    // Simulate loading stats
    const timer = setTimeout(() => {
      setStats({
        totalUploads: 2847,
        activeMonitors: 24,
        threatsDetected: 13,
        accuracy: 94.2
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const getTypeColor = (type: string) => {
    const colors = {
      gun_shot: "bg-red-500/20 text-red-400 border-red-500/30",
      glass_breaking: "bg-orange-500/20 text-orange-400 border-orange-500/30",
      scream: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      siren: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      engine_idling: "bg-gray-500/20 text-gray-400 border-gray-500/30",
      normal: "bg-green-500/20 text-green-400 border-green-500/30"
    };
    return colors[type as keyof typeof colors] || colors.normal;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10" />
        <div className="relative px-6 py-24 mx-auto max-w-7xl sm:py-32 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 blur-xl opacity-30 animate-pulse" />
                <div className="relative p-4 rounded-full bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30">
                  <Shield className="w-12 h-12 text-cyan-400" />
                </div>
              </div>
            </motion.div>
            
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI-Powered Crime Sound Detection System
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300 max-w-3xl mx-auto">
              Advanced deep learning technology for real-time audio classification and threat detection. 
              Protecting communities through intelligent surveillance and rapid response systems.
            </p>
            
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                <Upload className="mr-2 h-5 w-5" />
                Upload Audio
              </Button>
              <Button variant="outline" className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-lg font-semibold">
                <Activity className="mr-2 h-5 w-5" />
                Live Monitor
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-6 mx-auto max-w-7xl lg:px-8 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          <Card className="bg-slate-800/50 backdrop-blur-sm border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Total Uploads</CardTitle>
              <Upload className="h-4 w-4 text-cyan-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.totalUploads.toLocaleString()}</div>
              <p className="text-xs text-gray-400">+12% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Active Monitors</CardTitle>
              <Activity className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.activeMonitors}</div>
              <p className="text-xs text-gray-400">Real-time processing</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 backdrop-blur-sm border-red-500/30 hover:border-red-400/50 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Threats Detected</CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.threatsDetected}</div>
              <p className="text-xs text-gray-400">This week</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 backdrop-blur-sm border-green-500/30 hover:border-green-400/50 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Accuracy</CardTitle>
              <BarChart3 className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.accuracy}%</div>
              <Progress value={stats.accuracy} className="mt-2" />
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Detections */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <Card className="bg-slate-800/50 backdrop-blur-sm border-cyan-500/30">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white flex items-center">
                <Zap className="mr-2 h-5 w-5 text-yellow-400" />
                Recent Detections
              </CardTitle>
              <CardDescription className="text-gray-400">
                Latest audio classifications from monitoring systems
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentDetections.map((detection, index) => (
                  <motion.div
                    key={detection.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex items-center justify-between p-4 rounded-lg bg-slate-700/30 border border-slate-600/30 hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      </div>
                      <div>
                        <Badge className={`${getTypeColor(detection.type)} border`}>
                          {detection.type.replace('_', ' ').toUpperCase()}
                        </Badge>
                        <p className="text-sm text-gray-400 mt-1">{detection.location}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-white">
                        {(detection.confidence * 100).toFixed(1)}% confidence
                      </p>
                      <p className="text-xs text-gray-400">{detection.timestamp}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Features Overview */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3"
        >
          <Card className="bg-gradient-to-br from-cyan-900/20 to-cyan-800/20 backdrop-blur-sm border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 group">
            <CardHeader>
              <div className="p-2 w-fit rounded-lg bg-cyan-500/20 group-hover:bg-cyan-500/30 transition-colors">
                <Upload className="h-6 w-6 text-cyan-400" />
              </div>
              <CardTitle className="text-white">Audio Upload & Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Upload audio files for instant AI-powered classification and threat detection with detailed confidence scores.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-900/20 to-purple-800/20 backdrop-blur-sm border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group">
            <CardHeader>
              <div className="p-2 w-fit rounded-lg bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors">
                <Activity className="h-6 w-6 text-purple-400" />
              </div>
              <CardTitle className="text-white">Real-time Monitoring</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Live audio stream analysis with instant alerts and continuous threat assessment for proactive security.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-900/20 to-green-800/20 backdrop-blur-sm border-green-500/30 hover:border-green-400/50 transition-all duration-300 group">
            <CardHeader>
              <div className="p-2 w-fit rounded-lg bg-green-500/20 group-hover:bg-green-500/30 transition-colors">
                <BarChart3 className="h-6 w-6 text-green-400" />
              </div>
              <CardTitle className="text-white">Advanced Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Comprehensive insights with trend analysis, heat maps, and ML explainability for informed decision-making.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
