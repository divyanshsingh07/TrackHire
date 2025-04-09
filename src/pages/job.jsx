import { useEffect } from "react";
import { BarLoader } from "react-spinners";
import MDEditor from "@uiw/react-md-editor";
import { useParams } from "react-router-dom";
import { MapPinIcon } from "lucide-react";

import useFetch from "@/hooks/use-fetch";
import { getSingleJob } from "@/api/apiJobs";

const JobPage = () => {
  const { id } = useParams();

  const {
    loading: loadingJob,
    data: job,
    fn: fnJob,
  } = useFetch(getSingleJob, {
    job_id: id,
  });

  useEffect(() => {
    fnJob();
  }, []);

  if (loadingJob) {
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="gradient-title font-extrabold text-5xl sm:text-7xl">
          {job?.title}
        </h1>
        <div className="flex items-center gap-2 mt-4 text-muted-foreground">
          <MapPinIcon size={16} />
          {job?.location}
        </div>
        <p className="mt-2 text-muted-foreground">{job?.company?.name}</p>
      </div>

      <div className="prose prose-invert max-w-none">
        <MDEditor.Markdown source={job?.description} />
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Requirements</h2>
        <div className="prose prose-invert max-w-none">
          <MDEditor.Markdown source={job?.requirements} />
        </div>
      </div>
    </div>
  );
};

export default JobPage;
