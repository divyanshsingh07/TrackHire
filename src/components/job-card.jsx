/* eslint-disable react/prop-types */
import { MapPinIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{job.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPinIcon size={16} />
          {job.location}
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          {job.company?.name}
        </p>
      </CardContent>
      <CardFooter>
        <Link to={`/job/${job.id}`}>
          <Button>View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
