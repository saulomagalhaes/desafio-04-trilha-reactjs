import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

type Data = {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
}

type ModalAddFoodProps = {
  handleAddFood: (data: Data) => void;
  isOpen: boolean;
  setIsOpen: () => void;
};

function ModalAddFood(props: ModalAddFoodProps) {
  const { handleAddFood, isOpen, setIsOpen } = props;

  const formRef = useRef(null);

  const handleSubmit = async (data: Data) => {
    handleAddFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}

export default ModalAddFood;
