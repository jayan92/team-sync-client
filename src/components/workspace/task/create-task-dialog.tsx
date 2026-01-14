import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import CreateTaskForm from "./create-task-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

const CreateTaskDialog = (props: { projectId?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Dialog modal={true} open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger>
          <Button>
            <Plus />
            New Task
          </Button>
        </DialogTrigger>

        <DialogTitle className="sr-only">Create task</DialogTitle>
        <DialogDescription className="sr-only">
          Create a new task.
        </DialogDescription>
        <DialogContent className="sm:max-w-lg max-h-auto my-5 border-0">
          <CreateTaskForm projectId={props.projectId} onClose={onClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateTaskDialog;
