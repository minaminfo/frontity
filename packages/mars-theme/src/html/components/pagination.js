import React from "react";
import { connect } from "frontity";
import Link from "./link";

const Pages = ({ state, actions }) => {
  const { totalPages } = state.source.data(state.router.path);
  const isNextPage = state.router.page < totalPages;
  const isPreviousPage = state.router.page > 1;

  // Fetch the next page if it hasn't been fetched yet.
  if (state.router.page < totalPages)
    actions.source.fetch({
      path: state.router.path,
      page: state.router.page + 1
    });

  return (
    <div>
      {isPreviousPage && (
        <Link path={state.router.path} page={state.router.page - 1}>
          Previous
        </Link>
      )}
      {isPreviousPage && isNextPage && " - "}
      {isNextPage && (
        <Link path={state.router.path} page={state.router.page + 1}>
          Next
        </Link>
      )}
    </div>
  );
};

export default connect(Pages);
