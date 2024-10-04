import { ReactComponent as EditIcon } from "../images/icon-edit.svg";

const EditButton = () => {
  return (
    <div className="flex justify-center items-center gap-2">
      <EditIcon />
      <p style={{color: 'hsl(238, 40%, 52%)'}} className="font-medium">Edit</p>
    </div>
  );
};

export default EditButton;
