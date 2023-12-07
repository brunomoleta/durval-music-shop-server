
  export interface IAddressForm {
    name: string,
    street: string,
    city: string,
    neihborhood: string,
    number: number ,
    zip: string,
    state: string
    complement: string,
  }

export interface IAddress extends IAddressForm{
    id: number;
    userId: number
  }

  export interface IAddressContext {
    addresses: IAddress[]

    isCreateAddressModalOpen: boolean
    setIsCreateAddressModalOpen: React.Dispatch<React.SetStateAction<boolean>>

    createAddressRequest: (formData: IAddressForm) => Promise<void>
    getAllAddresses: () => Promise<void>
    editAddress(formData: IAddressForm, addressId: number): Promise<void>
    deleteAddress: (address: IAddress) => Promise<void>

    isEditAddressModalOpen: boolean
    setIsEditAddressModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    editingAddress: IAddress | null
    setEditingAddress: React.Dispatch<React.SetStateAction<IAddress | null>>

    isDeleteAddressModalOpen: boolean
    setIsDeleteAddressModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  }

  export interface IAddressCard {
    address: IAddress
  }