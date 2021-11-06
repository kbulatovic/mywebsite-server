import { Knex } from 'knex';

export interface AbstractModelInterface<T = unknown> {
  db: Knex<T>;

  /**
   * Get a single database entry
   */
  get?(id: number): Promise<T>,

  /**
   * Get all entries
   */
  getAll?(): Promise<T[]>,

  /**
   * Create database entity, then return the result
   */
  create?(payload: T): Promise<T>,

  /**
   * Update database entity then return the result
   */
  update?(payload: T): Promise<T>,

  /**
   * Delete database enttity
   */
  delete?(id: number): boolean
}
