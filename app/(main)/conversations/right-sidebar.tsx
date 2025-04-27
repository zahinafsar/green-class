"use client";

import { GoogleAuth } from "./google-auth";
import { useQuery } from "@tanstack/react-query";
import { getClassroomsCourses } from "./actions";

export function RightSidebar() {
  const {
    data: courses,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["classroom-courses"],
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    queryFn: async () => {
      const courses = await getClassroomsCourses();
      return courses;
    },
  });

  if (error) {
    return (
      <div className="w-[350px] flex flex-col items-center justify-center border-l">
        <GoogleAuth />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="w-[350px] flex flex-col items-center justify-center border-l">
        <div>Loading courses...</div>
      </div>
    );
  }

  return (
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
  );
}
