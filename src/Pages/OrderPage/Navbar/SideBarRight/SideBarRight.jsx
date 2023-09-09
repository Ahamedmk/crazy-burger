import { styled } from "styled-components";
import Identification from "./Identification";
import ToggleButton from "../../../../Reusable-ui/ToggleButton";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { theme } from "../../../../theme";
import { useState } from "react";

export default function SideBarRight() {
  const [isModeAdmin, setisModeAdmin] = useState(false)
  const displayToastNotification = () =>{
    if(!isModeAdmin){
      toast.info("Mode admin activé", {
        // icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });  
    }
    setisModeAdmin(!isModeAdmin)
  }
  
  return <SideBarRightStyled>
    <ToggleButton
     labelIfChecked = "Désactiver le mode admin"
     labelIfUnchecked = "Activer le mode admin"
     onToggle={displayToastNotification}
     />
    <Identification />
    <ToastContainer className="toaster" bodyClassName="body-toast" />
    </SideBarRightStyled>;
}
const SideBarRightStyled = styled.div`
  display: flex;
  height: 100%;
  color: grey;
  align-items: center;
  /* border: 1px solid green;  */
  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }

`;
