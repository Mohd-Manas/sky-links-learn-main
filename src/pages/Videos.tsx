import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Clock, BookOpen, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { featuredVideos, categories, Video } from "@/data/videos";
import { VideoPlayer } from "@/components/VideoPlayer";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious,
  PaginationEllipsis
} from "@/components/ui/pagination";

const Videos = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Videos");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [videoPlayerOpen, setVideoPlayerOpen] = useState(false);
  const videosPerPage = 12;

  const handleWatchVideo = (video: Video) => {
    setSelectedVideo(video);
    setVideoPlayerOpen(true);
  };

  const filteredVideos = useMemo(() => {
    return selectedCategory === "All Videos" 
      ? featuredVideos 
      : featuredVideos.filter(v => v.category === selectedCategory);
  }, [selectedCategory]);

  // Reset to page 1 when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  // Calculate pagination
  const totalPages = Math.ceil(filteredVideos.length / videosPerPage);
  const startIndex = (currentPage - 1) * videosPerPage;
  const endIndex = startIndex + videosPerPage;
  const currentVideos = filteredVideos.slice(startIndex, endIndex);

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    
    if (currentPage <= 3) {
      pages.push(1, 2, 3, 4, '...', totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
    }
    
    return pages;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Featured video lessons
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Access our comprehensive library of professional trading videos, from MT5 basics to advanced strategies.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <Badge 
                  key={category}
                  variant={category === selectedCategory ? "secondary" : "outline"}
                  className={category === selectedCategory 
                    ? "bg-cta text-cta-foreground cursor-pointer" 
                    : "bg-white/10 text-white border-white/20 hover:bg-white/20 cursor-pointer"}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Videos Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Video library
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
              Hand-picked video content to accelerate your trading education
            </p>
            <p className="text-sm text-muted-foreground">
              Showing {startIndex + 1}-{Math.min(endIndex, filteredVideos.length)} of {filteredVideos.length} videos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {currentVideos.map((video) => (
              <Card key={video.id} className="group hover:shadow-finance-lg transition-all duration-300 bg-gradient-card border-0 min-h-[520px]">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button 
                        size="icon" 
                        className="bg-cta hover:bg-cta-hover text-cta-foreground rounded-full w-16 h-16"
                        onClick={() => handleWatchVideo(video)}
                      >
                        <Play className="h-8 w-8 ml-1" />
                      </Button>
                    </div>
                    <Badge 
                      variant="secondary"
                      className={`absolute top-3 left-3 ${
                        video.level === 'Beginner' ? 'bg-success text-success-foreground' :
                        video.level === 'Intermediate' ? 'bg-cta text-cta-foreground' :
                        'bg-primary text-primary-foreground'
                      }`}
                    >
                      {video.level}
                    </Badge>
                    <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {video.duration}
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <Badge variant="outline" className="mb-3 text-xs">
                      {video.category}
                    </Badge>
                    <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-cta transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                      {video.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-3 w-3" />
                        {video.views} views
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        {video.rating}
                      </div>
                    </div>
                    
                     <div className="flex mt-auto">
                       <Button 
                         className="flex-1 bg-cta hover:bg-cta-hover text-cta-foreground"
                         onClick={() => handleWatchVideo(video)}
                       >
                         WATCH NOW
                         <ArrowRight className="ml-2 h-4 w-4" />
                       </Button>
                     </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination className="mt-8">
              <PaginationContent>
                <PaginationItem>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="gap-1"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </Button>
                </PaginationItem>
                
                {getPageNumbers().map((page, index) => (
                  <PaginationItem key={index}>
                    {page === '...' ? (
                      <PaginationEllipsis />
                    ) : (
                      <PaginationLink
                        onClick={() => setCurrentPage(page as number)}
                        isActive={currentPage === page}
                        className="cursor-pointer"
                      >
                        {page}
                      </PaginationLink>
                    )}
                  </PaginationItem>
                ))}
                
                <PaginationItem>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="gap-1"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start learning today with full access to our educational resources
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Enroll now for free and explore all the materials you need to build your investing skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-cta hover:bg-cta-hover text-cta-foreground font-semibold">
              <Link to="/courses">
                ENROLL NOW
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Video Player */}
      <VideoPlayer 
        isOpen={videoPlayerOpen}
        onClose={() => setVideoPlayerOpen(false)}
        video={selectedVideo}
      />
    </div>
  );
};

export default Videos;