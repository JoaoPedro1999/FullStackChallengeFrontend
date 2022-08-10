import { ArticlesProps } from "@/pages";
import { FormHandles } from "@unform/core";
import React, { useCallback, useRef } from "react";
import Input from "../Input";
import Modal from "../Modal";
import { Form } from "./styles";

import { BiCheck } from "react-icons/bi";
import api from "@/services/api";

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const NewArticleModal: React.FC<IModalProps> = ({ isOpen, setIsOpen }) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: ArticlesProps) => {
      await api.post(`articles`, {
        title: data.title,
        events: data.events,
        featured: true,
        imageUrl: data.imageUrl,
        launches: data.launches,
        newsSite: data.newsSite,
        publishedAt: new Date(),
        summary: data.summary,
        url: data.url,
      });
      setIsOpen();
    },
    [setIsOpen]
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Artigo</h1>
        <Input name="title" placeholder="Title" />
        <Input name="url" placeholder="URL" />
        <Input name="imageUrl" placeholder="URL da Imagem" />
        <Input name="newsSite" placeholder="Origem" />
        <Input name="summary" placeholder="Resumo" />
        <Input name="events[0].provider" placeholder="Evento " />
        <Input name="launches[0].provider" placeholder="Lançamento" />
        <button type="submit">
          <div className="text">Salvar Artigo</div>
          <div className="icon">
            <BiCheck size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default NewArticleModal;
