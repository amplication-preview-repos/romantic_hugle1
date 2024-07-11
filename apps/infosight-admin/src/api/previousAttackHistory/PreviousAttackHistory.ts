export type PreviousAttackHistory = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  attackType: string | null;
  description: string | null;
  date: Date | null;
};
