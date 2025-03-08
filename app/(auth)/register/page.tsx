"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { register } from "@/service/auth";
import { toast } from "sonner";
import { useTransition, useState } from "react";

export default function RegisterPage() {
  const [isPending, startTransition] = useTransition();
  const [role, setRole] = useState("STUDENT");
  const router = useRouter();

  function onSubmit(formData: FormData) {
    startTransition(async () => {
      try {
        await register(formData);
        router.push("/login");
      } catch (error) {
        toast.error(error instanceof Error ? error.message : "Something went wrong");
      }
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 auth-gradient">
      <Card className="w-full max-w-[400px] auth-card">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Create Account
          </CardTitle>
          <CardDescription className="text-center text-muted-foreground/80">
            Join us by creating your account today
          </CardDescription>
        </CardHeader>
        <form action={onSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                required
                autoComplete="email"
                className="h-11 bg-background/50"
              />
            </div>
            <div className="space-y-2">
              <Input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Full Name"
                required
                className="h-11 bg-background/50"
              />
            </div>
            <div className="space-y-2">
              <select
                name="role"
                className="flex h-11 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                defaultValue="STUDENT"
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="STUDENT">Student</option>
                <option value="FACULTY">Faculty</option>
              </select>
            </div>
            {role === "STUDENT" ? (
              <div className="space-y-2">
                <Input
                  id="studentId"
                  name="studentId"
                  type="text"
                  placeholder="Student ID"
                  required
                  className="h-11 bg-background/50"
                />
              </div>
            ) : (
              <div className="space-y-2">
                <Input
                  id="facultyId"
                  name="facultyId"
                  type="text"
                  placeholder="Faculty ID"
                  required
                  className="h-11 bg-background/50"
                />
              </div>
            )}
            <div className="space-y-2">
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                required
                autoComplete="new-password"
                className="h-11 bg-background/50"
              />
            </div>
            <div className="space-y-2">
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="••••••••"
                required
                autoComplete="new-password"
                className="h-11 bg-background/50"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button
              type="submit"
              className="w-full h-11 text-base font-medium"
              disabled={isPending}
            >
              {isPending ? "Creating account..." : "Create account"}
            </Button>
            <div className="text-sm text-muted-foreground text-center">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Sign in
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
