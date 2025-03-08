"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { PenSquare } from "lucide-react";

interface CreateSectionModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateSectionModal({ isOpen, onOpenChange }: CreateSectionModalProps) {
  const [batchName, setBatchName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [sectionName, setSectionName] = useState("");

  const handleCreateSection = () => {
    // Validate form fields
    if (!batchName.trim() || !courseName.trim() || !sectionName.trim()) {
      alert("Please fill in all fields");
      return;
    }
    
    // In a real application, you would make an API call to create the section
    console.log("Creating section:", { batchName, courseName, sectionName });
    
    // Reset form fields
    setBatchName("");
    setCourseName("");
    setSectionName("");
    onOpenChange(false);
    
    // Show success message or notification
    alert("Section created successfully!");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
          <PenSquare className="h-4 w-4" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Section</DialogTitle>
          <DialogDescription>
            Fill in the details to create a new section.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="batch" className="text-right">
              Batch
            </Label>
            <Input
              id="batch"
              placeholder="Enter batch name"
              className="col-span-3"
              value={batchName}
              onChange={(e) => setBatchName(e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="course" className="text-right">
              Course
            </Label>
            <Input
              id="course"
              placeholder="Enter course name"
              className="col-span-3"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="section" className="text-right">
              Section
            </Label>
            <Input
              id="section"
              placeholder="Enter section name"
              className="col-span-3"
              value={sectionName}
              onChange={(e) => setSectionName(e.target.value)}
              required
            />
          </div>
        </div>
        <DialogFooter>
          <Button 
            onClick={() => onOpenChange(false)}
            variant="outline"
            className="mr-2"
          >
            Cancel
          </Button>
          <Button onClick={handleCreateSection}>
            Create Section
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
} 