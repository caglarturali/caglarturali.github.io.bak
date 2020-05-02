/**
 * Generic GHButton component.
 */
import React, { useState, useEffect } from 'react';
import { useLocalStorageState } from '../../hooks';
import ButtonLink, { ButtonLinkProps } from '../ButtonLink';

// 10 mins
const TIMEOUT = 10 * 60 * 1000;

export interface GHButtonProps extends ButtonLinkProps {
  resource: {
    endpoint: string;
    attr: string;
  };
}

const GHButton: React.FC<GHButtonProps> = ({
  resource: { attr, endpoint },
  ...btnProps
}) => {
  const [loading, setLoading] = useState(false);
  const [attrCount, setAttrCount] = useLocalStorageState<number | undefined>(
    attr,
    undefined,
  );
  const [lastCheck, setLastCheck] = useLocalStorageState(
    `${attr}_last_check`,
    0,
  );

  useEffect(() => {
    const fetchApi = async (): Promise<any> => {
      const response = await fetch(endpoint);
      const json = await response.json();

      if (json[attr] >= 0) {
        setAttrCount(json[attr]);
      }

      setLastCheck(Date.now());
      setLoading(false);
    };

    if (attrCount === null || Date.now() > lastCheck + TIMEOUT) {
      fetchApi();
    }
  });

  return (
    <ButtonLink
      {...btnProps}
      showCount={!loading && attrCount !== undefined}
      count={attrCount}
    />
  );
};

export default GHButton;
