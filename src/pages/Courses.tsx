import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { courses } from "@/data/courses";
import { CourseCategory } from "@/types/course";
import { Search, Clock, Users, Star, BookOpen, Filter, X } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { UnifiedEnrollmentForm } from "@/components/UnifiedEnrollmentForm";
import { useEnrollment } from "@/hooks/useEnrollment";
import course1Cover from "@/assets/course-1-cover.jpg";
import course2Cover from "@/assets/course-2-cover.jpg";
import course3Cover from "@/assets/course-3-cover.jpg";
import course4Cover from "@/assets/course-4-cover.jpg";
import course5Cover from "@/assets/course-5-cover.jpg";
import course6Cover from "@/assets/course-6-cover.jpg";
import course7Cover from "@/assets/course-7-cover.jpg";
import course8Cover from "@/assets/course-8-cover.jpg";
import course9Cover from "@/assets/course-9-cover.jpg";
import course10Cover from "@/assets/course-10-cover.jpg";

const Courses = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(searchParams.get("category") || "all");
  const [showFilters, setShowFilters] = useState(false);
  const [enrollmentOpen, setEnrollmentOpen] = useState(false);
  const [selectedCourseTitle, setSelectedCourseTitle] = useState("");
  const { isEnrolled } = useEnrollment();

  const getCoverImage = (courseId: string) => {
    switch(courseId) {
      case '1': return course1Cover;
      case '2': return course2Cover;
      case '3': return course3Cover;
      case '4': return course4Cover;
      case '5': return course5Cover;
      case '6': return course6Cover;
      case '7': return course7Cover;
      case '8': return course8Cover;
      case '9': return course9Cover;
      case '10': return course10Cover;
      default: return null;
    }
  };

  // Filter courses based on selected criteria
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.summary.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const categories: CourseCategory[] = ["Beginner", "Intermediate", "Advanced"];

  const clearFilters = () => {
    setSelectedCategory("all");
    setSearchTerm("");
    setSearchParams({});
  };

  const activeFiltersCount = [selectedCategory].filter(f => f !== "all").length;

  const handleEnrollClick = (courseTitle: string) => {
    setSelectedCourseTitle(courseTitle);
    setEnrollmentOpen(true);
  };

  return (
    <div className="min-h-screen bg-secondary/20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Trading courses</h1>
          <p className="text-xl text-muted-foreground">
            Master trading with our comprehensive video courses and expert guidance.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background"
              />
            </div>
            
            {/* Mobile Filter Toggle */}
            <Button 
              variant="outline" 
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
            </Button>
          </div>

          {/* Filter Controls */}
          <div className={cn(
            "grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",
            showFilters ? "block" : "hidden lg:grid"
          )}>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {activeFiltersCount > 0 && (
              <Button variant="outline" onClick={clearFilters} className="bg-background">
                <X className="h-4 w-4 mr-2" />
                Clear Filters
              </Button>
            )}
          </div>

          {/* Results Count */}
          <p className="text-muted-foreground">
            Showing {filteredCourses.length} of {courses.length} courses
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="group hover:shadow-finance-lg transition-all duration-300 bg-background border-0 flex flex-col h-full">
              <CardHeader className="pb-4 flex-shrink-0">
                <div className="aspect-video bg-gradient-card rounded-lg mb-4 overflow-hidden">
                  {getCoverImage(course.id) ? (
                    <img 
                      src={getCoverImage(course.id)!} 
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <BookOpen className="h-12 w-12 text-muted-foreground" />
                    </div>
                  )}
                </div>
                
                <div className="flex items-start justify-between gap-2 mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {course.category}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {course.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {course.summary}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0 flex-grow flex flex-col justify-end">
                <Separator className="my-4" />

                {/* Course Stats */}
                <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{course.duration}m</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    <span>{course.lessonsCount} lessons</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <span className="text-sm font-medium">{course.rating}</span>
                </div>

                {/* Progress Bar (if any progress) */}
                {course.progress && course.progress > 0 && (
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-muted-foreground mb-1">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full bg-secondary h-2 rounded-full">
                      <div 
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                )}

                <div className="flex gap-2">
                  <Button asChild className="flex-1" variant="outline">
                    <Link to={`/courses/${course.slug}`}>
                      VIEW COURSE
                    </Link>
                  </Button>
                  {isEnrolled ? (
                    <Button 
                      asChild
                      className="flex-1 bg-cta hover:bg-cta-hover text-cta-foreground"
                    >
                      <Link to={`/courses/${course.slug}`}>
                        START LEARNING
                      </Link>
                    </Button>
                  ) : (
                    <Button 
                      className="flex-1 bg-cta hover:bg-cta-hover text-cta-foreground" 
                      onClick={() => handleEnrollClick(course.title)}
                    >
                      ENROLL NOW
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-foreground mb-2">No courses found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search criteria or browse all courses.
            </p>
            <Button onClick={clearFilters} variant="outline">
              Clear All Filters
            </Button>
          </div>
        )}
      </div>

      <UnifiedEnrollmentForm
        isOpen={enrollmentOpen}
        onClose={() => setEnrollmentOpen(false)}
        title={selectedCourseTitle}
        type="course"
      />
    </div>
  );
};

export default Courses;