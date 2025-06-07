
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', data);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    
    reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-poppins">
              Contact <span className="text-total-red">Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-poppins">
              Ready to start your construction or remodeling project? Get in touch with our team for a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 font-poppins">
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="font-poppins">Name *</Label>
                        <Input
                          id="name"
                          {...register("name", { required: "Name is required" })}
                          className="mt-1"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="email" className="font-poppins">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email", { 
                            required: "Email is required",
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: "Invalid email address"
                            }
                          })}
                          className="mt-1"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="font-poppins">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          {...register("phone")}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject" className="font-poppins">Subject *</Label>
                        <Input
                          id="subject"
                          {...register("subject", { required: "Subject is required" })}
                          className="mt-1"
                        />
                        {errors.subject && (
                          <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="font-poppins">Message *</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        {...register("message", { required: "Message is required" })}
                        className="mt-1"
                        placeholder="Tell us about your project..."
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-total-red hover:bg-red-600 text-white font-poppins"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-poppins">
                  Get in Touch
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8 font-poppins">
                  We're here to help bring your construction and remodeling dreams to life. Contact us today for a free consultation and estimate.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-total-red p-3 rounded-lg">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 font-poppins">Phone</h3>
                    <a href="tel:+14043866849" className="text-gray-600 font-poppins hover:text-total-red transition-colors">
                      (404) 386-6849
                    </a>
                    <p className="text-sm text-gray-500 font-poppins">Available Mon-Fri, 8:00am - 5:00pm</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-total-red p-3 rounded-lg">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 font-poppins">Email</h3>
                    <a href="mailto:info@totalconstructionandremodeling.com" className="text-gray-600 font-poppins hover:text-total-red transition-colors">
                      info@totalconstructionandremodeling.com
                    </a>
                    <p className="text-sm text-gray-500 font-poppins">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-total-red p-3 rounded-lg">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 font-poppins">Address</h3>
                    <p className="text-gray-600 font-poppins">1273 Thomas Rd<br />Decatur, GA 30030</p>
                    <p className="text-sm text-gray-500 font-poppins">Serving Atlanta and surrounding areas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-total-red p-3 rounded-lg">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 font-poppins">Business Hours</h3>
                    <p className="text-gray-600 font-poppins">Monday - Friday: 8:00am - 5:00pm</p>
                    <p className="text-gray-600 font-poppins">Saturday: 9:00am - 3:00pm</p>
                    <p className="text-gray-600 font-poppins">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-poppins">
            Emergency Services Available
          </h2>
          <p className="text-xl text-gray-600 mb-8 font-poppins">
            For urgent construction emergencies, we offer 24/7 emergency services.
          </p>
          <button 
            className="bg-total-red text-white hover:bg-red-600 transition-colors font-syne font-medium text-xl sm:text-2xl whitespace-nowrap px-4 sm:px-6"
            style={{
              width: 'auto',
              minWidth: '220px',
              height: '49px',
              borderRadius: '27px'
            }}
          >
            Emergency Contact
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
