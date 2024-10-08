import { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../@/components/ui/alert-dialog";
import { Button } from "../@/components/ui/button";
import { ReactComponent as DeleteIcon } from "../images/icon-delete.svg";

const ModalPopup = () => {
  // const [deleteComment, setDeleteComment] = useState(false);

  // useEffect(() => {
  //   localStorage.setItem('items', JSON.stringify(items));
  // }, [items]);

  const handleDelete = () => {
    console.log('Kaykay is going to be the richest man in the world');
  }

  return (
    <div>
      <AlertDialog className='mb-0'>
        <AlertDialogTrigger className="flex !justify-center !items-center gap-2 text-red-600 font-medium">
            <DeleteIcon/>
            <span className="text-red-600 font-medium">Delete</span>
        </AlertDialogTrigger>
        <AlertDialogContent className="w-3/4 sm:w-fit text-justify rounded">
          <AlertDialogHeader>
            <AlertDialogTitle>Delete comment</AlertDialogTitle>
            <AlertDialogDescription className="">
              Are you sure you want to delete this <br />
              comment? This will remove the comment <br /> and can't be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex justify-between">
            <AlertDialogCancel asChild className="flex-1">
              <Button
                variant="secondary"
                className="bg-[hsl(211,10%,45%)] text-white hover:bg-[hsl(211,10%,35%)] hover:text-white"
              >
                NO, CANCEL
              </Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild className="flex-1" onClick={handleDelete}>
              <Button
                variant="destructive"
                className="bg-red-500 hover:bg-red-400 text-white"
              >
                YES, DELETE
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ModalPopup;
