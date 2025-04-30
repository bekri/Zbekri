
import React, { useState } from 'react';
import { Facebook, Github, Instagram, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would normally send the form data to a server
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <footer className="relative bg-futuristic-darkPurple mt-20 pt-20 pb-10 border-t border-futuristic-blue/10">
      <div className="absolute inset-0 grid-bg opacity-5 pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        {/* Contact Form Section */}
        <div className="relative z-10 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-futuristic-blue">Contact Me</h2>
            <p className="text-center text-muted-foreground mb-10">Got a project in mind? Let's discuss how we can bring it to life.</p>
            
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-background border-futuristic-blue/20 focus:border-futuristic-blue/50"
              />
              
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-background border-futuristic-blue/20 focus:border-futuristic-blue/50"
              />
              
              <Input
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="md:col-span-2 bg-background border-futuristic-blue/20 focus:border-futuristic-blue/50"
              />
              
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="md:col-span-2 min-h-[150px] bg-background border-futuristic-blue/20 focus:border-futuristic-blue/50"
              />
              
              <div className="md:col-span-2 flex justify-center">
                <Button type="submit" className="bg-futuristic-blue hover:bg-futuristic-blue/80 text-white font-semibold px-8">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Social Links & Copyright */}
        <div className="border-t border-futuristic-blue/10 pt-10 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <span className="text-xl font-bold font-orbitron text-futuristic-blue mr-3">ZB</span>
            <p className="text-sm text-muted-foreground">© 2025 Zakariae Bekri. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-futuristic-blue transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-futuristic-blue transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-futuristic-blue transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-futuristic-purple transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12h2l8-9 8 9h2M5 12v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7" />
                <path d="M12 10v10" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
