import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { files } from './data/_files';

const getRoute = (
  Comp: React.ReactType,
  data: any,
  fileName: string,
  index: number,
): React.FC<RouteComponentProps> => ({ ...rest }) => (
  <Comp data={data} fileName={fileName} {...rest} key={`route-${index}`} />
);

const routes = files.map(({ route: { component, data }, name, url }, i) =>
  getRoute(component, data, name, i)({ path: url }),
);

export default routes;
