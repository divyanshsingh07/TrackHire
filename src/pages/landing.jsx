import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import { StarIcon, UserCircle } from "lucide-react";
import { LogoRow } from "@/components/logo-row";

const testimonials = [
  {
    name: "Arsh",
    role: "Software Engineer",
    content: "Found my dream job through this platform. The process was smooth and efficient!"
  },
  {
    name: "Divyansh",
    role: "Product Manager",
    content: "Great platform for job seekers. Lots of opportunities and easy to use!"
  },
  {
    name: "Aditya",
    role: "UI/UX Designer",
    content: "The best job portal I've used. Clean interface and great job listings!"
  },
  {
    name: "Sujal",
    role: "Full Stack Developer",
    content: "Successfully landed my ideal role. Highly recommend this platform!"
  },
  {
    name: "Kartik",
    role: "Data Scientist",
    content: "Amazing experience using this platform. Found the perfect job match!"
  }
];

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-8 sm:gap-16 lg:gap-20 py-8 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="flex flex-col items-center justify-center font-extrabold text-3xl sm:text-5xl lg:text-7xl xl:text-8xl tracking-tighter py-4">
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent bg-clip-text">
            Track Your Job Applications
          </span>
          <span className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 mt-4">
            <span className="text-gray-900 dark:text-gray-100">and get</span>
            <span className="text-3xl sm:text-5xl lg:text-7xl xl:text-9xl font-bold text-indigo-600 dark:text-indigo-400">
              HIRED
            </span>
          </span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-4 sm:mt-6 text-sm sm:text-lg lg:text-xl max-w-2xl mx-auto">
          Organize, track, and manage your job applications in one place
        </p>
      </section>

      {/* Logo Row */}
      <LogoRow />

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
        <Link to={"/jobs"} className="w-full sm:w-auto">
          <Button variant="blue" size="xl" className="w-full sm:w-auto">
            Browse Jobs
          </Button>
        </Link>
        <Link to={"/tracker"} className="w-full sm:w-auto">
          <Button variant="destructive" size="xl" className="w-full sm:w-auto">
            Track Applications
          </Button>
        </Link>
      </div>

      {/* Features Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
        <Card className="p-4 sm:p-6">
          <CardContent className="flex flex-col items-center text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Application Tracking</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Keep track of all your job applications in one place</p>
          </CardContent>
        </Card>
        <Card className="p-4 sm:p-6">
          <CardContent className="flex flex-col items-center text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Status Updates</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Monitor the progress of each application</p>
          </CardContent>
        </Card>
        <Card className="p-4 sm:p-6">
          <CardContent className="flex flex-col items-center text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Interview Prep</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Get ready for interviews with our resources</p>
          </CardContent>
        </Card>
      </section>

      {/* Testimonials Section */}
      <section className="py-8 sm:py-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900 dark:text-gray-100">
          Success Stories
        </h2>
        <div className="max-w-5xl mx-auto w-full">
          <Carousel
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
              containScroll: "trimSnaps",
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-[280px] sm:h-[300px] flex flex-col">
                      <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="relative">
                            <UserCircle className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-600 dark:text-indigo-400" />
                            <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                              <StarIcon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                            </div>
                          </div>
                          <div>
                            <h3 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-gray-100">{testimonial.name}</h3>
                            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                          </div>
                        </div>
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 italic flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-gray-200 dark:scrollbar-track-gray-700">
                          &ldquo;{testimonial.content}&rdquo;
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
