import React from 'react';
import { useRouteError } from 'react-router-dom';
import { ReactElement } from 'react';

function ErrorPage(): ReactElement {
  const error: any = useRouteError();

  return (
    <>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </>
  );
}

export default ErrorPage;
