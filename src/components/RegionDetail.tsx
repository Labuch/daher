import React, { useEffect, useState } from 'react';
import * as Region from '../api/Region';
import styled from 'styled-components';

import { Label } from './DashBoard';
import Collapse, { Li, Puce } from './Collapse';
import { Row } from '../Layout';

interface IProps {
  regionId: number;
}

const DetailContainer = styled.div`
  flex: 1 1 0;
  padding: 10px;
  background-color: white;
  margin-right: 25px;
  box-shadow: 3px 3px 3px #bdbdbd;
`;

function renderActivitity(activity: Region.IActivity) {
  return (
    <Collapse name={activity.activityCode}>
      {activity.workStations.map((workSation: string) => (
        <Li>
          <Row>
            <Puce />
            {workSation}
          </Row>
        </Li>
      ))}
    </Collapse>
  );
}

function renderRegionSite(sites: Region.ISite[]) {
  return sites.map((site: Region.ISite) => {
    return (
      <Collapse name={site.siteName}>
        {site.activities.map((activity: Region.IActivity) =>
          renderActivitity(activity)
        )}
      </Collapse>
    );
  });
}

function RegionDetail(props: IProps) {
  const [region, setRegion] = useState<Region.IRegion | undefined>(undefined);

  const { regionId } = props;
  useEffect(() => {
    async function fetch(_regionId: number) {
      setRegion(undefined);
      const _characters = await Region.fetchRegion(_regionId);
      setRegion(_characters);
    }
    fetch(regionId);
  }, [regionId]);

  if (region === undefined) {
    return <p>Please wait...</p>;
  }
  if (region.sites.length === 0) {
    return <p>No results found :(</p>;
  }
  return (
    <DetailContainer>
      <Row>
        <Label>Role:</Label>
        <div>Qualité</div>
      </Row>
      <p>Données accessibles: </p>
      {renderRegionSite(region.sites)}
    </DetailContainer>
  );
}

export default RegionDetail;
