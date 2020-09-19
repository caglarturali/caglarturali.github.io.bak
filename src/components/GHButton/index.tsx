/**
 * Generic GHButton component.
 */
import React, { useState, useEffect } from 'react';
import { useLocalStorageState } from '../../hooks';
import ButtonLink, { ButtonLinkProps } from '../ButtonLink';
import { LocalCache } from '../../models';
import { buildRecordObject, isRecordUsable } from '../../utils';

export interface GHButtonProps extends ButtonLinkProps {
  resource: {
    endpoint: string;
    attr: string;
  };
}

const GHButton: React.FC<GHButtonProps & LocalCache.Prop> = ({
  resource: { attr, endpoint },
  timeout = 10,
  ...btnProps
}) => {
  const [loading, setLoading] = useState(false);
  const [attrCountRecord, setAttrCountRecord] = useLocalStorageState<
    number | undefined
  >(attr, undefined);

  useEffect(() => {
    const fetchApi = async (): Promise<any> => {
      const response = await fetch(endpoint);
      const json = await response.json();

      if (json[attr] >= 0) {
        setAttrCountRecord(buildRecordObject(json[attr]));
      }

      setLoading(false);
    };

    if (!isRecordUsable(attrCountRecord, timeout)) {
      fetchApi();
    }
  });

  return (
    <ButtonLink
      {...btnProps}
      showCount={!loading && attrCountRecord !== undefined}
      count={attrCountRecord.data}
    />
  );
};

export default GHButton;
