export class TransmittersDto {
  id?: any;
  data?: any;

  identifier?: string;
  name?: string;
  norad?: string;
  status?: string;
  altNames?: string;
  transmitters?: number;
  followedNorad?: string;
  operator?: string;
  launched?: string;
  website?: string;
  dashboard?: string;
  country?: string;
  url?: string;
  description?: string;
  deployed?: string;
}

export class Column {
  field: string;
  header: string;
}
