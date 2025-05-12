"use client";

import { api } from "@/lib/api";
import { GoogleAuth } from "./google-auth";
import { useQuery } from "@tanstack/react-query";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { useAuth } from "@/hooks/auth";
import Image from "next/image";
import { Loader2 } from "lucide-react";

export function RightSidebar() {
  const { user } = useAuth();
  const [classId, setClassId] = useState<string | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const {
    data: courses,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["classroom-courses", user?.id],
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    queryFn: async () => {
      const res = await api("google", {
        method: "GET",
      });
      if (res.ok) return res.json();
      return null;
    },
    enabled: !!user?.id,
    staleTime: 600000,
    gcTime: 600000,
  });

  const { data: course, isLoading: courseLoading } = useQuery({
    queryKey: ["classroom-courses", user?.id, classId],
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    queryFn: async () => {
      const res = await api("google/[courseId]", {
        method: "GET",
        params: {
          courseId: classId ?? "",
        },
      });
      if (res.ok) return res.json();
      return null;
    },
    enabled: !!classId && !!user?.id,
    staleTime: 100000,
    gcTime: 100000,
  });

  if (isLoading) {
    return (
      <div className="w-[350px] flex flex-col items-center justify-center border-l">
        <div>Loading courses...</div>
      </div>
    );
  }

  if (error || !courses) {
    return (
      <div className="w-[350px] flex flex-col items-center justify-center border-l">
        <GoogleAuth />
      </div>
    );
  }

  return (
    <>
      <div className="w-[350px] flex flex-col border-l">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Google Classroom Courses</h2>
          <p className="text-sm mt-1">Your connected courses</p>
        </div>
        <div className="p-4 space-y-3 overflow-y-auto">
          {courses?.map((course) => (
            <div
              key={course.id}
              className="p-4 rounded-xl border hover:shadow-sm transition-all cursor-pointer"
              onClick={() => setClassId(course.id ?? null)}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-medium">
                    {course.name?.charAt(0)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium truncate">{course.name}</h3>
                  {course.section && (
                    <p className="text-sm">Section: {course.section}</p>
                  )}
                  <div className="mt-2 flex flex-wrap gap-2">
                    {course.enrollmentCode && (
                      <span className="text-xs px-2 py-1 rounded-full">
                        Code: {course.enrollmentCode}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Dialog open={!!classId} onOpenChange={() => setClassId(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-primary">
              Course Materials
            </DialogTitle>
            <DialogDescription>
              {courseLoading ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="animate-spin rounded-full h-8 w-8" />
                </div>
              ) : (
                <div className="space-y-8">
                  {course?.courseWorkMaterial?.map((material) => (
                    <div
                      key={material.id}
                      className="border rounded-lg overflow-hidden"
                    >
                      <div className="bg-primary/5 px-4 py-3 border-b">
                        <h3 className="text-lg font-semibold text-primary">
                          {material.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {material.creationTime
                            ? new Date(
                                material.creationTime
                              ).toLocaleDateString()
                            : "No date"}
                        </p>
                      </div>
                      <div className="divide-y">
                        {material.materials?.map((item, index) => (
                          <a
                            key={index}
                            href={
                              item.driveFile?.driveFile?.alternateLink ?? "#"
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-4 hover:bg-primary/5 transition-colors"
                          >
                            {item.driveFile?.driveFile?.thumbnailUrl &&
                            !imageErrors[
                              item.driveFile?.driveFile?.id ?? ""
                            ] ? (
                              <img
                                src={item.driveFile.driveFile.thumbnailUrl}
                                alt={
                                  item.driveFile.driveFile.title ??
                                  "Material thumbnail"
                                }
                                className="w-16 h-16 object-cover rounded-lg border"
                                onError={() => {
                                  const id = item.driveFile?.driveFile?.id;
                                  if (id) handleImageError(id);
                                }}
                              />
                            ) : (
                              <div className="w-16 h-16 rounded-lg border bg-primary/5 flex items-center justify-center">
                                <svg
                                  className="w-8 h-8 text-primary/50"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  />
                                </svg>
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-base truncate">
                                {item.driveFile?.driveFile?.title ?? "Untitled"}
                              </p>
                              <p className="text-sm text-muted-foreground mt-1">
                                {item.driveFile?.driveFile?.alternateLink
                                  ? "Click to view"
                                  : "Link not available"}
                              </p>
                            </div>
                            <svg
                              className="w-5 h-5 text-primary/50"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
