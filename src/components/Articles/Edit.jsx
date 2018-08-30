import React, { Fragment } from "react";

import Form from "../Forms/Form";

import FourOhFour from "../FourOhFour";

// the edit article component
const Edit = ({ article }) => {
  const fields = [
    { name: "title", label: "Title", value: article.title },
    { name: "article", label: "Article", value: article.article },
    { name: "tags", label: "Tags", value: article.tags }
  ];
  return (
    <Fragment>
      <h2>Edit Article</h2>
      <Form className="panel-body" fields={fields} button="Save Changes" />
    </Fragment>
  );
};

export default Edit;

// !article ? <FourOhFour /> :
