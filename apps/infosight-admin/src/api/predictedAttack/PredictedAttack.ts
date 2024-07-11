export type PredictedAttack = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  likelihood: number | null;
  attackType: string | null;
};
