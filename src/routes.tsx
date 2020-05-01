import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { files } from './data/_files';

const getRoute = (
  Comp: React.ReactType,
  data: any,
  index: number,
): React.FC<RouteComponentProps> => ({ ...rest }) => (
  <Comp data={data} {...rest} key={`route-${index}`} />
);

const routes = files.map(({ route: { component, data }, url }, i) =>
  getRoute(component, data, i)({ path: url }),
);

export default routes;
