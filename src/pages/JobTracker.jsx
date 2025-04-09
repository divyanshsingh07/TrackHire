import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import { Plus, Search, Filter } from "lucide-react";

const JobTracker = () => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      company: "Tech Corp",
      position: "Frontend Developer",
      status: "Applied",
      date: "2024-03-15",
      notes: "Applied through LinkedIn",
    },
    {
      id: 2,
      company: "Design Studio",
      position: "UI/UX Designer",
      status: "Interview",
      date: "2024-03-10",
      notes: "First round interview scheduled",
    },
    {
      id: 3,
      company: "Data Solutions",
      position: "Data Analyst",
      status: "Rejected",
      date: "2024-03-05",
      notes: "Not a good fit for the role",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.position.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || job.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Job Applications Tracker</h1>
        <Button asChild>
          <Link to="/job/new">
            <Plus className="mr-2 h-4 w-4" />
            Add New Application
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Total Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{jobs.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">In Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">
              {jobs.filter((job) => job.status === "Applied" || job.status === "Interview").length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Interview Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">
              {Math.round((jobs.filter((job) => job.status === "Interview").length / jobs.length) * 100)}%
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search jobs..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="Applied">Applied</SelectItem>
            <SelectItem value="Interview">Interview</SelectItem>
            <SelectItem value="Rejected">Rejected</SelectItem>
            <SelectItem value="Offered">Offered</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4">
        {filteredJobs.map((job) => (
          <Card key={job.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">{job.position}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{job.company}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    job.status === "Applied" ? "bg-blue-100 text-blue-800" :
                    job.status === "Interview" ? "bg-yellow-100 text-yellow-800" :
                    job.status === "Rejected" ? "bg-red-100 text-red-800" :
                    "bg-green-100 text-green-800"
                  }`}>
                    {job.status}
                  </span>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to={`/job/${job.id}`}>View Details</Link>
                  </Button>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                <p>Applied on: {new Date(job.date).toLocaleDateString()}</p>
                <p className="mt-2">{job.notes}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default JobTracker; 