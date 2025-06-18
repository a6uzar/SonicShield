
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  PieChart, 
  Pie, 
  Cell, 
  LineChart, 
  Line, 
  Area, 
  AreaChart,
  ResponsiveContainer 
} from 'recharts';
import { 
  BarChart3, 
  TrendingUp, 
  AlertTriangle, 
  Shield, 
  Calendar,
  Download,
  Filter,
  RefreshCw
} from "lucide-react";
import { motion } from "framer-motion";

const Analytics = () => {
  // Mock data for charts
  const classificationData = [
    { name: 'Gun Shot', value: 45, color: '#ef4444' },
    { name: 'Glass Breaking', value: 32, color: '#f97316' },
    { name: 'Scream', value: 28, color: '#a855f7' },
    { name: 'Siren', value: 67, color: '#3b82f6' },
    { name: 'Engine Idling', value: 23, color: '#6b7280' },
    { name: 'Normal', value: 234, color: '#10b981' }
  ];

  const monthlyTrends = [
    { month: 'Jan', threats: 12, normal: 156, total: 168 },
    { month: 'Feb', threats: 15, normal: 142, total: 157 },
    { month: 'Mar', threats: 8, normal: 189, total: 197 },
    { month: 'Apr', threats: 22, normal: 134, total: 156 },
    { month: 'May', threats: 18, normal: 167, total: 185 },
    { month: 'Jun', threats: 25, normal: 201, total: 226 }
  ];

  const hourlyActivity = [
    { hour: '00', detections: 5 },
    { hour: '02', detections: 3 },
    { hour: '04', detections: 2 },
    { hour: '06', detections: 8 },
    { hour: '08', detections: 15 },
    { hour: '10', detections: 12 },
    { hour: '12', detections: 18 },
    { hour: '14', detections: 22 },
    { hour: '16', detections: 19 },
    { hour: '18', detections: 25 },
    { hour: '20', detections: 16 },
    { hour: '22', detections: 11 }
  ];

  const locationHeatmap = [
    { location: 'Downtown', incidents: 45, severity: 'high' },
    { location: 'Industrial', incidents: 32, severity: 'medium' },
    { location: 'Residential', incidents: 18, severity: 'low' },
    { location: 'Commercial', incidents: 28, severity: 'medium' },
    { location: 'Highway', incidents: 67, severity: 'high' }
  ];

  const getSeverityColor = (severity: string) => {
    const colors = {
      high: 'bg-red-500/20 text-red-400 border-red-500/30',
      medium: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      low: 'bg-green-500/20 text-green-400 border-green-500/30'
    };
    return colors[severity as keyof typeof colors] || colors.low;
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
                <BarChart3 className="mr-3 h-8 w-8 text-cyan-400" />
                Analytics & Insights
              </h1>
              <p className="text-gray-400 mt-2">Comprehensive analysis of audio classification patterns and trends</p>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white">
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh
              </Button>
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Summary Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          <Card className="bg-slate-800/50 backdrop-blur-sm border-cyan-500/30">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Total Detections</CardTitle>
              <BarChart3 className="h-4 w-4 text-cyan-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">2,847</div>
              <p className="text-xs text-green-400">+12.5% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 backdrop-blur-sm border-red-500/30">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Threat Incidents</CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">163</div>
              <p className="text-xs text-red-400">+8.2% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 backdrop-blur-sm border-green-500/30">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Model Accuracy</CardTitle>
              <Shield className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">94.2%</div>
              <p className="text-xs text-green-400">+1.1% from last week</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/30">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Avg Response Time</CardTitle>
              <TrendingUp className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">1.2s</div>
              <p className="text-xs text-purple-400">-0.3s from last week</p>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Classification Distribution */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-slate-800/50 backdrop-blur-sm border-cyan-500/30">
              <CardHeader>
                <CardTitle className="text-white">Classification Distribution</CardTitle>
                <CardDescription>Breakdown of audio classifications over the past month</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={classificationData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {classificationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1e293b', 
                        border: '1px solid #334155',
                        borderRadius: '8px',
                        color: '#fff'
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Monthly Trends */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-white">Monthly Detection Trends</CardTitle>
                <CardDescription>Threat vs Normal audio classifications over time</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={monthlyTrends}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1e293b', 
                        border: '1px solid #334155',
                        borderRadius: '8px',
                        color: '#fff'
                      }} 
                    />
                    <Area
                      type="monotone"
                      dataKey="normal"
                      stackId="1"
                      stroke="#10b981"
                      fill="#10b981"
                      fillOpacity={0.3}
                    />
                    <Area
                      type="monotone"
                      dataKey="threats"
                      stackId="1"
                      stroke="#ef4444"
                      fill="#ef4444"
                      fillOpacity={0.5}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Hourly Activity */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="bg-slate-800/50 backdrop-blur-sm border-green-500/30">
              <CardHeader>
                <CardTitle className="text-white">24-Hour Activity Pattern</CardTitle>
                <CardDescription>Detection frequency throughout the day</CardDescription>
              </CardHeader>
              <CardContent className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={hourlyActivity}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="hour" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1e293b', 
                        border: '1px solid #334155',
                        borderRadius: '8px',
                        color: '#fff'
                      }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="detections" 
                      stroke="#06b6d4" 
                      strokeWidth={3}
                      dot={{ fill: '#06b6d4', strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Location Heatmap */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="bg-slate-800/50 backdrop-blur-sm border-orange-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-orange-400" />
                  Location Heatmap
                </CardTitle>
                <CardDescription>Incident distribution by area</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {locationHeatmap.map((location, index) => (
                    <motion.div
                      key={location.location}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-center justify-between p-3 rounded-lg bg-slate-700/30 border border-slate-600/30"
                    >
                      <div>
                        <p className="font-medium text-white">{location.location}</p>
                        <p className="text-sm text-gray-400">{location.incidents} incidents</p>
                      </div>
                      <Badge className={`${getSeverityColor(location.severity)} border`}>
                        {location.severity.toUpperCase()}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* ML Explainability Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <Card className="bg-slate-800/50 backdrop-blur-sm border-cyan-500/30">
            <CardHeader>
              <CardTitle className="text-white">Model Explainability Dashboard</CardTitle>
              <CardDescription>AI model insights and feature importance analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Feature Importance</h4>
                  <div className="space-y-3">
                    {[
                      { feature: 'Spectral Centroid', importance: 0.89 },
                      { feature: 'MFCC Features', importance: 0.76 },
                      { feature: 'Zero Crossing Rate', importance: 0.65 },
                      { feature: 'Spectral Rolloff', importance: 0.58 },
                      { feature: 'Tempo', importance: 0.43 }
                    ].map((item, index) => (
                      <motion.div
                        key={item.feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="flex items-center space-x-3"
                      >
                        <span className="text-sm text-gray-300 w-32">{item.feature}</span>
                        <div className="flex-1 bg-slate-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${item.importance * 100}%` }}
                          />
                        </div>
                        <span className="text-sm text-white w-12">{(item.importance * 100).toFixed(0)}%</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Model Performance</h4>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-slate-700/30 border border-slate-600/30">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Precision</span>
                        <span className="text-white font-medium">93.1%</span>
                      </div>
                      <div className="w-full bg-slate-600 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '93.1%' }} />
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-slate-700/30 border border-slate-600/30">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Recall</span>
                        <span className="text-white font-medium">91.7%</span>
                      </div>
                      <div className="w-full bg-slate-600 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '91.7%' }} />
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-slate-700/30 border border-slate-600/30">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">F1-Score</span>
                        <span className="text-white font-medium">92.4%</span>
                      </div>
                      <div className="w-full bg-slate-600 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: '92.4%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Analytics;
