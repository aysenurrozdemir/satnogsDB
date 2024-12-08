export interface DashboardCardDto {
  id?: string;
  name?: string;
  satelliteId?: string;
  transmittersNo?: string;
  dataFrames?: any;
  latestDataTimeStamp?: string;
  latestDataSubmitter?: string;
  flag?: any;
  img?: any;
}

export interface ContributorCardDto {
  id?: string;
  contributorName?: string;
  framesNo?: any;
}
