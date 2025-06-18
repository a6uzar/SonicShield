
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Activity, 
  Play, 
  Pause, 
  Volume2, 
  AlertTriangle, 
  Shield, 
  Zap,
  MapPin,
  Clock
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LiveMonitor = () => {
  const [isMonitoring, setIsMonitoring] = useState(true);
  const [currentDetection, setCurrentDetection] = useState(null);
  const [waveformData, setWaveformData] = useState<number[]>([]);
  const [detectionLog, setDetectionLog] = useState([
    { id: 1, type: "gun_shot", confidence: 0.94, timestamp: "14:23:15", location: "Sector A-7", threat: "HIGH" },
    { id: 2, type: "glass_breaking", confidence: 0.87, timestamp: "14:20:32", location: "Sector C-2", threat: "MEDIUM" },
    { id: 3, type: "scream", confidence: 0.91, timestamp: "14:18:07", location: "Sector B-5", threat: "HIGH" },
    { id: 4, type: "siren", confidence: 0.98, timestamp: "14:15:44", location: "Highway-101", threat: "LOW" },
    { id: 5, type: "engine_idling", confidence: 0.76, timestamp: "14:12:18", location: "Sector A-3", threat: "LOW" }
  ]);

  // Simulate real-time waveform data
  useEffect(() => {
    if (!isMonitoring) return;
    
    const interval = setInterval(() => {
      setWaveformData(prev => {
        const newData = [...prev.slice(-50), Math.random() * 100];
        return newData;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isMonitoring]);

  // Simulate new detections
  useEffect(() => {
    if (!isMonitoring) return;
    
    const detectionInterval = setInterval(() => {
      const types = ["gun_shot", "glass_breaking", "scream", "siren", "engine_idling", "normal"];
      const locations = ["Sector A-7", "Sector B-3", "Sector C-1", "Highway-101", "Downtown-Plaza"];
      const threats = ["HIGH", "MEDIUM", "LOW"];
      
      const newDetection = {
        id: Date.now(),
        type: types[Math.floor(Math.random() * types.length)],
        confidence: 0.7 + Math.random() * 0.3,
        timestamp: new Date().toLocaleTimeString(),
        location: locations[Math.floor(Math.random() * locations.length)],
        threat: threats[Math.floor(Math.random() * threats.length)]
      };

      setCurrentDetection(newDetection as any);
      setDetectionLog(prev => [newDetection as any, ...prev.slice(0, 9)]);
    }, 5000);

    return () => clearInterval(detectionInterval);
  }, [isMonitoring]);

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

  const getThreatColor = (threat: string) => {
    const colors = {
      HIGH: "bg-red-500/20 text-red-400 border-red-500/50",
      MEDIUM: "bg-orange-500/20 text-orange-400 border-orange-500/50",
      LOW: "bg-green-500/20 text-green-400 border-green-500/50"
    };
    return colors[threat as keyof typeof colors] || colors.LOW;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white flex items-center">
                <Activity className="mr-3 h-8 w-8 text-cyan-400" />
                Live Audio Monitor
              </h1>
              <p className="text-gray-400 mt-2">Real-time audio classification and threat detection</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Badge className={`px-4 py-2 ${isMonitoring ? 'bg-green-500/20 text-green-400 border-green-500/30 animate-pulse' : 'bg-red-500/20 text-red-400 border-red-500/30'}`}>
                <div className="w-2 h-2 rounded-full bg-current mr-2" />
                {isMonitoring ? 'MONITORING ACTIVE' : 'MONITORING PAUSED'}
              </Badge>
              
              <Button
                onClick={() => setIsMonitoring(!isMonitoring)}
                className={`${isMonitoring ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}`}
              >
                {isMonitoring ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
                {isMonitoring ? 'Pause' : 'Resume'}
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Waveform Visualization */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-2"
          >
            <Card className="bg-slate-800/50 backdrop-blur-sm border-cyan-500/30 h-64">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Volume2 className="mr-2 h-5 w-5 text-cyan-400" />
                  Audio Waveform
                </CardTitle>
                <CardDescription>Real-time audio input visualization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-32 flex items-end justify-center space-x-1 bg-slate-900/50 rounded-lg p-4">
                  {waveformData.slice(-40).map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      animate={{ height: `${value}%` }}
                      transition={{ duration: 0.1 }}
                      className="w-2 bg-gradient-to-t from-cyan-500 to-purple-500 rounded-t-sm min-h-[2px]"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Current Detection */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/30 h-64">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Zap className="mr-2 h-5 w-5 text-yellow-400" />
                  Current Detection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <AnimatePresence mode="wait">
                  {currentDetection ? (
                    <motion.div
                      key={(currentDetection as any).id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <Badge className={`${getTypeColor((currentDetection as any).type)} border text-sm`}>
                          {(currentDetection as any).type.replace('_', ' ').toUpperCase()}
                        </Badge>
                        <Badge className={`${getThreatColor((currentDetection as any).threat)} border text-xs`}>
                          {(currentDetection as any).threat}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-300">
                          <MapPin className="mr-2 h-4 w-4 text-cyan-400" />
                          {(currentDetection as any).location}
                        </div>
                        <div className="flex items-center text-sm text-gray-300">
                          <Clock className="mr-2 h-4 w-4 text-cyan-400" />
                          {(currentDetection as any).timestamp}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Confidence</span>
                          <span className="text-white font-medium">
                            {((currentDetection as any).confidence * 100).toFixed(1)}%
                          </span>
                        </div>
                        <Progress value={(currentDetection as any).confidence * 100} className="h-2" />
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center justify-center h-32 text-gray-500"
                    >
                      <div className="text-center">
                        <Shield className="h-12 w-12 mx-auto mb-2 opacity-50" />
                        <p>Listening for audio...</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Detection Log */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6"
        >
          <Card className="bg-slate-800/50 backdrop-blur-sm border-cyan-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <AlertTriangle className="mr-2 h-5 w-5 text-orange-400" />
                Detection Log
              </CardTitle>
              <CardDescription>Real-time classification history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                <AnimatePresence>
                  {detectionLog.map((detection, index) => (
                    <motion.div
                      key={detection.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center justify-between p-3 rounded-lg bg-slate-700/30 border border-slate-600/30 hover:border-cyan-500/30 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex flex-col space-y-1">
                          <div className="flex items-center space-x-2">
                            <Badge className={`${getTypeColor(detection.type)} border text-xs`}>
                              {detection.type.replace('_', ' ').toUpperCase()}
                            </Badge>
                            <Badge className={`${getThreatColor(detection.threat)} border text-xs`}>
                              {detection.threat}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-xs text-gray-400">
                            <span className="flex items-center">
                              <MapPin className="mr-1 h-3 w-3" />
                              {detection.location}
                            </span>
                            <span className="flex items-center">
                              <Clock className="mr-1 h-3 w-3" />
                              {detection.timestamp}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-white">
                          {(detection.confidence * 100).toFixed(1)}%
                        </p>
                        <div className="w-20">
                          <Progress value={detection.confidence * 100} className="h-1 mt-1" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default LiveMonitor;
