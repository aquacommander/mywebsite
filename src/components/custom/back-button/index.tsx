import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import configs from "configs";

const ButtonRoot = styled.button`
  position: fixed;
  top: 1.25rem;
  left: 1.25rem;
  z-index: 9999;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.7);
  background: radial-gradient(circle at 0% 0%, rgba(56, 189, 248, 0.18), rgba(15, 23, 42, 0.9));
  color: #e5e7eb;
  cursor: pointer;
  box-shadow:
    0 0 0 1px rgba(15, 23, 42, 0.85),
    0 0 18px rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition:
    transform 0.16s ease-out,
    box-shadow 0.2s ease-out,
    border-color 0.2s ease-out,
    background 0.2s ease-out;

  &:hover {
    transform: translateX(-1px) scale(1.03);
    border-color: rgba(191, 219, 254, 0.95);
    box-shadow:
      0 0 0 1px rgba(15, 23, 42, 0.85),
      0 0 26px rgba(59, 130, 246, 0.7);
    background: radial-gradient(circle at 0% 0%, rgba(129, 140, 248, 0.28), rgba(15, 23, 42, 0.96));
  }

  &:active {
    transform: translateX(-1px) scale(0.97);
    box-shadow:
      0 0 0 1px rgba(15, 23, 42, 0.9),
      0 0 14px rgba(15, 23, 42, 0.95);
  }
`;

const Arrow = styled.span`
  display: inline-block;
  width: 0.9rem;
  height: 0.9rem;
  border-left: 2px solid rgba(226, 232, 240, 0.95);
  border-bottom: 2px solid rgba(226, 232, 240, 0.95);
  transform: rotate(45deg) translateX(1px);
`;

export default function BackButton() {
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(configs.path.HOME_PREFIX);
    }
  }, [navigate]);

  return (
    <ButtonRoot type="button" aria-label="Go back" onClick={onClick}>
      <Arrow />
    </ButtonRoot>
  );
}

