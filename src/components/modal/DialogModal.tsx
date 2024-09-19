import { Button, Modal } from "antd";

type DialogModalProps = {
  btnTitle: string;
  isModalOpen: boolean;
  handleOk: () => void;
};

const DialogModal: React.FC<DialogModalProps> = ({
  btnTitle,
  isModalOpen,
  handleOk,
}) => {
  return (
    <>
      <Button type="default" style={{ color: "red" }}>
        {btnTitle}
      </Button>
      <Modal open={isModalOpen} onOk={handleOk}>
        <p className="text-center text-red-400 text-xl font-semibold p-5">
          Are you sure you want to deleted this!?
        </p>
      </Modal>
    </>
  );
};

export default DialogModal;
