import NoProductFound from "../../../NoProductFound";

function CartEmpty() {
  return (
    <>
      <NoProductFound
        message="Carrinho vazio"
        subTitle="Você não tem nenhum produto no carrinho ainda."
        isButton={true}
      />
    </>
  );
}

export default CartEmpty;
