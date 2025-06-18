
import { useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { 
  Upload, 
  File, 
  Play, 
  Pause, 
  Volume2, 
  CheckCircle, 
  AlertCircle,
  Loader2,
  Download,
  Trash2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  status: 'uploading' | 'processing' | 'completed' | 'error';
  progress: number;
  result?: {
    classification: string;
    confidence: number;
    timestamp: string;
  };
}

const UploadAudio = () => {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  };

  const handleFiles = (fileList: File[]) => {
    const audioFiles = fileList.filter(file => file.type.startsWith('audio/'));
    
    if (audioFiles.length !== fileList.length) {
      toast({
        title: "Invalid Files",
        description: "Only audio files are supported",
        variant: "destructive",
      });
    }

    audioFiles.forEach(file => {
      const newFile: UploadedFile = {
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        size: file.size,
        type: file.type,
        status: 'uploading',
        progress: 0
      };

      setFiles(prev => [...prev, newFile]);
      simulateUpload(newFile.id);
    });
  };

  const simulateUpload = (fileId: string) => {
    // Simulate upload progress
    const uploadInterval = setInterval(() => {
      setFiles(prev => prev.map(file => {
        if (file.id === fileId && file.status === 'uploading') {
          const newProgress = Math.min(file.progress + Math.random() * 20, 100);
          if (newProgress >= 100) {
            clearInterval(uploadInterval);
            simulateProcessing(fileId);
            return { ...file, progress: 100, status: 'processing' };
          }
          return { ...file, progress: newProgress };
        }
        return file;
      }));
    }, 200);
  };

  const simulateProcessing = (fileId: string) => {
    // Simulate AI processing
    setTimeout(() => {
      const classifications = ['gun_shot', 'glass_breaking', 'scream', 'siren', 'engine_idling', 'normal'];
      const result = {
        classification: classifications[Math.floor(Math.random() * classifications.length)],
        confidence: 0.7 + Math.random() * 0.3,
        timestamp: new Date().toLocaleTimeString()
      };

      setFiles(prev => prev.map(file => {
        if (file.id === fileId) {
          return { ...file, status: 'completed', result };
        }
        return file;
      }));

      toast({
        title: "Analysis Complete",
        description: `File classified as ${result.classification.replace('_', ' ')} with ${(result.confidence * 100).toFixed(1)}% confidence`,
      });
    }, 2000 + Math.random() * 3000);
  };

  const removeFile = (fileId: string) => {
    setFiles(prev => prev.filter(file => file.id !== fileId));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
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
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-white flex items-center">
            <Upload className="mr-3 h-8 w-8 text-cyan-400" />
            Upload Audio Files
          </h1>
          <p className="text-gray-400 mt-2">Upload audio files for AI-powered classification and analysis</p>
        </motion.div>

        {/* Upload Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8"
        >
          <Card className="bg-slate-800/50 backdrop-blur-sm border-cyan-500/30">
            <CardContent className="p-8">
              <div
                className={`
                  relative border-2 border-dashed rounded-lg p-12 text-center transition-all duration-300
                  ${dragActive 
                    ? 'border-cyan-400 bg-cyan-400/10' 
                    : 'border-slate-600 hover:border-cyan-500/50 hover:bg-slate-700/30'
                  }
                `}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="audio/*"
                  onChange={(e) => handleFiles(Array.from(e.target.files || []))}
                  className="hidden"
                />
                
                <motion.div
                  animate={{ scale: dragActive ? 1.1 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Upload className={`mx-auto h-16 w-16 mb-4 ${dragActive ? 'text-cyan-400' : 'text-gray-400'}`} />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {dragActive ? 'Drop files here' : 'Upload Audio Files'}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Drag and drop your audio files here, or click to browse
                  </p>
                  <Button
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
                  >
                    <File className="mr-2 h-4 w-4" />
                    Choose Files
                  </Button>
                </motion.div>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs text-gray-500">
                    Supported formats: MP3, WAV, FLAC, OGG • Max file size: 50MB
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* File List */}
        <AnimatePresence>
          {files.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/30">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Volume2 className="mr-2 h-5 w-5 text-purple-400" />
                    Processing Queue ({files.length})
                  </CardTitle>
                  <CardDescription>Track the status of your uploaded files</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <AnimatePresence>
                      {files.map((file, index) => (
                        <motion.div
                          key={file.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ delay: index * 0.1 }}
                          className="p-4 rounded-lg bg-slate-700/30 border border-slate-600/30 hover:border-cyan-500/30 transition-all duration-300"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <div className="p-2 rounded-lg bg-slate-600/50">
                                <File className="h-5 w-5 text-gray-300" />
                              </div>
                              <div>
                                <p className="font-medium text-white">{file.name}</p>
                                <p className="text-sm text-gray-400">{formatFileSize(file.size)}</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                              {file.status === 'uploading' && (
                                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                                  <Loader2 className="mr-1 h-3 w-3 animate-spin" />
                                  Uploading
                                </Badge>
                              )}
                              {file.status === 'processing' && (
                                <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                                  <Loader2 className="mr-1 h-3 w-3 animate-spin" />
                                  Processing
                                </Badge>
                              )}
                              {file.status === 'completed' && (
                                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                                  <CheckCircle className="mr-1 h-3 w-3" />
                                  Complete
                                </Badge>
                              )}
                              {file.status === 'error' && (
                                <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                                  <AlertCircle className="mr-1 h-3 w-3" />
                                  Error
                                </Badge>
                              )}
                              
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeFile(file.id)}
                                className="text-gray-400 hover:text-red-400"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          
                          {(file.status === 'uploading' || file.status === 'processing') && (
                            <div className="mb-3">
                              <Progress value={file.progress} className="h-2" />
                              <p className="text-xs text-gray-400 mt-1">
                                {file.status === 'uploading' ? 'Uploading...' : 'Processing with AI...'}
                              </p>
                            </div>
                          )}
                          
                          {file.status === 'completed' && file.result && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              className="space-y-3 pt-3 border-t border-slate-600/30"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <Badge className={`${getClassificationColor(file.result.classification)} border`}>
                                    {file.result.classification.replace('_', ' ').toUpperCase()}
                                  </Badge>
                                  <span className="text-sm text-gray-300">
                                    {(file.result.confidence * 100).toFixed(1)}% confidence
                                  </span>
                                </div>
                                <span className="text-xs text-gray-400">
                                  Analyzed at {file.result.timestamp}
                                </span>
                              </div>
                              
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <Button variant="ghost" size="sm" className="text-cyan-400 hover:text-cyan-300">
                                    <Play className="mr-1 h-3 w-3" />
                                    Play
                                  </Button>
                                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                                    <Download className="mr-1 h-3 w-3" />
                                    Results
                                  </Button>
                                </div>
                                <Progress value={file.result.confidence * 100} className="w-24 h-1" />
                              </div>
                            </motion.div>
                          )}
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Instructions */}
        {files.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8"
          >
            <Card className="bg-slate-800/30 backdrop-blur-sm border-slate-700/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">How it works</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-3">
                      <Upload className="h-6 w-6 text-cyan-400" />
                    </div>
                    <h4 className="font-medium text-white mb-2">Upload</h4>
                    <p className="text-sm text-gray-400">Upload your audio files using drag & drop or file picker</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-3">
                      <Loader2 className="h-6 w-6 text-purple-400" />
                    </div>
                    <h4 className="font-medium text-white mb-2">Process</h4>
                    <p className="text-sm text-gray-400">Our AI analyzes the audio for threat classification</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                    </div>
                    <h4 className="font-medium text-white mb-2">Results</h4>
                    <p className="text-sm text-gray-400">Get detailed classification results with confidence scores</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default UploadAudio;
