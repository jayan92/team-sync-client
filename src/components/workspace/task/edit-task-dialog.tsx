import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { TaskType } from "@/types/api.type";
import EditTaskForm from "./edit-task-form";

const EditTaskDialog = ({
  task,
  isOpen,
  onClose,
}: {
  task: TaskType;
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Dialog modal={true} open={isOpen} onOpenChange={onClose}>
      <DialogTitle className="sr-only">Edit task</DialogTitle>
      <DialogDescription className="sr-only">Edit task.</DialogDescription>

      <DialogContent className="sm:max-w-lg max-h-auto my-5 border-0">
        <EditTaskForm task={task} onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
};

export default EditTaskDialog;
