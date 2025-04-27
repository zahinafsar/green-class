"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Section } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import { createSectionRoom } from "./actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface CreateSectionModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onUpdate: () => void;
}

const initialData: Partial<Section> = {
  batch: "",
  program: "",
  subject: "",
  courseCode: "",
  section: "",
};

export function CreateSectionModal({
  isOpen,
  onOpenChange,
  onUpdate,
}: CreateSectionModalProps) {
  const [formData, setFormData] = useState(initialData);

  const handleUpdate = (field: keyof Section, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const createSectionMutation = useMutation({
    mutationFn: createSectionRoom,
    onSuccess: () => {
      onUpdate();
      setFormData(initialData);
      onOpenChange(false);
      toast.success("Section created successfully!");
    },
    onError: (error) => {
      console.error(error);
      toast.error("Failed to create section. Please try again.");
    },
  });

  const handleSubmit = () => {
    // Validate form fields
    if (Object.values(formData).some((value) => !value)) {
      toast.error("Please fill in all fields");
      return;
    }
    createSectionMutation.mutate(formData);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-primary">
            Join Section
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Input
              placeholder="Batch"
              value={formData.batch}
              onChange={(e) => handleUpdate("batch", e.target.value)}
              className="h-12"
            />
          </div>
          <div className="space-y-2">
            <Select
              value={formData.program}
              onValueChange={(value) => handleUpdate("program", value)}
            >
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Program" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bsc">BSc</SelectItem>
                <SelectItem value="msc">MSc</SelectItem>
                <SelectItem value="bba">BBA</SelectItem>
                <SelectItem value="mba">MBA</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Select
              value={formData.subject}
              onValueChange={(value) => handleUpdate("subject", value)}
            >
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="computer_science">Computer Science</SelectItem>
                <SelectItem value="data_structures">Data Structures</SelectItem>
                <SelectItem value="algorithms">Algorithms</SelectItem>
                <SelectItem value="database_systems">Database Systems</SelectItem>
                <SelectItem value="operating_systems">Operating Systems</SelectItem>
                <SelectItem value="circuit_analysis">Circuit Analysis</SelectItem>
                <SelectItem value="digital_logic_design">Digital Logic Design</SelectItem>
                <SelectItem value="signals_and_systems">Signals and Systems</SelectItem>
                <SelectItem value="principles_of_management">Principles of Management</SelectItem>
                <SelectItem value="marketing_management">Marketing Management</SelectItem>
                <SelectItem value="financial_accounting">Financial Accounting</SelectItem>
                <SelectItem value="business_communication">Business Communication</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Input
              placeholder="Course Code"
              value={formData.courseCode}
              onChange={(e) => handleUpdate("courseCode", e.target.value)}
              className="h-12"
            />
          </div>
          <div className="space-y-2">
            <Input
              placeholder="Section"
              value={formData.section}
              onChange={(e) => handleUpdate("section", e.target.value)}
              className="h-12"
            />
          </div>
        </div>
        <Button
          onClick={handleSubmit}
          disabled={createSectionMutation.isPending}
          className="w-full h-12 bg-primary hover:bg-primary/20"
        >
          {createSectionMutation.isPending ? "Creating..." : "Create Section"}
        </Button>
      </DialogContent>
    </Dialog>
  );
}
