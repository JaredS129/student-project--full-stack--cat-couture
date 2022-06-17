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
  .prev:hover {
    cursor: pointer;
    color: #fefcfe;
    transition: 100ms;
  }
  .next {
    color: #f81f56;
    font-size: 1rem;
  }
  .next:hover {
    cursor: pointer;
    color: #fefcfe;
    transition: 100ms;
  }
  .disabled {
    color: #7c499a;
  }
  .disabled:hover {
    cursor: default;
    color: #7c499a;
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
            <FontAwesomeIcon
              className={page > 1 ? "prev" : "prev disabled"}
              icon={faPlay}
              size="2x"
            />
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
            <FontAwesomeIcon
              className={page < totalPages ? "next" : "next disabled"}
              icon={faPlay}
              size="2x"
            />
          </button>
        </div>
      </StyledPaginationControls>
    </StyledPaginationContainer>
  );
};

export default PaginationControls;
