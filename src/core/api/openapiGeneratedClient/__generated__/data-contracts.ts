/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface User {
  /**
   * @format int64
   * @example 1
   */
  id: number;
  /** @example "Иван Иванов" */
  name: string;
  /**
   * @format email
   * @example "ivan@example.com"
   */
  email: string;
  /** @format date-time */
  createdAt?: string;
}

export interface CreateUserRequest {
  /**
   * Имя пользователя
   * @example "Иван Иванов"
   */
  name: string;
  /**
   * Email пользователя
   * @format email
   * @example "ivan@example.com"
   */
  email: string;
}
