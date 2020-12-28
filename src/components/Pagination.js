import React from "react";

function Pagination(props) {
    const {onLeftClick,onRightClick,page,totalPages} = props;
    return (
      
    <>
      <div className="pagination-container">
          <button onClick={onLeftClick}>
            <p>◁ </p>
          </button>
          <div>{page} de {totalPages}</div>
          <button onClick={onRightClick}><p>▷</p></button>
      </div>
    </>
  );
}

export default Pagination;
