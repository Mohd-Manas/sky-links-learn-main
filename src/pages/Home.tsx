import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Clock, Users, Shield, Headphones, Award, TrendingUp, BarChart3, Brain, GraduationCap, Mail, Phone } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { webinars } from "@/data/courses";
import { ebooks } from "@/data/ebooks";
import { featuredVideos } from "@/data/videos";
import { VideoPlayer } from "@/components/VideoPlayer";
import { UnifiedEnrollmentForm } from "@/components/UnifiedEnrollmentForm";
import { useEnrollment } from "@/hooks/useEnrollment";
import heroTrader from "@/assets/hero-trader.png";
import webinarProfessional from "@/assets/webinar-professional.png";

const Home = () => {
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const [videoPlayerOpen, setVideoPlayerOpen] = useState(false);
  const [enrollmentOpen, setEnrollmentOpen] = useState(false);
  const [selectedEbookTitle, setSelectedEbookTitle] = useState("");
  const { isEnrolled } = useEnrollment();
  
  const upcomingWebinar = webinars.find(w => w.isUpcoming);

  const handleWatchVideo = (video: any) => {
    setSelectedVideo(video);
    setVideoPlayerOpen(true);
  };

  const handleEbookAccess = (ebookTitle: string) => {
    setSelectedEbookTitle(ebookTitle);
    setEnrollmentOpen(true);
  };

  const categories = [
    {
      title: "Beginner",
      description: "Start your trading journey with fundamental concepts and essential skills.",
      icon: BookOpen,
      color: "from-success/20 to-success-light/30",
      textColor: "text-success",
      courses: "4 courses",
      duration: "1-2 hours each"
    },
    {
      title: "Intermediate", 
      description: "Develop advanced strategies and deepen your market understanding.",
      icon: BarChart3,
      color: "from-primary/20 to-primary-light/30",
      textColor: "text-primary",
      courses: "4 courses",
      duration: "1-2 hours each"
    },
    {
      title: "Advanced",
      description: "Master professional-level techniques and complex trading strategies.",
      icon: Brain,
      color: "from-accent/20 to-accent/40",
      textColor: "text-accent-foreground",
      courses: "2 courses", 
      duration: "1 hour each"
    }
  ];

  const trustFeatures = [
    { icon: Award, text: "Expert mentors" },
    { icon: Headphones, text: "24/5 support" }
  ];

  const faqItems = [
    {
      question: "Do I need prior trading experience?", 
      answer: "No! Our beginner courses start from the basics and guide you step-by-step."
    },
    {
      question: "What platforms do you teach?",
      answer: "We focus primarily on MetaTrader 5 (MT5). Our courses cover everything from basic platform navigation to advanced trading strategies specifically designed for MT5."
    },
    {
      question: "How long does it take to complete a course?",
      answer: "Courses range from 1-120 hours. Learn at your own pace with lifetime access."
    },
    {
      question: "Do I get certification after finishing the course?",
      answer: "Yes! Upon successful completion of each course, you'll receive a certificate of completion that you can add to your professional portfolio or LinkedIn profile."
    },
    {
      question: "Is this a free education platform or any payment is required?",
      answer: "Our education platform is completely free! We believe that quality trading education should be accessible to everyone. All courses, webinars, and resources are provided at no cost."
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Content Wrapper */}
      <div className="relative z-10">
      {/* Hero Section */}
      <section 
        className="relative text-white min-h-[64vh] md:min-h-[70vh] flex flex-col justify-end overflow-hidden"
        style={{
          backgroundImage: `url(${heroTrader})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        
        {/* Content Container */}
        <div className="container mx-auto px-4 relative z-20 pb-8 pt-4 md:py-12 md:translate-y-0 -translate-y-[40%]">
          {/* Description and CTAs at bottom */}
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              Sky Links Capital Academy
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white drop-shadow-lg max-w-2xl mx-auto">
              Boost your financial literacy and master trading with free resources and earn your certificate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" variant="cta" className="font-semibold">
                <Link to="/courses">
                  ENROL NOW
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="quiz-transparent" className="font-semibold">
                <Link to="/quiz">
                  TAKE THE QUIZ
                  <TrendingUp className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Learning Path Section */}
      <section className="md:py-20 py-0 pt-8 bg-white -mt-1">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose your learning path
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Our courses are structured by experience level. Start where you're comfortable and progress at your own pace.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={category.title} 
                  className="group hover:shadow-finance-lg transition-all duration-300 cursor-pointer bg-white border-2 hover:bg-white"
                  style={{ borderColor: '#0036cc' }}
                  onClick={() => window.location.href = `/courses?category=${category.title}`}
                >
                  <CardContent className="p-8 text-center">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: '#0036cc' }}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">{category.title}</h3>
                    <p className="text-foreground/70 mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="space-y-2 text-sm text-foreground/60">
                      <div className="flex items-center justify-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        {category.courses}
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Clock className="h-4 w-4" />
                        {category.duration}
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      className="mt-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      EXPLORE COURSES
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/courses">
                VIEW ALL COURSES
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured video lessons
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started with our most popular video tutorials covering essential trading concepts.
            </p>
          </div>
          
          <Carousel 
            className="w-full max-w-5xl mx-auto mb-12"
            plugins={[
              Autoplay({
                delay: 2500,
              }),
            ]}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {featuredVideos.slice(0, 6).map((video, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group hover:shadow-finance-lg transition-all duration-300 bg-white border-0 h-full min-h-[520px]">
                    <CardContent className="p-0 h-full flex flex-col">
                      <div className="relative">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Button 
                            size="icon" 
                            className="bg-cta hover:bg-cta-hover text-cta-foreground rounded-full w-16 h-16"
                            onClick={() => handleWatchVideo({ ...video, description: video.description })}
                          >
                            <div className="w-0 h-0 border-l-[12px] border-l-current border-y-[8px] border-y-transparent ml-1"></div>
                          </Button>
                        </div>
                        <div className="absolute top-3 right-3 bg-black text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {video.duration}
                        </div>
                      </div>
                      
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-lg font-semibold mb-2 text-foreground">
                          {video.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 flex-1">
                          {video.description}
                        </p>
                        <div className="flex items-center justify-between mb-4">
                        <Badge 
                          variant="secondary"
                          className={`${
                            video.level === 'Beginner' ? 'bg-success text-success-foreground' :
                            video.level === 'Intermediate' ? 'bg-cta text-cta-foreground' :
                            'bg-primary text-primary-foreground'
                          }`}
                        >
                          {video.level}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {video.category}
                        </Badge>
                        </div>
                        <Button 
                          className="w-full bg-cta hover:bg-cta-hover text-cta-foreground mt-auto"
                          onClick={() => handleWatchVideo({ ...video, description: video.description })}
                        >
                          WATCH NOW
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/videos">
                VIEW ALL VIDEOS
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Ebooks Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Popular trading ebooks
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access our comprehensive guides and enhance your trading knowledge with detailed insights.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {ebooks.slice(0, 3).map((ebook) => (
              <Card key={ebook.id} className="group hover:shadow-finance-lg transition-all duration-300 bg-white border-0 min-h-[240px]">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="text-4xl">{ebook.icon}</div>
                    <div className="flex-1 flex flex-col h-full">
                      <Badge 
                        variant="secondary" 
                        className={`mb-2 text-xs ${
                          ebook.category === 'Beginner' ? 'bg-success text-success-foreground' :
                          ebook.category === 'Intermediate' ? 'bg-primary text-primary-foreground' :
                          ebook.category === 'Advanced' ? 'bg-accent text-accent-foreground' :
                          ''
                        }`}
                      >
                        {ebook.category}
                      </Badge>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">
                        {ebook.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 flex-1">
                        {ebook.description}
                      </p>
                      <Button 
                        className="w-full bg-cta hover:bg-cta-hover text-cta-foreground mt-auto"
                        onClick={() => handleEbookAccess(ebook.title)}
                      >
                        {isEnrolled ? 'START LEARNING' : 'ACCESS NOW'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/ebooks">
                EXPLORE ALL EBOOKS
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Webinar Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <Card className="max-w-6xl mx-auto bg-white shadow-finance-lg">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                    Why join our webinar?
                  </h3>
                  <ul className="space-y-4 text-muted-foreground mb-8">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cta rounded-full mt-2 flex-shrink-0"></div>
                      <span>Learn live from trading experts.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cta rounded-full mt-2 flex-shrink-0"></div>
                      <span>Get insights on markets and strategies.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cta rounded-full mt-2 flex-shrink-0"></div>
                      <span>Ask questions in real time.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cta rounded-full mt-2 flex-shrink-0"></div>
                      <span>Improve your trading skills fast.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cta rounded-full mt-2 flex-shrink-0"></div>
                      <span>Access exclusive tools and resources.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cta rounded-full mt-2 flex-shrink-0"></div>
                      <span>Earn a certificate of participation.</span>
                    </li>
                  </ul>
                  <Button size="lg" className="bg-cta hover:bg-cta-hover text-cta-foreground">
                    <Link to="/webinars">
                      EXPLORE WEBINARS
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
                <div className="lg:w-1/2">
                  <img 
                    src={webinarProfessional} 
                    alt="Professional woman in business suit" 
                    className="w-full h-80 object-cover rounded-lg shadow-finance-md"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educational Enrollment Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Start learning today with full access to our educational resources</h2>
            <p className="text-xl mb-8">
              Enroll now for free and explore all the materials you need to build your investing skills.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link to="/courses">
                ENROLL NOW
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Strip & FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Trust Features */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
            {trustFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-full bg-primary-lighter flex items-center justify-center">
                    <IconComponent className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">{feature.text}</span>
                </div>
              );
            })}
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
              Frequently asked questions
            </h3>
            <div className="grid gap-6">
              {faqItems.map((item, index) => (
                <Card key={index} className="bg-white border-0">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-2 text-foreground">{item.question}</h4>
                    <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-8 w-8" />
                <h4 className="text-xl font-bold">Sky Links Capital Academy</h4>
              </div>
              <p className="text-white/80 leading-relaxed">
                Empowering traders with professional education and resources to master financial markets.
              </p>
            </div>

            {/* Newsletter Subscription */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Subscribe to newsletter</h4>
              <p className="text-white/80 text-sm">
                Get the latest trading insights and market updates delivered to your inbox.
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-3 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                />
                <Button className="bg-white text-primary hover:bg-white/90">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact us</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4" />
                  <span className="text-white/80">+971507192185</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4" />
                  <span className="text-white/80">contact@skylinkscapitalacademy.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick links</h4>
              <div className="space-y-2">
                <Link to="/courses" className="block text-white/80 hover:text-white transition-colors">
                  Courses
                </Link>
                <Link to="/videos" className="block text-white/80 hover:text-white transition-colors">
                  Videos
                </Link>
                <Link to="/ebooks" className="block text-white/80 hover:text-white transition-colors">
                  Ebooks
                </Link>
                <Link to="/webinars" className="block text-white/80 hover:text-white transition-colors">
                  Webinars
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <p className="text-white/60">
              © 2025 Sky Links Capital Academy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      </div>

      <VideoPlayer
        isOpen={videoPlayerOpen}
        onClose={() => setVideoPlayerOpen(false)}
        video={selectedVideo}
      />

      <UnifiedEnrollmentForm
        isOpen={enrollmentOpen}
        onClose={() => setEnrollmentOpen(false)}
        title={selectedEbookTitle}
        type="ebook"
      />
    </div>
  );
};

export default Home;