
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Settings, 
  Users, 
  Database, 
  Activity, 
  Shield, 
  FileText,
  Search,
  Filter,
  Download,
  Trash2,
  Edit,
  Eye,
  AlertTriangle,
  CheckCircle,
  Clock
} from "lucide-react";
import { motion } from "framer-motion";

const Admin = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const users = [
    { id: 1, name: "Alice Johnson", email: "alice@security.gov", role: "Admin", status: "active", lastLogin: "2 hours ago" },
    { id: 2, name: "Bob Smith", email: "bob@police.gov", role: "Operator", status: "active", lastLogin: "1 day ago" },
    { id: 3, name: "Carol Wilson", email: "carol@emergency.gov", role: "Viewer", status: "inactive", lastLogin: "1 week ago" },
    { id: 4, name: "David Brown", email: "david@security.gov", role: "Operator", status: "active", lastLogin: "30 min ago" }
  ];

  const audioLogs = [
    { id: 1, filename: "incident_001.wav", uploadedBy: "alice@security.gov", classification: "gun_shot", confidence: 0.94, timestamp: "2024-01-15 14:23:45", status: "processed" },
    { id: 2, filename: "patrol_audio_092.mp3", uploadedBy: "bob@police.gov", classification: "siren", confidence: 0.98, timestamp: "2024-01-15 13:45:12", status: "processed" },
    { id: 3, filename: "emergency_call_054.wav", uploadedBy: "carol@emergency.gov", classification: "scream", confidence: 0.87, timestamp: "2024-01-15 12:30:28", status: "processing" },
    { id: 4, filename: "street_audio_234.mp3", uploadedBy: "alice@security.gov", classification: "normal", confidence: 0.76, timestamp: "2024-01-15 11:15:03", status: "processed" }
  ];

  const systemLogs = [
    { id: 1, level: "INFO", message: "Model training completed successfully", timestamp: "2024-01-15 14:30:00", component: "AI Engine" },
    { id: 2, level: "WARNING", message: "High CPU usage detected on processing node", timestamp: "2024-01-15 14:25:15", component: "System Monitor" },
    { id: 3, level: "ERROR", message: "Failed to connect to external API endpoint", timestamp: "2024-01-15 14:20:32", component: "API Gateway" },
    { id: 4, level: "INFO", message: "Database backup completed", timestamp: "2024-01-15 14:15:45", component: "Database" }
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      active: "bg-green-500/20 text-green-400 border-green-500/30",
      inactive: "bg-gray-500/20 text-gray-400 border-gray-500/30",
      processed: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      processing: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      failed: "bg-red-500/20 text-red-400 border-red-500/30"
    };
    return colors[status as keyof typeof colors] || colors.active;
  };

  const getLogLevelColor = (level: string) => {
    const colors = {
      INFO: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      WARNING: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      ERROR: "bg-red-500/20 text-red-400 border-red-500/30"
    };
    return colors[level as keyof typeof colors] || colors.INFO;
  };

  const getClassificationColor = (classification: string) => {
    const colors = {
      gun_shot: "bg-red-500/20 text-red-400 border-red-500/30",
      glass_breaking: "bg-orange-500/20 text-orange-400 border-orange-500/30",
      scream: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      siren: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      engine_idling: "bg-gray-500/20 text-gray-400 border-gray-500/30",
      normal: "bg-green-500/20 text-green-400 border-green-500/30"
    };
    return colors[classification as keyof typeof colors] || colors.normal;
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
                <Settings className="mr-3 h-8 w-8 text-cyan-400" />
                Admin Panel
              </h1>
              <p className="text-gray-400 mt-2">System administration and monitoring dashboard</p>
            </div>
            
            <div className="flex items-center space-x-3">
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30 animate-pulse">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                SYSTEM ONLINE
              </Badge>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          <Card className="bg-slate-800/50 backdrop-blur-sm border-cyan-500/30">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Active Users</CardTitle>
              <Users className="h-4 w-4 text-cyan-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">3</div>
              <p className="text-xs text-green-400">+1 from yesterday</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/30">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Files Processed</CardTitle>
              <Database className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">1,247</div>
              <p className="text-xs text-purple-400">+23 today</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 backdrop-blur-sm border-green-500/30">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">System Health</CardTitle>
              <Activity className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">98.7%</div>
              <p className="text-xs text-green-400">Excellent</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 backdrop-blur-sm border-orange-500/30">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Alerts</CardTitle>
              <AlertTriangle className="h-4 w-4 text-orange-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">2</div>
              <p className="text-xs text-orange-400">Requires attention</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Tabs defaultValue="users" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 bg-slate-800/50 backdrop-blur-sm">
              <TabsTrigger value="users" className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400">
                <Users className="mr-2 h-4 w-4" />
                Users
              </TabsTrigger>
              <TabsTrigger value="uploads" className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400">
                <Database className="mr-2 h-4 w-4" />
                Audio Logs
              </TabsTrigger>
              <TabsTrigger value="system" className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-400">
                <Activity className="mr-2 h-4 w-4" />
                System Logs
              </TabsTrigger>
              <TabsTrigger value="settings" className="data-[state=active]:bg-orange-500/20 data-[state=active]:text-orange-400">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </TabsTrigger>
            </TabsList>

            {/* Users Tab */}
            <TabsContent value="users">
              <Card className="bg-slate-800/50 backdrop-blur-sm border-cyan-500/30">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-white">User Management</CardTitle>
                      <CardDescription>Manage user accounts and permissions</CardDescription>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          placeholder="Search users..."
                          className="pl-10 bg-slate-700/50 border-slate-600 text-white"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                      <Button className="bg-cyan-600 hover:bg-cyan-700">
                        Add User
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {users.map((user, index) => (
                      <motion.div
                        key={user.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="flex items-center justify-between p-4 rounded-lg bg-slate-700/30 border border-slate-600/30 hover:border-cyan-500/30 transition-all duration-300"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
                            <span className="text-white font-medium">{user.name.charAt(0)}</span>
                          </div>
                          <div>
                            <p className="font-medium text-white">{user.name}</p>
                            <p className="text-sm text-gray-400">{user.email}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                            {user.role}
                          </Badge>
                          <Badge className={`${getStatusColor(user.status)} border`}>
                            {user.status.toUpperCase()}
                          </Badge>
                          <span className="text-sm text-gray-400">{user.lastLogin}</span>
                          <div className="flex space-x-1">
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-400 hover:text-cyan-400">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-400 hover:text-blue-400">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-400 hover:text-red-400">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Audio Logs Tab */}
            <TabsContent value="uploads">
              <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/30">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-white">Audio Upload Logs</CardTitle>
                      <CardDescription>Monitor uploaded audio files and classification results</CardDescription>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" className="border-gray-600 text-gray-300">
                        <Filter className="mr-2 h-4 w-4" />
                        Filter
                      </Button>
                      <Button variant="outline" className="border-gray-600 text-gray-300">
                        <Download className="mr-2 h-4 w-4" />
                        Export
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {audioLogs.map((log, index) => (
                      <motion.div
                        key={log.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="flex items-center justify-between p-4 rounded-lg bg-slate-700/30 border border-slate-600/30 hover:border-purple-500/30 transition-all duration-300"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="p-2 rounded-lg bg-slate-600/50">
                            <FileText className="h-5 w-5 text-gray-300" />
                          </div>
                          <div>
                            <p className="font-medium text-white">{log.filename}</p>
                            <p className="text-sm text-gray-400">by {log.uploadedBy}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <Badge className={`${getClassificationColor(log.classification)} border`}>
                            {log.classification.replace('_', ' ').toUpperCase()}
                          </Badge>
                          <span className="text-sm text-white">{(log.confidence * 100).toFixed(1)}%</span>
                          <Badge className={`${getStatusColor(log.status)} border`}>
                            {log.status === 'processing' && <Clock className="mr-1 h-3 w-3" />}
                            {log.status === 'processed' && <CheckCircle className="mr-1 h-3 w-3" />}
                            {log.status.toUpperCase()}
                          </Badge>
                          <span className="text-xs text-gray-400">{log.timestamp}</span>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-400 hover:text-purple-400">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* System Logs Tab */}
            <TabsContent value="system">
              <Card className="bg-slate-800/50 backdrop-blur-sm border-green-500/30">
                <CardHeader>
                  <CardTitle className="text-white">System Logs</CardTitle>
                  <CardDescription>Monitor system events and performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {systemLogs.map((log, index) => (
                      <motion.div
                        key={log.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="flex items-center justify-between p-3 rounded-lg bg-slate-700/30 border border-slate-600/30"
                      >
                        <div className="flex items-center space-x-3">
                          <Badge className={`${getLogLevelColor(log.level)} border text-xs`}>
                            {log.level}
                          </Badge>
                          <span className="text-sm text-white">{log.message}</span>
                          <Badge variant="outline" className="text-xs border-gray-600 text-gray-400">
                            {log.component}
                          </Badge>
                        </div>
                        <span className="text-xs text-gray-400">{log.timestamp}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-slate-800/50 backdrop-blur-sm border-orange-500/30">
                  <CardHeader>
                    <CardTitle className="text-white">AI Model Settings</CardTitle>
                    <CardDescription>Configure classification model parameters</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-300 block mb-2">Confidence Threshold</label>
                      <Input className="bg-slate-700/50 border-slate-600 text-white" defaultValue="0.75" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-300 block mb-2">Model Version</label>
                      <Input className="bg-slate-700/50 border-slate-600 text-white" defaultValue="v2.1.3" />
                    </div>
                    <Button className="w-full bg-orange-600 hover:bg-orange-700">
                      Update Settings
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 backdrop-blur-sm border-blue-500/30">
                  <CardHeader>
                    <CardTitle className="text-white">System Configuration</CardTitle>
                    <CardDescription>General system settings and preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-300 block mb-2">Max File Size (MB)</label>
                      <Input className="bg-slate-700/50 border-slate-600 text-white" defaultValue="50" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-300 block mb-2">Retention Period (Days)</label>
                      <Input className="bg-slate-700/50 border-slate-600 text-white" defaultValue="30" />
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Save Configuration
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default Admin;
