export type Quiz = {
  id: number;
  question: string;
  desctiprion: string | null;
  answers: Answer[];
  correctAnswer: keyof Answer;
  explanation: string | null;
  tags: Tag[];
  category: Category;
  difficulty: Difficulty;
}
export type Answer = {
  answer_a: string;
  answer_b: string;
  answer_c: string;
  answer_d: string;
  answer_e: string;
  answer_f: string;
}
export type Tag = {
  name: string;
}
export enum Category {
  LINUX = 'linux',
  DOCKER = 'docker',
  DEVOPS = 'devops',
  NETWORKING = 'networking',
  CLOUD = 'cloud',
  PROGRAMMING = 'programming',
  KUBERNETES = 'kubernetes',
}
export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}
