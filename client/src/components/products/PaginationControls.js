import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const StyledPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledPaginationControls = styled.div`
  width: 100%;
  max-width: 200px;
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .page-button {
    background: none;
    border: none;
  }
  .prev {
    transform: rotate(180deg);
    transform-origin: center;
    color: #f81f56;
    font-size: 1rem;
  }
  .next {
    color: #f81f56;
    font-size: 1rem;
  }
`;

const PaginationControls = ({ onPrev, onNext, page, totalPages }) => {
  return (
    <StyledPaginationContainer>
      <StyledPaginationControls>
        <div>
          <button
            className="page-button"
            disabled={page > 1 ? false : true}
            aria-label="Previous page"
            onClick={onPrev}
          >
            <FontAwesomeIcon className="prev" icon={faPlay} size="2x" />
          </button>
        </div>
        <span>
          Page {page} of {totalPages}
        </span>
        <div>
          <button
            className="page-button"
            disabled={page < totalPages ? false : true}
            aria-label="Next page"
            onClick={onNext}
          >
            <FontAwesomeIcon className="next" icon={faPlay} size="2x" />
          </button>
        </div>
      </StyledPaginationControls>
    </StyledPaginationContainer>
  );
};

export default PaginationControls;
