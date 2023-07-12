import { Dispatch, SetStateAction, useState } from "react";

type TUseDialogReturn<T> = {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  selected?: T;
  setSelected: (selected: T) => void;
  handleOpen: (selected?: T) => void;
  handleClose: () => void;
};

function useDialog<T>(): TUseDialogReturn<T> {
  const [isVisible, setIsVisible] = useState(false);

  const [selected, setSelected] = useState<T>();

  const handleOpen = (_selected?: T) => {
    setSelected(_selected);
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
    setSelected(undefined);
  };
  return {
    isVisible,
    setIsVisible,
    selected,
    setSelected,
    handleOpen,
    handleClose,
  };
}

export default useDialog;
