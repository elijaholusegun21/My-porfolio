import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'
import React from 'react'
import { cn } from '../lib/utils'
import toast from 'react-hot-toast'

const ContactSection = () => {

  const handleSubmit = async (e) => {
    e.preventDefault()

    const form = e.target

    try {
      const res = await fetch('https://formspree.io/f/mblydvgy', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: new FormData(form),
      })

      if (res.ok) {
        toast.success('Message sent successfully! 🚀', {
          style: {
            background: 'rgba(147, 197, 253, 0.1)',  
            color: '#3b82f6', 
            border: '1px solid #3b82f6',
          },
          iconTheme: {
            primary: '#3b82f6',
            secondary: '#fff',
          },
        })
        form.reset()
      } else {
        toast.error('Failed to send message. Try again!', {
            duration: 2000,
          style: {
            background: '#f87171', 
            color: '#C562AF',
            border: '1px solid #FEC5F6',
          },
        })
      }
    } catch (error) {
        console.error('Submission error:', error);
        toast.error('Network error! Please try again.', {
        style: {
          background: '#f87171',
          color: '#7f1d1d',
          border: '1px solid #b91c1c',
        },
      })
    }
  }

  return (
    <section id='contact' className='py-24 px-4 relative bg-secondary/30'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-4'>
          Get In <span className='text-primary'> Touch</span>
        </h2>
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          Have a new project in mind or want to collaborate? feel free to reach
          out! I'm always open to discussing new ideas, projects, or opportunities.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div className="space-y-8 text-left">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:elijaholusegun21@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    elijaholusegun21@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Telephone</h4>
                  <a
                    href="tel:+2349044356522"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    + (234) 904 435 6522
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Nigeria, Kaduna State</p>
                </div>
              </div>
            </div>

            <div className="pt-8 space-y-2">
              <h4 className="font-medium">Connect With Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/elijah-ashaolu-467b49358"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://www.instagram.com/coderblaq0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                </a>
                <a href="#">
                  <Facebook />
                </a>
              </div>
            </div>
          </div>

          <div className='bg-card p-8 rounded-lg shadow-xs text-left'>
            <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>
            <form
              action="https://formspree.io/f/mblydvgy"
              method='POST'
              className='space-y-6'
              onSubmit={handleSubmit}
            >
              <div className='space-y-4'>
                {/* Name */}
                <div>
                  <label htmlFor="name" className='block text-sm font-medium mb-2'>
                    Your Name
                  </label>
                  <input
                    type="text"
                    name='name'
                    id='name'
                    required
                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                    placeholder='John Peter...'
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className='block text-sm font-medium mb-2'>
                    Your Email
                  </label>
                  <input
                    type="email"
                    name='email'
                    id='email'
                    required
                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                    placeholder='johnpeter@gmail.com'
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className='block text-sm font-medium mb-2'>
                    Your Message
                  </label>
                  <textarea
                    name='message'
                    id='message'
                    required
                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none'
                    placeholder='Hello, I would like to...'
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                className={cn(
                  'cosmic-button w-full flex items-center justify-center gap-2'
                )}
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactSection
