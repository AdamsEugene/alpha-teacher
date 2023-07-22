/* eslint-disable @typescript-eslint/no-explicit-any */
export interface User {
  id: string;
  name: string;
  email: string;
  role: Partial<UserRole>[];
  token?: string;
}

export enum UserRole {
  teacher = "teacher",
  student = "student",
  parent = "parent",
  school_manager = "school_manager",
}

export interface KeyValuePair {
  [x: string]: any;
}
export type RoleOfUser = { [key in UserRole]: any };

export interface School {
  id: string;
  name: string;
  address: string;
  manager_id: string;
}

export interface Student {
  id: string;
  name: string;
  class_id: string;
  parent_id: string;
}

export interface FieldValuePair {
  field: string;
  value: any;
}
