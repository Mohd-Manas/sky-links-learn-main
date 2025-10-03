import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { ebooks, categories } from "@/data/ebooks";
import { UnifiedEnrollmentForm } from "@/components/UnifiedEnrollmentForm";
import { useEnrollment } from "@/hooks/useEnrollment";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious,
  PaginationEllipsis
} from "@/components/ui/pagination";

const Ebooks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [currentPage, setCurrentPage] = useState(1);
  const [enrollmentOpen, setEnrollmentOpen] = useState(false);
  const [selectedEbookTitle, setSelectedEbookTitle] = useState("");
  const { isEnrolled } = useEnrollment();
  const ebooksPerPage = 12;

  const filteredEbooks = useMemo(() => {
    return ebooks.filter(ebook => {
      const matchesSearch = ebook.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          ebook.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All Categories" || ebook.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Reset to page 1 when search/filter changes
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  // Calculate pagination
  const totalPages = Math.ceil(filteredEbooks.length / ebooksPerPage);
  const startIndex = (currentPage - 1) * ebooksPerPage;
  const endIndex = startIndex + ebooksPerPage;
  const currentEbooks = filteredEbooks.slice(startIndex, endIndex);

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

  const handleAccessClick = (ebookTitle: string) => {
    if (isEnrolled) {
      // User is already enrolled, show access message
      alert(`You have access to: ${ebookTitle}`);
    } else {
      setSelectedEbookTitle(ebookTitle);
      setEnrollmentOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Trading ebooks
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Access our comprehensive library of trading guides and enhance your knowledge with expert insights.
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search ebooks..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button 
                  key={category}
                  variant={category === selectedCategory ? "default" : "outline"}
                  size="sm"
                  className="text-sm"
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ebooks Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground">
              Showing {startIndex + 1}-{Math.min(endIndex, filteredEbooks.length)} of {filteredEbooks.length} ebooks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {currentEbooks.map((ebook) => (
              <Card key={ebook.id} className="group hover:shadow-finance-lg transition-all duration-300 bg-gradient-card border-0 min-h-[280px]">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex-1">
                    <div className="text-4xl mb-4">{ebook.icon}</div>
                    
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      {ebook.title}
                    </h3>
                    
                    <Badge variant="secondary" className="mb-3 text-xs">
                      {ebook.category}
                    </Badge>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {ebook.description}
                    </p>
                  </div>
                  
                  <Button 
                    className="w-full bg-cta hover:bg-cta-hover text-cta-foreground mt-auto"
                    onClick={() => handleAccessClick(ebook.title)}
                  >
                    {isEnrolled ? 'START LEARNING' : 'ENROLL TO ACCESS'}
                  </Button>
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

      <UnifiedEnrollmentForm
        isOpen={enrollmentOpen}
        onClose={() => setEnrollmentOpen(false)}
        title={selectedEbookTitle}
        type="ebook"
      />
    </div>
  );
};

export default Ebooks;