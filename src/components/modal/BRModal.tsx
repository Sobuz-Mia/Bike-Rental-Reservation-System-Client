import { Modal } from "antd";
import { ReactNode } from "react";

type BRModalProps = {
  title?: string;
  modalOpen: boolean;
  onCancel: () => void;
  width?: number;
  closeIcon: boolean;
  children: ReactNode;
};

const BRModal: React.FC<BRModalProps> = ({
  modalOpen,
  onCancel,
  width,
  children,
  title,
  closeIcon,
}) => {
  return (
    <>
      <Modal
        title={<h1 className="text-center p-3">{title}</h1>}
        closeIcon={closeIcon}
        width={width}
        footer={null}
        onCancel={onCancel}
        open={modalOpen}
      >
        {children}
      </Modal>
    </>
  );
};

export default BRModal;
