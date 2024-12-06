import React from 'react';
import styled from 'styled-components';
import Button from 'components/common/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducerType } from 'modules';
import modalAction from 'modules/Modal';

interface ModalProps {
  title: string;
  content?: string;
  buttonText1?: string;
  buttonText2?: string;
  twoButton?: boolean;
  onClick?: () => void;
}

export default function Modal({
  title,
  content,
  buttonText1,
  buttonText2,
  twoButton = false,
  onClick,
}: ModalProps) {
  const dispatch = useDispatch();
  const { closeModal } = modalAction;

  const handleCloseModal = () => dispatch(closeModal());

  return (
    <ModalContainer>
      <div className="modal">
        <h5>{title}</h5>
        <p>{content}</p>
        {twoButton ? (
          <div className="btnWrap">
            <span className="btn" onClick={handleCloseModal}>
              <Button color="grey" fullWidth>
                {buttonText2 ? buttonText2 : '취소'}
              </Button>
            </span>
            <span className="btn" onClick={onClick}>
              <Button fullWidth>{buttonText1 ? buttonText1 : '확인'}</Button>
            </span>
          </div>
        ) : (
          <div className="btnWrap" onClick={handleCloseModal}>
            <Button fullWidth>{buttonText1 ? buttonText1 : '확인'}</Button>
          </div>
        )}
      </div>
    </ModalContainer>
  );
}

export function ContextModal() {
  const { title, content, buttonText1 } = useSelector(
    (state: RootReducerType) => state.modal,
  );

  return <Modal title={title} content={content} buttonText1={buttonText1} />;
}

const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: ${({ theme }) => theme.color.bgModal};
  display: flex;
  justify-content: center;
  align-items: center;
  .modal {
    width: 500px;
    padding: 50px 30px 30px;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.color.basic300};
    text-align: center;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    h5 {
      margin-bottom: 20px;
      font-weight: 700;
      font-size: 2rem;
      line-height: 2.875rem;
      letter-spacing: -0.9px;
      color: ${({ theme }) => theme.color.basic800};
      word-break: keep-all;
    }
    p {
      padding: 0 40px;
      margin-bottom: 40px;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.5rem;
      letter-spacing: -0.4px;
      color: ${({ theme }) => theme.color.basic700};
      word-break: keep-all;
      white-space: pre-wrap;
    }
    .btnWrap {
      width: 100%;
      .btn {
        width: calc(50% - 8px);
        margin-right: 16px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
  @media screen and (max-width: 548px) {
    padding: 0 24px;
    .modal {
      width: 100%;
      padding: 40px 20px 20px;
    }
  }
`;
