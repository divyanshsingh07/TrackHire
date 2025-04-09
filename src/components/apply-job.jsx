/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "./ui/input";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import useFetch from "@/hooks/use-fetch";
import { applyToJob } from "@/api/apiApplication";
import { BarLoader } from "react-spinners";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const schema = z.object({
  experience: z
    .number()
    .min(0, { message: "Experience must be at least 0" })
    .int(),
  skills: z.string().min(1, { message: "Skills are required" }),
  education: z.enum(["Intermediate", "Graduate", "Post Graduate"], {
    message: "Education is required",
  }),
  currentCompany: z.string().min(1, { message: "Current company is required" }),
  currentRole: z.string().min(1, { message: "Current role is required" }),
  noticePeriod: z.enum(["Immediate", "15 Days", "30 Days", "60 Days", "90 Days"], {
    message: "Notice period is required",
  }),
  expectedSalary: z.string().min(1, { message: "Expected salary is required" }),
  coverLetter: z.string().min(50, { message: "Cover letter must be at least 50 characters" }),
  resume: z
    .any()
    .refine(
      (file) =>
        file[0] &&
        (file[0].type === "application/pdf" ||
          file[0].type === "application/msword"),
      { message: "Only PDF or Word documents are allowed" }
    ),
});

export function ApplyJobDrawer({ user, job, fetchJob, applied = false }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const {
    loading: loadingApply,
    error: errorApply,
    fn: fnApply,
  } = useFetch(applyToJob);

  const onSubmit = (data) => {
    fnApply({
      ...data,
      job_id: job.id,
      candidate_id: user.id,
      name: user.fullName,
      status: "applied",
      resume: data.resume[0],
    }).then(() => {
      fetchJob();
      reset();
    });
  };

  return (
    <Drawer open={applied ? false : undefined}>
      <DrawerTrigger asChild>
        <Button
          size="lg"
          variant={job?.isOpen && !applied ? "blue" : "destructive"}
          disabled={!job?.isOpen || applied}
          className="w-full sm:w-auto"
        >
          {job?.isOpen ? (applied ? "Applied" : "Apply") : "Hiring Closed"}
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[90vh] overflow-y-auto">
        <DrawerHeader>
          <DrawerTitle className="text-xl sm:text-2xl">
            Apply for {job?.title} at {job?.company?.name}
          </DrawerTitle>
          <DrawerDescription>Please fill out the form below to apply for this position</DrawerDescription>
        </DrawerHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 p-4 pb-0"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="experience">Years of Experience</Label>
              <Input
                id="experience"
                type="number"
                placeholder="Years of Experience"
                className="w-full"
                {...register("experience", {
                  valueAsNumber: true,
                })}
              />
              {errors.experience && (
                <p className="text-red-500 text-sm">{errors.experience.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="skills">Skills</Label>
              <Input
                id="skills"
                type="text"
                placeholder="Skills (Comma Separated)"
                className="w-full"
                {...register("skills")}
              />
              {errors.skills && (
                <p className="text-red-500 text-sm">{errors.skills.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="currentCompany">Current Company</Label>
              <Input
                id="currentCompany"
                type="text"
                placeholder="Current Company"
                className="w-full"
                {...register("currentCompany")}
              />
              {errors.currentCompany && (
                <p className="text-red-500 text-sm">{errors.currentCompany.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="currentRole">Current Role</Label>
              <Input
                id="currentRole"
                type="text"
                placeholder="Current Role"
                className="w-full"
                {...register("currentRole")}
              />
              {errors.currentRole && (
                <p className="text-red-500 text-sm">{errors.currentRole.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="noticePeriod">Notice Period</Label>
              <Controller
                name="noticePeriod"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} {...field}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select notice period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Immediate">Immediate</SelectItem>
                      <SelectItem value="15 Days">15 Days</SelectItem>
                      <SelectItem value="30 Days">30 Days</SelectItem>
                      <SelectItem value="60 Days">60 Days</SelectItem>
                      <SelectItem value="90 Days">90 Days</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.noticePeriod && (
                <p className="text-red-500 text-sm">{errors.noticePeriod.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="expectedSalary">Expected Salary</Label>
              <Input
                id="expectedSalary"
                type="text"
                placeholder="Expected Salary"
                className="w-full"
                {...register("expectedSalary")}
              />
              {errors.expectedSalary && (
                <p className="text-red-500 text-sm">{errors.expectedSalary.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="education">Education</Label>
            <Controller
              name="education"
              control={control}
              render={({ field }) => (
                <RadioGroup onValueChange={field.onChange} {...field} className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Intermediate" id="intermediate" />
                    <Label htmlFor="intermediate">Intermediate</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Graduate" id="graduate" />
                    <Label htmlFor="graduate">Graduate</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Post Graduate" id="post-graduate" />
                    <Label htmlFor="post-graduate">Post Graduate</Label>
                  </div>
                </RadioGroup>
              )}
            />
            {errors.education && (
              <p className="text-red-500 text-sm">{errors.education.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="coverLetter">Cover Letter</Label>
            <Textarea
              id="coverLetter"
              placeholder="Write your cover letter here..."
              className="min-h-[100px]"
              {...register("coverLetter")}
            />
            {errors.coverLetter && (
              <p className="text-red-500 text-sm">{errors.coverLetter.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="resume">Resume (PDF or Word)</Label>
            <Input
              id="resume"
              type="file"
              accept=".pdf, .doc, .docx"
              className="w-full file:text-gray-500"
              {...register("resume")}
            />
            {errors.resume && (
              <p className="text-red-500 text-sm">{errors.resume.message}</p>
            )}
          </div>

          {errorApply?.message && (
            <p className="text-red-500 text-sm">{errorApply?.message}</p>
          )}
          {loadingApply && <BarLoader width={"100%"} color="#36d7b7" />}
          
          <div className="flex flex-col sm:flex-row gap-2">
            <Button type="submit" variant="blue" size="lg" className="w-full sm:w-auto">
              Submit Application
            </Button>
            <DrawerClose asChild>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Cancel
              </Button>
            </DrawerClose>
          </div>
        </form>
      </DrawerContent>
    </Drawer>
  );
}
