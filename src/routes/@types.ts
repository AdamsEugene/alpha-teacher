/* eslint-disable @typescript-eslint/no-explicit-any */

// import { SemanticICONS } from "semantic-ui-react";

export interface Route {
  id: string;
  displayName: string;
  icon: string | undefined;
  path: string;
  element: any;
  children: Route[] | null;
}

export interface RouteConstant {
  login: Route;
  signupPage: Route;
  signup: Route;
  OTP: Route;
  signupForm: Route;
  forgotPassword: Route;
  home: Route;
  teach: Route;
  plan: Route;
  access: Route;
  learn: Route;
  learnOutlet: Route;
  creatorCourse: Route;
  creatingSection: Route;
  creatingSectionType: Route;
  creatingSectionContent: Route;
  learning: Route;
  coursePreview: Route;
  myCourses: Route;
  settings: Route;
}
