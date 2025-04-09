import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import { Search, MapPin, Briefcase, DollarSign, Building2, Calendar, Clock } from "lucide-react";

const BrowseJobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("all");

  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120,000 - $150,000",
      description: "Looking for an experienced frontend developer to join our team...",
      posted: "2 days ago",
      logo: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      title: "Product Designer",
      company: "Design Studio",
      location: "Remote",
      type: "Full-time",
      salary: "$90,000 - $110,000",
      description: "Join our design team to create beautiful user experiences...",
      posted: "1 week ago",
      logo: "https://via.placeholder.com/50",
    },
    {
      id: 3,
      title: "Backend Engineer",
      company: "Data Systems",
      location: "New York, NY",
      type: "Full-time",
      salary: "$130,000 - $160,000",
      description: "Seeking a backend engineer to build scalable systems...",
      posted: "3 days ago",
      logo: "https://via.placeholder.com/50",
    },
  ];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = !location || job.location.toLowerCase().includes(location.toLowerCase());
    const matchesType = jobType === "all" || job.type === jobType;
    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent bg-clip-text">
              Browse Jobs
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Find your next career opportunity</p>
          </div>
          <Button asChild className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
            <Link to="/tracker">
              View My Applications
            </Link>
          </Button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-600 dark:text-indigo-400" />
              <Input
                placeholder="Search jobs..."
                className="pl-10 border-indigo-200 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-600 dark:text-indigo-400" />
              <Input
                placeholder="Location"
                className="pl-10 border-indigo-200 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-400"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <Select value={jobType} onValueChange={setJobType}>
              <SelectTrigger className="border-indigo-200 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-400">
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Full-time">Full-time</SelectItem>
                <SelectItem value="Part-time">Part-time</SelectItem>
                <SelectItem value="Contract">Contract</SelectItem>
                <SelectItem value="Internship">Internship</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-6">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-indigo-100 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 rounded-lg bg-indigo-100 dark:bg-gray-700 flex items-center justify-center">
                      <Building2 className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{job.title}</h3>
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium">{job.company}</p>
                    </div>
                  </div>
                  <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white" asChild>
                    <Link to={`/job/${job.id}`}>Apply Now</Link>
                  </Button>
                </div>
                <div className="mt-4 flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                    <Briefcase className="w-4 h-4" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                    <DollarSign className="w-4 h-4" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{job.posted}</span>
                  </div>
                </div>
                <p className="mt-4 text-gray-700 dark:text-gray-300">{job.description}</p>
                <div className="mt-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full text-xs bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300">
                    React
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300">
                    Node.js
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseJobs; 