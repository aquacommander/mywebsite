import styled from "styled-components";

export const StaircaseContainer = styled.div`
  width: 100%;
  max-width: 100%;
  min-width: 0;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  min-height: 18rem;
  overflow-x: hidden;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem;
    min-height: 16rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
  }
`;

export const StepWrapper = styled.div<{ $index: number; $stepsCount: number }>`
  position: relative;
  cursor: pointer;
  margin-left: ${({ $index }) => $index * 1.5}rem;
  width: calc(100% - ${({ $index }) => $index * 1.5}rem);
  min-width: 0;

  @media (max-width: 768px) {
    margin-left: ${({ $index }) => $index * 0.75}rem;
    width: calc(100% - ${({ $index }) => $index * 0.75}rem);
  }

  @media (max-width: 480px) {
    margin-left: ${({ $index }) => $index * 0.5}rem;
    width: calc(100% - ${({ $index }) => $index * 0.5}rem);
  }

  @media (max-width: 360px) {
    margin-left: 0;
    width: 100%;
  }
`;

export const StepContent = styled.div<{ $color: string }>`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  background: linear-gradient(
    135deg,
    ${({ $color }) => $color}22 0%,
    ${({ $color }) => $color}11 50%,
    ${({ $color }) => $color}08 100%
  );
  border: 1px solid ${({ $color }) => $color}44;
  transform: skewX(-2deg);
  transform-origin: left center;

  @media (max-width: 768px) {
    padding: 0.6rem 0.85rem;
    transform: skewX(-1deg);
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.75rem;
    transform: none;
  }
`;

export const StepInner = styled.div`
  transform: skewX(2deg);

  @media (max-width: 480px) {
    transform: none;
  }
`;

export const StepHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const StepIcon = styled.span`
  font-size: 1.25rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const StepTitle = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: #ffffff;
  word-break: break-word;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const StepMeta = styled.span`
  font-size: 0.7rem;
  color: #f3f4f6;
  word-break: break-word;

  @media (max-width: 768px) {
    font-size: 0.65rem;
  }

  @media (max-width: 480px) {
    font-size: 0.6rem;
  }
`;

export const AvailableMarker = styled.div<{ $stepsCount: number }>`
  margin-left: ${({ $stepsCount }) => $stepsCount * 1.5}rem;
  min-width: 0;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-left: ${({ $stepsCount }) => $stepsCount * 0.75}rem;
  }

  @media (max-width: 480px) {
    margin-left: ${({ $stepsCount }) => $stepsCount * 0.5}rem;
  }

  @media (max-width: 360px) {
    margin-left: 0;
  }
`;

export const PopoverWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 100%;
  margin-bottom: 8px;
  z-index: 100;
  max-width: min(360px, calc(100vw - 2rem));
  min-width: min(240px, calc(100vw - 2rem));

  @media (max-width: 768px) {
    max-width: min(320px, calc(100vw - 2rem));
    min-width: min(200px, calc(100vw - 2rem));
  }

  @media (max-width: 480px) {
    max-width: min(280px, calc(100vw - 1.5rem));
    min-width: min(180px, calc(100vw - 1.5rem));
    margin-bottom: 6px;
  }

  @media (max-width: 360px) {
    max-width: calc(100vw - 1.5rem);
    min-width: 0;
  }
`;

export const PopoverCard = styled.div<{ $color: string }>`
  background: #111827;
  border-radius: 0.5rem;
  padding: 0.85rem 1rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  border: 1px solid ${({ $color }) => $color}44;
  font-family: "Titillium Web", Inter, sans-serif;
  position: relative;

  @media (max-width: 768px) {
    padding: 0.7rem 0.9rem;
    border-radius: 0.45rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 0.75rem;
    border-radius: 0.4rem;
  }
`;

export const PopoverTitle = styled.div`
  font-weight: 600;
  font-size: 12px;
  margin-bottom: 4px;
  color: #fff;
  word-break: break-word;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

export const PopoverPeriod = styled.div`
  font-size: 10px;
  color: #e5e7eb;
  margin-bottom: 6px;

  @media (max-width: 480px) {
    font-size: 9px;
    margin-bottom: 4px;
  }
`;

export const PopoverLocation = styled.div`
  font-size: 10px;
  color: #e5e7eb;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    font-size: 9px;
    margin-bottom: 4px;
  }
`;

export const PopoverFocus = styled.div`
  font-size: 10px;
  color: #c4b5fd;
  margin-bottom: 6px;
  font-style: italic;

  @media (max-width: 480px) {
    font-size: 9px;
    margin-bottom: 4px;
  }
`;

export const PopoverList = styled.ul`
  margin: 0;
  padding-left: 14px;
  font-size: 11px;
  color: #f3f4f6;
  line-height: 1.4;

  @media (max-width: 480px) {
    font-size: 10px;
    padding-left: 12px;
  }
`;

export const PopoverBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 6px;

  @media (max-width: 480px) {
    gap: 3px;
    margin-top: 4px;
  }
`;

export const Badge = styled.span`
  font-size: 9px;
  padding: 2px 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  color: #e5e7eb;
  border: 1px solid rgba(255, 255, 255, 0.08);

  @media (max-width: 480px) {
    font-size: 8px;
    padding: 1px 5px;
  }
`;

export const ComponentTitle = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const AvailableText = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  color: #84cc16;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;
