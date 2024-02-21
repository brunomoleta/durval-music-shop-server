export interface IProductForm {
  name: string;
  description: string | undefined;
  price: number;
  image: string;
  stock: number | string;
  color: string | undefined;
  condition: string;
  categories: string;
  brandName: string;
}

export interface IAnuncio extends IProductForm {
  id: number;
}

export interface IAnuncioContext {
  anuncios: IAnuncio[];

  isCreateAnuncioModalOpen: boolean;
  setIsCreateAnuncioModalOpen: React.Dispatch<React.SetStateAction<boolean>>;

  isEditAnuncioModalOpen: boolean;
  setIsEditAnuncioModalOpen: React.Dispatch<React.SetStateAction<boolean>>;

  isDeleteAnuncioModalOpen: boolean;
  setIsDeleteAnuncioModalOpen: React.Dispatch<React.SetStateAction<boolean>>;

  createAnuncioRequest: (formData: IProductForm) => Promise<void>;
  getAllAnuncios: () => Promise<void>;

  editAnuncio(formData: IProductForm, number: number): Promise<void>;

  deleteAnuncio: (anuncio: IAnuncio) => Promise<void>;

  editingAnuncio: IAnuncio | null;
  setEditingAnuncio: React.Dispatch<React.SetStateAction<IAnuncio | null>>;
}

export interface IAnuncioCard {
  anuncio: IAnuncio;
}
