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
  article: ArticlesProps;
}

const EditModal: React.FC<IModalProps> = ({ isOpen, setIsOpen, article }) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: ArticlesProps) => {
      await api.put(`articles/${article.id}`, {
        title: data.title,
        events: article.events,
        featured: article.featured,
        imageUrl: data.imageUrl,
        launches: article.launches,
        newsSite: data.newsSite,
        publishedAt: article.publishedAt,
        summary: data.summary,
        url: data.url,
      });
      setIsOpen();
    },
    [setIsOpen, article]
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={article}>
        <h1>Editar Artigo</h1>
        <Input name="title" placeholder="Title" />
        <Input name="url" placeholder="URL" />
        <Input name="imageUrl" placeholder="URL da Imagem" />
        <Input name="newsSite" placeholder="Origem" />
        <Input name="summary" placeholder="Resumo" />
        <button type="submit" data-testid="edit-food-button">
          <div className="text">Salvar Artigo</div>
          <div className="icon">
            <BiCheck size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default EditModal;
