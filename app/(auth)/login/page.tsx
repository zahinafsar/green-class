'use client';

import Link from "next/link";
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
import { login } from "@/service/auth";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { routes } from "@/routes";

export default function LoginPage() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function onSubmit(formData: FormData) {
    startTransition(async () => {
      try {
        await login(formData);
        router.push(routes.conversation.index);
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
            Welcome Back
          </CardTitle>
          <CardDescription className="text-center text-muted-foreground/80">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form action={onSubmit}>
            <div className="space-y-4">
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
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  autoComplete="current-password"
                  className="h-11 bg-background/50"
                />
              </div>
              <Button
                disabled={isPending}
                type="submit"
                className="w-full h-11 text-base font-medium"
              >
                {isPending ? "Signing in..." : "Sign in"}
              </Button>
            </div>
          </form>
          <div className="text-sm text-muted-foreground text-center">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Create one
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
