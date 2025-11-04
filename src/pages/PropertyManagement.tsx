import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Building2, CheckCircle, Shield, Clock, Wrench } from "lucide-react";

const consultationSchema = z.object({
  userType: z.enum(["owner", "renter", "vendor"], {
    required_error: "Please select if you're an owner, renter, or vendor",
  }),
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(20),
  propertyAddress: z.string().trim().min(5, "Property address is required").max(200),
  message: z.string().trim().max(1000, "Message must be less than 1000 characters").optional(),
});

type ConsultationFormData = z.infer<typeof consultationSchema>;

const PropertyManagement = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
  });

  const userType = watch("userType");

  const onSubmit = async (data: ConsultationFormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: data.name,
          email: data.email,
          phone: data.phone,
          service: `Property Management - ${data.userType.charAt(0).toUpperCase() + data.userType.slice(1)}`,
          subject: "Property Management Consultation Request",
          message: `Property Address: ${data.propertyAddress}\n\n${data.message || ""}`,
        },
      });

      if (error) throw error;

      toast({
        title: "Consultation Request Sent!",
        description: "We'll contact you within 24 hours to schedule your free consultation.",
      });
      
      reset();
    } catch (error) {
      console.error("Error sending consultation request:", error);
      toast({
        title: "Error",
        description: "Failed to send your request. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-poppins">
                Property <span className="text-logo-red">Management</span> Services
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-poppins">
                Professional maintenance and management for your rental properties in Atlanta and surrounding areas.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12 font-poppins">
              Why Choose Our Property Management Services?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-logo-red/10 rounded-full mb-4">
                  <Building2 className="w-8 h-8 text-logo-red" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins">Full-Service Management</h3>
                <p className="font-poppins text-gray-600">
                  Complete property care from maintenance to tenant relations
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-logo-red/10 rounded-full mb-4">
                  <Clock className="w-8 h-8 text-logo-red" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins">24/7 Support</h3>
                <p className="font-poppins text-gray-600">
                  Emergency maintenance and support available around the clock
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-logo-red/10 rounded-full mb-4">
                  <Wrench className="w-8 h-8 text-logo-red" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins">Expert Maintenance</h3>
                <p className="font-poppins text-gray-600">
                  Licensed professionals for all repairs and improvements
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-logo-red/10 rounded-full mb-4">
                  <Shield className="w-8 h-8 text-logo-red" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins">Transparent Process</h3>
                <p className="font-poppins text-gray-600">
                  Clear communication and regular updates on all work
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation Form Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4 font-poppins">
                Schedule Your Free Consultation
              </h2>
              <p className="font-poppins text-gray-600 text-center mb-8">
                Let's discuss how we can help manage and maintain your property
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* User Type Selection */}
                <div>
                  <Label className="font-syne text-lg mb-4 block">
                    Owner or Renter?
                  </Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <label
                      className={`flex items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        userType === "owner"
                          ? "border-logo-red bg-logo-red/5"
                          : "border-gray-300 hover:border-logo-red/50"
                      }`}
                    >
                      <input
                        type="radio"
                        value="owner"
                        {...register("userType")}
                        className="sr-only"
                      />
                      <span className="font-poppins font-medium">I'm an Owner</span>
                    </label>

                    <label
                      className={`flex items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        userType === "renter"
                          ? "border-logo-red bg-logo-red/5"
                          : "border-gray-300 hover:border-logo-red/50"
                      }`}
                    >
                      <input
                        type="radio"
                        value="renter"
                        {...register("userType")}
                        className="sr-only"
                      />
                      <span className="font-poppins font-medium">I'm a Renter</span>
                    </label>

                    <label
                      className={`flex items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        userType === "vendor"
                          ? "border-logo-red bg-logo-red/5"
                          : "border-gray-300 hover:border-logo-red/50"
                      }`}
                    >
                      <input
                        type="radio"
                        value="vendor"
                        {...register("userType")}
                        className="sr-only"
                      />
                      <span className="font-poppins font-medium">I'm a Vendor</span>
                    </label>
                  </div>
                  {errors.userType && (
                    <p className="text-red-500 text-sm mt-2">{errors.userType.message}</p>
                  )}
                </div>

                {/* Name */}
                <div>
                  <Label htmlFor="name" className="font-poppins">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    {...register("name")}
                    className="mt-2"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="font-poppins">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      className="mt-2"
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone" className="font-poppins">
                      Phone *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      className="mt-2"
                      placeholder="(555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                {/* Property Address */}
                <div>
                  <Label htmlFor="propertyAddress" className="font-poppins">
                    Property Address *
                  </Label>
                  <Input
                    id="propertyAddress"
                    {...register("propertyAddress")}
                    className="mt-2"
                    placeholder="123 Main St, City, State ZIP"
                  />
                  {errors.propertyAddress && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.propertyAddress.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message" className="font-poppins">
                    Additional Information (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    className="mt-2"
                    rows={4}
                    placeholder="Tell us about your property management needs..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-logo-red hover:bg-red-700 text-white font-syne font-bold text-lg py-6"
                >
                  {isSubmitting ? "Sending..." : "Schedule Free Consultation"}
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12 font-poppins">
              What You Get With Our Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Regular property inspections",
                "Preventative maintenance scheduling",
                "Emergency repair coordination",
                "Vendor management and oversight",
                "Detailed maintenance reporting",
                "Tenant communication handling",
                "Cost-effective solutions",
                "Licensed and insured contractors",
                "Quality assurance on all work",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-logo-red flex-shrink-0 mt-1" />
                  <span className="font-poppins text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PropertyManagement;
