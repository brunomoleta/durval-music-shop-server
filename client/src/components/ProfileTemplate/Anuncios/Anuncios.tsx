import NotFound from "../../../assets/Nothing-in-Cart.svg";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { useEffect } from "react";
import CreateAnuncioForm from "./Form/CreateAnuncioForm/CreateAnuncioForm.tsx";
import AnuncioCard from "./AnuncioCard/AnuncioCard.tsx";
import {IAnuncioContext} from "../../../types/anuncios";
import {useUserContext} from "../../../providers/UserContext";
import {IUserContext} from "../../../types/user";
import {useAnuncioContext} from "../../../providers/UserContext/AnuncioProvider.tsx";
import {H1, H2} from "../../../styled-components/Typography.styles.ts";
import Loader from "../../Loader";
import Modal from "../../Modal";
import {AddProfileItemBtn, ProfileContent, ResumeHeader} from "../../../styled-components/ProfileItem.style.ts";


function Anuncios() {
  const {
    anuncios,
    isCreateAnuncioModalOpen,
    setIsCreateAnuncioModalOpen,
    getAllAnuncios,
  } = useAnuncioContext() as IAnuncioContext;
  const { isLoading } = useUserContext() as IUserContext;

  useEffect(() => {
    getAllAnuncios();
  }, []);

  return (
    <>
      <ResumeHeader>
        <H1>ANÚNCIOS</H1>
          <AddProfileItemBtn onClick={() => setIsCreateAnuncioModalOpen(true)}>
          <MdOutlineAddCircleOutline size="18" />
          Anúncio
          </AddProfileItemBtn>
      </ResumeHeader>

      <div>
        {isLoading ? (
          <Loader />
        ) : anuncios.length > 0 ? (
          <ProfileContent>
            {anuncios.map((anuncio) => (
              <AnuncioCard key={anuncio.id} anuncio={anuncio} />
            ))}
          </ProfileContent>
        ) : (
          <>
            <img alt="" src={NotFound} style={{ alignSelf: "center" }} />
            <H2>Nenhum produto anunciado.</H2>
          </>
        )}
      </div>

      <Modal
        open={isCreateAnuncioModalOpen}
        onOpenChange={setIsCreateAnuncioModalOpen}
        element={CreateAnuncioForm()}
      />
    </>
  );
}

export default Anuncios;
