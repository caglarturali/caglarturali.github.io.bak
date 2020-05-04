import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { files } from './data/_files';

const getRoute = (
  Comp: React.ReactType,
  data: any,
  fileName: string,
): React.FC<RouteComponentProps> => ({ ...rest }) => (
  <Comp data={data} fileName={fileName} {...rest} key={`route-${fileName}`} />
);

const routes = files.map(({ route: { component, data }, name, url }) =>
  getRoute(component, data, name)({ path: url }),
);

export default routes;
