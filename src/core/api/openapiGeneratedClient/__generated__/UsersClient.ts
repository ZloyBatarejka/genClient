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

import { CreateUserRequest, User } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

/**
 * No description
 *
 * @tags Users
 * @summary Получить список пользователей
 * @request GET:/users
 */
export const getUsers = <SecurityDataType>(
  http: HttpClient<SecurityDataType>,
  params: RequestParams = {},
) =>
  http.request<User[], any>({
    path: `/users`,
    method: "GET",
    format: "json",
    ...params,
  }); /**
 * No description
 *
 * @tags Users
 * @summary Создать нового пользователя
 * @request POST:/users
 */
export const createUser = <SecurityDataType>(
  http: HttpClient<SecurityDataType>,
  data: CreateUserRequest,
  params: RequestParams = {},
) =>
  http.request<User, any>({
    path: `/users`,
    method: "POST",
    body: data,
    type: ContentType.Json,
    format: "json",
    ...params,
  }); /**
 * No description
 *
 * @tags Users
 * @summary Получить пользователя по ID
 * @request GET:/users/{userId}
 */
export const getUserById = <SecurityDataType>(
  http: HttpClient<SecurityDataType>,
  userId: number,
  params: RequestParams = {},
) =>
  http.request<User, void>({
    path: `/users/${userId}`,
    method: "GET",
    format: "json",
    ...params,
  });
