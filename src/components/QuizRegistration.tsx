import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { BookOpen, Award } from "lucide-react";
import { z } from "zod";

const registrationSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(8, "Phone number must be at least 8 characters").max(20, "Phone number must be less than 20 characters"),
  country: z.string().min(1, "Please select your country")
});

export interface UserRegistration {
  name: string;
  email: string;
  phone: string;
  country: string;
}

interface QuizRegistrationProps {
  onRegistrationComplete: (userData: UserRegistration) => void;
}

const countries = [
  "United Arab Emirates", "United States", "United Kingdom", "Canada", "Australia",
  "Germany", "France", "Italy", "Spain", "Netherlands", "Switzerland", "Sweden",
  "Norway", "Denmark", "Belgium", "Austria", "Singapore", "Japan", "South Korea",
  "Hong Kong", "India", "China", "Thailand", "Malaysia", "Philippines", "Indonesia",
  "Brazil", "Mexico", "Argentina", "Chile", "South Africa", "Nigeria", "Egypt",
  "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain", "Jordan", "Lebanon",
  "Turkey", "Russia", "Poland", "Czech Republic", "Hungary", "Romania", "Greece",
  "Portugal", "Ireland", "Finland", "New Zealand", "Israel", "Morocco", "Tunisia"
];

const QuizRegistration = ({ onRegistrationComplete }: QuizRegistrationProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validatedData = registrationSchema.parse(formData);
      
      // Simulate a brief loading state
      await new Promise(resolve => setTimeout(resolve, 800));
      
      onRegistrationComplete(validatedData as UserRegistration);
      
      toast({
        title: "Registration Complete!",
        description: "You can now start the financial literacy quiz.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      }
      
      toast({
        title: "Registration Error",
        description: "Please check your information and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-secondary/20 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-background border-0 shadow-finance-lg">
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-accent mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="h-10 w-10 text-accent-foreground" />
              </div>
              <CardTitle className="text-3xl font-bold text-foreground">
                Financial Literacy Quiz
              </CardTitle>
              <p className="text-muted-foreground">
                Test your trading knowledge and get personalized course recommendations
              </p>
            </CardHeader>
            
            <CardContent>
              <div className="bg-gradient-card rounded-lg p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">
                    Get Your Certificate!
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  Score 80% or above to receive your Financial Literacy Test Completion Certificate directly in your inbox.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Enter your full name"
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="Enter your email"
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="Enter your phone number"
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && (
                      <p className="text-destructive text-sm">{errors.phone}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country">Country *</Label>
                    <Select
                      value={formData.country}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, country: value }))}
                    >
                      <SelectTrigger className={errors.country ? "border-destructive" : ""}>
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.country && (
                      <p className="text-destructive text-sm">{errors.country}</p>
                    )}
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:opacity-90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Starting Quiz..." : "Start Quiz"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default QuizRegistration;