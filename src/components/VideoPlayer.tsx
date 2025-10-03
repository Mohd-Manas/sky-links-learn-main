import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Play, X } from 'lucide-react';

interface VideoPlayerProps {
  isOpen: boolean;
  onClose: () => void;
  video: {
    title: string;
    description: string;
    thumbnail: string;
    duration: string;
  } | null;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ isOpen, onClose, video }) => {
  if (!video) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] p-0">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center justify-between">
            <DialogTitle>{video.title}</DialogTitle>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onClose}
              className="h-6 w-6"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="px-6">
          <div className="aspect-video bg-secondary rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
            <img 
              src={video.thumbnail} 
              alt={video.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center text-white">
                <Play className="h-16 w-16 mx-auto mb-4" />
                <p className="text-lg font-semibold">Video Player</p>
                <p className="text-sm opacity-80">Duration: {video.duration}</p>
              </div>
            </div>
          </div>
          
          <div className="pb-6">
            <p className="text-muted-foreground">{video.description}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};