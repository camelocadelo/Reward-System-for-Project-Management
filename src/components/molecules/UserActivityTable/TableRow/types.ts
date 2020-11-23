export interface TableRowProps {
  readonly key: any;
  readonly projectName: string;
  readonly eventType: string;
  readonly eventBonus: string;
  readonly timestamp: string;
  readonly comment?: string;
  readonly gitType?: string;
  readonly metaData?: string;
}
