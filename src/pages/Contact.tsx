
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Upload, Star } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  subject: string;
  message: string;
  photos?: FileList;
}

interface ReviewFormData {
  name: string;
  email: string;
  phone: string;
  positives: string;
  rating: number;
  message: string;
  photos?: FileList;
}

const Contact = () => {
  const { register: registerContact, handleSubmit: handleSubmitContact, reset: resetContact, formState: { errors: contactErrors }, setValue: setContactValue } = useForm<ContactFormData>();
  const { register: registerReview, handleSubmit: handleSubmitReview, reset: resetReview, formState: { errors: reviewErrors }, setValue: setReviewValue } = useForm<ReviewFormData>();
  const { toast } = useToast();
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);

  const onSubmitContact = async (data: ContactFormData) => {
    setIsSubmittingContact(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Contact form submitted:', data);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    
    resetContact();
    setSelectedService('');
    setIsSubmittingContact(false);
  };

  const onSubmitReview = async (data: ReviewFormData) => {
    setIsSubmittingReview(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Review form submitted:', data);
    toast({
      title: "Review Submitted!",
      description: "Thank you for your review! We appreciate your feedback.",
    });
    
    resetReview();
    setSelectedRating(0);
    setIsSubmittingReview(false);
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

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-poppins text-center">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 font-poppins text-center max-w-3xl mx-auto">
              We're here to help bring your construction and remodeling dreams to life. Contact us today for a free consultation and estimate.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="flex flex-col items-center text-center">
                <div className="bg-total-red p-3 rounded-lg mb-3">
                  <Phone className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 font-poppins mb-1">Phone</h3>
                <a href="tel:+14043866849" className="text-gray-600 font-poppins hover:text-total-red transition-colors">
                  (404) 386-6849
                </a>
                <p className="text-sm text-gray-500 font-poppins">Mon-Fri, 8am - 5pm</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-total-red p-3 rounded-lg mb-3">
                  <Mail className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 font-poppins mb-1">Email</h3>
                <a href="mailto:info@totalconstructionandremodeling.com" className="text-gray-600 font-poppins hover:text-total-red transition-colors text-sm">
                  info@totalconstruction...
                </a>
                <p className="text-sm text-gray-500 font-poppins">Response in 24hrs</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-total-red p-3 rounded-lg mb-3">
                  <MapPin className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 font-poppins mb-1">Address</h3>
                <p className="text-gray-600 font-poppins text-sm">1273 Thomas Rd<br />Decatur, GA 30030</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-total-red p-3 rounded-lg mb-3">
                  <Clock className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 font-poppins mb-1">Hours</h3>
                <p className="text-gray-600 font-poppins text-sm">Mon-Fri: 8am - 5pm</p>
                <p className="text-gray-600 font-poppins text-sm">Sat: 9am - 3pm</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 font-poppins">
                    Tell Us About Your Project
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmitContact(onSubmitContact)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="contact-name" className="font-poppins">Name *</Label>
                        <Input
                          id="contact-name"
                          {...registerContact("name", { required: "Name is required" })}
                          className="mt-1"
                        />
                        {contactErrors.name && (
                          <p className="text-red-500 text-sm mt-1">{contactErrors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="contact-email" className="font-poppins">Email *</Label>
                        <Input
                          id="contact-email"
                          type="email"
                          {...registerContact("email", { 
                            required: "Email is required",
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: "Invalid email address"
                            }
                          })}
                          className="mt-1"
                        />
                        {contactErrors.email && (
                          <p className="text-red-500 text-sm mt-1">{contactErrors.email.message}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="contact-phone" className="font-poppins">Phone</Label>
                        <Input
                          id="contact-phone"
                          type="tel"
                          {...registerContact("phone")}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="contact-service" className="font-poppins">Service Interested In *</Label>
                        <Select 
                          value={selectedService} 
                          onValueChange={(value) => {
                            setSelectedService(value);
                            setContactValue("service", value);
                          }}
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="exterior-construction">Exterior Construction</SelectItem>
                            <SelectItem value="interior-construction">Interior Construction</SelectItem>
                            <SelectItem value="roofing-services">Roofing Services</SelectItem>
                            <SelectItem value="kitchen-remodeling">Kitchen Remodeling</SelectItem>
                            <SelectItem value="bathroom-remodeling">Bathroom Remodeling</SelectItem>
                            <SelectItem value="basement-finishing">Basement Finishing</SelectItem>
                            <SelectItem value="deck-patio">Deck & Patio</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <input type="hidden" {...registerContact("service", { required: "Please select a service" })} />
                        {contactErrors.service && (
                          <p className="text-red-500 text-sm mt-1">{contactErrors.service.message}</p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="contact-subject" className="font-poppins">Subject *</Label>
                      <Input
                        id="contact-subject"
                        {...registerContact("subject", { required: "Subject is required" })}
                        className="mt-1"
                      />
                      {contactErrors.subject && (
                        <p className="text-red-500 text-sm mt-1">{contactErrors.subject.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="contact-message" className="font-poppins">Message *</Label>
                      <Textarea
                        id="contact-message"
                        rows={5}
                        {...registerContact("message", { required: "Message is required" })}
                        className="mt-1"
                        placeholder="Tell us about your project..."
                      />
                      {contactErrors.message && (
                        <p className="text-red-500 text-sm mt-1">{contactErrors.message.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="contact-photos" className="font-poppins">
                        Upload Project Photos (Optional)
                      </Label>
                      <div className="mt-1 flex items-center justify-center w-full">
                        <label
                          htmlFor="contact-photos"
                          className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-8 h-8 mb-2 text-gray-500" />
                            <p className="mb-2 text-sm text-gray-500 font-poppins">
                              <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 font-poppins">PNG, JPG, JPEG (MAX. 10MB each)</p>
                          </div>
                          <Input
                            id="contact-photos"
                            type="file"
                            multiple
                            accept="image/png,image/jpeg,image/jpg"
                            {...registerContact("photos")}
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmittingContact}
                      className="w-full bg-total-red hover:bg-red-600 text-white font-poppins"
                    >
                      {isSubmittingContact ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Review Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 font-poppins">
                    Leave a Review
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmitReview(onSubmitReview)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="review-name" className="font-poppins">Name *</Label>
                        <Input
                          id="review-name"
                          {...registerReview("name", { required: "Name is required" })}
                          className="mt-1"
                        />
                        {reviewErrors.name && (
                          <p className="text-red-500 text-sm mt-1">{reviewErrors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="review-email" className="font-poppins">Email *</Label>
                        <Input
                          id="review-email"
                          type="email"
                          {...registerReview("email", { 
                            required: "Email is required",
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: "Invalid email address"
                            }
                          })}
                          className="mt-1"
                        />
                        {reviewErrors.email && (
                          <p className="text-red-500 text-sm mt-1">{reviewErrors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="review-phone" className="font-poppins">Phone</Label>
                        <Input
                          id="review-phone"
                          type="tel"
                          {...registerReview("phone")}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="review-positives" className="font-poppins">Positives about the Project</Label>
                        <Input
                          id="review-positives"
                          {...registerReview("positives")}
                          className="mt-1"
                          placeholder="What did you love most?"
                        />
                      </div>
                    </div>

                    <div>
                      <Label className="font-poppins">Rating *</Label>
                      <div className="flex gap-2 mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => {
                              setSelectedRating(star);
                              setReviewValue("rating", star);
                            }}
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                            className="focus:outline-none transition-transform hover:scale-110"
                          >
                            <Star
                              size={32}
                              className={
                                star <= (hoverRating || selectedRating)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }
                            />
                          </button>
                        ))}
                      </div>
                      <input type="hidden" {...registerReview("rating", { required: "Please select a rating" })} />
                      {reviewErrors.rating && (
                        <p className="text-red-500 text-sm mt-1">{reviewErrors.rating.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="review-message" className="font-poppins">Your Review *</Label>
                      <Textarea
                        id="review-message"
                        rows={5}
                        {...registerReview("message", { required: "Review message is required" })}
                        className="mt-1"
                        placeholder="Tell us about your experience..."
                      />
                      {reviewErrors.message && (
                        <p className="text-red-500 text-sm mt-1">{reviewErrors.message.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="review-photos" className="font-poppins">
                        Upload Project Photos (Optional)
                      </Label>
                      <div className="mt-1 flex items-center justify-center w-full">
                        <label
                          htmlFor="review-photos"
                          className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-8 h-8 mb-2 text-gray-500" />
                            <p className="mb-2 text-sm text-gray-500 font-poppins">
                              <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 font-poppins">PNG, JPG, JPEG (MAX. 10MB each)</p>
                          </div>
                          <Input
                            id="review-photos"
                            type="file"
                            multiple
                            accept="image/png,image/jpeg,image/jpg"
                            {...registerReview("photos")}
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmittingReview}
                      className="w-full bg-total-red hover:bg-red-600 text-white font-poppins"
                    >
                      {isSubmittingReview ? "Submitting..." : "Submit Review"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
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
