export interface MetricImpact {
  adoption: number;
  nps: number;
  revenue: number;
}

export interface Choice {
  id: 'A' | 'B' | 'C' | 'D';
  text: string;
  outcome: string;
  metrics: MetricImpact;
}

export interface Round {
  roundNumber: number;
  scenario: string;
  choices: Choice[];
}

export interface Metrics {
    adoption: number;
    nps: number;
    revenue: number;
}