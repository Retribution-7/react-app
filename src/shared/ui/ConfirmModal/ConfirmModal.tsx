import { useEffect, useRef } from 'react';

type ConfirmModalProps = {
  isOpen: boolean;
  title: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export const ConfirmModal = ({
  isOpen,
  title,
  description,
  confirmText = 'Подтвердить',
  cancelText = 'Отмена',
  onConfirm,
  onCancel,
}: ConfirmModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (isOpen && !dialog.open) {
      dialog.showModal();
    }

    if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  const handleCancel = () => {
    onCancel();
  };

  const handleDialogCancel = (event: React.SyntheticEvent<HTMLDialogElement>) => {
    event.preventDefault();
    handleCancel();
  };

  const handleConfirm = () => {
    onConfirm();
  };

  return (
    <dialog
      ref={dialogRef}
      onCancel={handleDialogCancel}
      className="m-auto w-[calc(100%-32px)] max-w-[480px] rounded-2xl border border-primary/10 bg-surface p-0 text-primary shadow-2xl backdrop:bg-black/50"
    >
      <div className="p-6 sm:p-8">
        <h2 className="font-sans text-[24px] font-normal leading-[1.2]">{title}</h2>

        {description && (
          <p className="mt-3 font-sans text-[16px] leading-[1.5] text-text-third">{description}</p>
        )}

        <div className="mt-8 flex justify-end gap-3">
          <button
            type="button"
            onClick={handleCancel}
            className="rounded-full border border-primary/20 px-5 py-3 font-sans text-[15px] text-primary transition-colors hover:bg-bg-first"
          >
            {cancelText}
          </button>

          <button
            type="button"
            onClick={handleConfirm}
            className="rounded-full px-5 py-3 font-sans text-[15px] text-white gradient-icon transition-opacity hover:opacity-90"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </dialog>
  );
};
