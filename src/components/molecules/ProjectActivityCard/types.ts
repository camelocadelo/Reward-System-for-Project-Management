export interface ProjectActivityCardProps {
  readonly eventType: string;
  readonly username: string;
  readonly timestamp: string;
  readonly eventBonus: string;
  readonly gitType?: string;
  readonly gitMeta?: string;
  readonly message?: string;
}
