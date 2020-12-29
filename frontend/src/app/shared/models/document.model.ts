import { Author } from './author.model';

export interface Document{
  title: string;
  shortTitle?: string;
  authors: Array<Author>;
  university?: string;
  course?: string;
  profesor?: string;
  date: Date;
  authorNote?: string;
  type: string;
  owner?: string;
}