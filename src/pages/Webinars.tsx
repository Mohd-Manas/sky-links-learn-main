import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { webinars } from "@/data/courses";
import { Calendar, Clock, Users, Play, ExternalLink } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Webinars = () => {
  const upcomingWebinars = webinars.filter(w => w.isUpcoming);
  const pastWebinars = webinars.filter(w => !w.isUpcoming);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      timeZoneName: 'short'
    });
  };

  const WebinarCard = ({ webinar }: { webinar: typeof webinars[0] }) => (
    <Card className="group hover:shadow-finance-lg transition-all duration-300 bg-background border-0">
      <CardHeader>
        <div className="aspect-video bg-gradient-card rounded-lg mb-4 flex items-center justify-center">
          {webinar.isUpcoming ? (
            <Calendar className="h-12 w-12 text-muted-foreground" />
          ) : (
            <Play className="h-12 w-12 text-muted-foreground" />
          )}
        </div>
        
        <div className="flex items-start justify-between gap-2 mb-2">
          <Badge variant={webinar.isUpcoming ? "default" : "secondary"} className="bg-gradient-primary text-primary-foreground">
            {webinar.isUpcoming ? "Upcoming" : "Replay Available"}
          </Badge>
          <div className="flex flex-wrap gap-1">
            {webinar.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {webinar.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
          {webinar.description}
        </p>

        {/* Webinar Details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-sm">
            <Calendar className="h-4 w-4 text-primary" />
            <span className="font-medium">{formatDate(webinar.dateTime)}</span>
          </div>
          
          <div className="flex items-center gap-3 text-sm">
            <Clock className="h-4 w-4 text-primary" />
            <span>{formatTime(webinar.dateTime)} ({webinar.timezone})</span>
          </div>
          
          <div className="flex items-center gap-3 text-sm">
            <Users className="h-4 w-4 text-primary" />
            <span>Speakers: {webinar.speakers.join(", ")}</span>
          </div>
        </div>

        {/* Action Button */}
        {webinar.isUpcoming ? (
          <Button className="w-full bg-gradient-primary hover:opacity-90">
            <Calendar className="mr-2 h-4 w-4" />
            Register Now
          </Button>
        ) : webinar.replayUrl ? (
          <Button variant="outline" className="w-full">
            <Play className="mr-2 h-4 w-4" />
            Watch Replay
          </Button>
        ) : (
          <Button variant="outline" className="w-full" disabled>
            Replay Coming Soon
          </Button>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-secondary/20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Live Webinars</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our expert traders for live sessions, market analysis, and interactive Q&A sessions.
          </p>
        </div>

        {/* Tabs for Upcoming vs Past */}
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="upcoming">
              Upcoming ({upcomingWebinars.length})
            </TabsTrigger>
            <TabsTrigger value="past">
              Replays ({pastWebinars.length})
            </TabsTrigger>
          </TabsList>

          {/* Upcoming Webinars */}
          <TabsContent value="upcoming">
            {upcomingWebinars.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingWebinars.map((webinar) => (
                  <WebinarCard key={webinar.id} webinar={webinar} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-foreground mb-2">No Upcoming Webinars</h3>
                <p className="text-muted-foreground mb-6">
                  Check back soon for new webinar announcements.
                </p>
                <Button variant="outline">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Get Notified
                </Button>
              </div>
            )}
          </TabsContent>

          {/* Past Webinars */}
          <TabsContent value="past">
            {pastWebinars.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastWebinars.map((webinar) => (
                  <WebinarCard key={webinar.id} webinar={webinar} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Play className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-foreground mb-2">No Replays Available</h3>
                <p className="text-muted-foreground">
                  Webinar replays will appear here after live sessions.
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Registration Info Section */}
        <div className="mt-16">
          <Card className="bg-gradient-card border-0 shadow-finance-md">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Never Miss a Session</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our webinars cover live market analysis, trading strategies, platform tutorials, and Q&A sessions with industry experts. Registration is free for all students.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary-lighter mx-auto mb-3 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-1 text-foreground">Weekly Sessions</h4>
                  <p className="text-sm text-muted-foreground">Regular live sessions every week</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary-lighter mx-auto mb-3 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-1 text-foreground">Interactive Q&A</h4>
                  <p className="text-sm text-muted-foreground">Ask questions and get expert answers</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary-lighter mx-auto mb-3 flex items-center justify-center">
                    <Play className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-1 text-foreground">Replay Access</h4>
                  <p className="text-sm text-muted-foreground">Watch recordings anytime</p>
                </div>
              </div>
              
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                <ExternalLink className="mr-2 h-5 w-5" />
                Subscribe to Updates
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Webinars;