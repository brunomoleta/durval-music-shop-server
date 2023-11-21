import {
  CartQuantity,
  CartWrapper,
  IconsWrapper,
  ProfileIcon,
} from "../../../../styled-components/Header.styles.tsx";
import Profile from "../../../../assets/profile.svg";
import Cart from "../../../../assets/Cart.svg";
import { useNavigate } from "react-router-dom";
import {
    useCartContext,
    useUserContext,
} from "../../../../providers/UserContext";

import { fontSize } from "../../../../styled-components/root.ts";
import { IconButton } from "../../../../styled-components/Button.styles.ts";

import { IUserContext } from "../../../../types/user";
import { ICartContext } from "../../../../types/cart";

function IconsHeader() {
  const navigate = useNavigate();

  const { token, setIsLogOpen, isLogOpen } = useUserContext() as IUserContext;
  const { setIsCartModalOpen, isCartModalOpen,cart } = useCartContext() as ICartContext;


  return (
    <IconsWrapper>
      <IconButton
        onClick={() =>
          token && token.length > 0
            ? navigate("/resumo")
            : setIsLogOpen(!isLogOpen)
        }
      >
        <ProfileIcon src={Profile} alt="User Button" />
        <span style={{ fontSize: fontSize.icons }}>CONTA</span>
      </IconButton>
      <CartWrapper>
        <IconButton $bgColor onClick={() => setIsCartModalOpen(!isCartModalOpen)}>
          <ProfileIcon src={Cart} alt="Carrinho" />
          <span style={{ fontSize: fontSize.icons }}>CARRINHO</span>
          <CartQuantity>{cart?.length}</CartQuantity>
        </IconButton>
      </CartWrapper>
    </IconsWrapper>
  );
}

export default IconsHeader;