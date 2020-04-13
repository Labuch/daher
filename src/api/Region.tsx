
export interface IActivity {
  activityCode: string,
  workStations: string[],
}

export interface ISite {
  siteName: string,
  activities: IActivity[],
}

export interface IRegion {
  regionId: number,
  sites: ISite[],
  
}

const dumbdata: IRegion[] = [{
 regionId: 476 as number,
 sites: [
   {
    siteName: 'HUB Saint Nazaire ',
    activities: [
      {
        activityCode: 'A380',
        workStations: ['PTXXXX3749','PTXXXX3653','PTXXX4654']
      },
      {
        activityCode: 'A320',
        workStations: ['PTXXXX3784','PTXXXX3463','PTXXX4654','PTXXXX6736']
      },
    ]
   },
   {
    siteName: 'HUB Montparnass ',
    activities: [
      {
        activityCode: 'A350',
        workStations: ['PTXXXX3784','PTXXXX3463','PTXXX4654']
      },
    ]
   }

 ]
}
];


export function fetchRegion(regionId: number): IRegion {
  return dumbdata.filter((region: IRegion) => {
    console.log(region.regionId, regionId);
    return region.regionId === (regionId as number);
  })[0];
  ;
}