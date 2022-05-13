import { FC, useRef, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";

import { useCart } from "../../../core/contexts";

import Styled from "./case-box.styles";
import type { CaseBoxProps } from "./case-box.types";

const CaseBox: FC<CaseBoxProps> = ({ isOpen, openSetter, caseData }) => {
  const modalRef = useRef(null);

  const { cartValue, changeCartValue } = useCart();

  const escapeDownHandler = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      openSetter(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", escapeDownHandler);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("keydown", escapeDownHandler);
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  useEffect(() => {
    changeCartValue(cartValue + (caseData?.price as number));
  }, [caseData]);

  return createPortal(
    <Styled.FadeBox
      $isShowInitial={false}
      $shouldRender={isOpen}
      $animationDuration={200}
    >
      <Styled.Overlay onClick={() => openSetter(false)} />

      <Styled.ModalWrapper>
        <Styled.Modal ref={modalRef} aria-modal>
          <Styled.Container>
            <Styled.CloseButton
              onClick={() => {
                openSetter(false);
              }}
            />
            <Styled.ModalBody>
              <Styled.Case>
                <Styled.Image>
                  <img src={caseData?.icon} alt={caseData?.title} />
                </Styled.Image>

                <Styled.Name>{caseData?.fullTitle}</Styled.Name>

                <Styled.Description>{caseData?.subtitle}</Styled.Description>

                <Styled.Price>{caseData?.price}</Styled.Price>
              </Styled.Case>
            </Styled.ModalBody>
          </Styled.Container>
        </Styled.Modal>
      </Styled.ModalWrapper>
    </Styled.FadeBox>,
    document.getElementById("root") as Element
  );
};

export default CaseBox;
