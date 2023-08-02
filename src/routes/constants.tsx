import Home from "../modules";
import Assess from "../modules/assess/Assess";
import ForgotPassword from "../modules/auth/ForgotPassword";
import Login from "../modules/auth/Login";
import OTP from "../modules/auth/OTP";
import SIgnup from "../modules/auth/SIgnup";
import SignupForm from "../modules/auth/SignupForm";
import SignupPage from "../modules/auth/SignupPage";
import CreateCourse from "../modules/learn/CreateCourse";
import CreatingSection from "../modules/learn/CreatingSection";
import Learn from "../modules/learn/Learn";
import LearnOutlet from "../modules/learn/LearnOutlet";
import Preview from "../modules/learn/preview/Preview";
import SectionContent from "../modules/learn/SectionContent";
import SectionContentType from "../modules/learn/SectionContentType";
import Plan from "../modules/plan/Plan";
import Setting from "../modules/settings/Settings";
import Teach from "../modules/teach/Teach";
import { Route, RouteConstant } from "./@types";

const learnOutlet = {
  id: "learnOutlet",
  displayName: "Learn Outlet",
  path: "/learn",
  icon: "slideshare" as string,
  element: LearnOutlet,
  children: null,
};
const creatorCourse = {
  id: "courseCreatorPreview",
  displayName: "Course Creator",
  path: "/learn/create",
  icon: "creative commons" as string,
  element: CreateCourse,
  children: null,
};
const creatingSection = {
  id: "CreatingSection",
  displayName: "Creating",
  path: "/learn/create/section",
  icon: "creative commons" as string,
  element: CreatingSection,
  children: null,
};
const creatingSectionType = {
  id: "CreatingSectionType",
  displayName: "Section Type",
  path: "/learn/create/section/type",
  icon: "creative commons" as string,
  element: SectionContentType,
  children: null,
};
const creatingSectionContent = {
  id: "CreatingSectionSection",
  displayName: "Section Type",
  path: "/learn/create/section/type/:content_type",
  icon: "creative commons" as string,
  element: SectionContent,
  children: null,
};
const myCourses = {
  id: "myCourses",
  displayName: "My Course",
  path: "/learn/my_courses",
  icon: "creative commons" as string,
  element: "MyCourses",
  children: null,
};
const learning = {
  id: "learning",
  displayName: "Learning",
  path: "/learn/:programId",
  icon: "creative commons" as string,
  element: "Learning",
  children: null,
};
const coursePreview = {
  id: "coursePreview",
  displayName: "Course Preview",
  path: "/learn/:courseId/preview",
  icon: "creative commons" as string,
  element: Preview,
  children: null,
};
const settings = {
  id: "settings",
  displayName: "Settings",
  path: "/settings",
  icon: "creative commons" as string,
  element: Setting,
  children: null,
};

const ROUTES_CONSTANTS: RouteConstant = {
  login: {
    id: "LOGIN",
    displayName: "Login",
    path: "/",
    icon: undefined,
    element: Login,
    children: null,
  },
  signupPage: {
    id: "SIGNUP_PAGE",
    displayName: "Signup",
    path: "/signup",
    icon: undefined,
    element: SignupPage,
    children: null,
  },
  signup: {
    id: "SIGNUP",
    displayName: "signup",
    path: "/signup",
    icon: undefined,
    element: SIgnup,
    children: null,
  },
  OTP: {
    id: "OTP",
    displayName: "OTP",
    path: "/signup/otp",
    icon: undefined,
    element: OTP,
    children: null,
  },
  signupForm: {
    id: "SIGNUP_FORM",
    displayName: "SIgnup Form",
    path: "/signup/form",
    icon: undefined,
    element: SignupForm,
    children: null,
  },
  forgotPassword: {
    id: "FORGOT_PASSWORD",
    displayName: "Forgot Password",
    path: "/forgot_password",
    icon: undefined,
    element: ForgotPassword,
    children: null,
  },
  home: {
    id: "DASHBOARD_PAGE",
    displayName: "Dashboard Page",
    path: "",
    icon: "braille",
    element: Home,
    children: null,
  },
  teach: {
    id: "TEACH",
    displayName: "Teach",
    path: "/teach",
    icon: "spinner" as string,
    element: Teach,
    children: null,
  },
  plan: {
    id: "PLAN",
    displayName: "Plan",
    path: "/plan",
    icon: "sitemap" as string,
    element: Plan,
    children: null,
  },
  access: {
    id: "ACCESS",
    displayName: "Access",
    path: "/assess",
    icon: "paperclip" as string,
    element: Assess,
    children: null,
  },
  learn: {
    id: "learn",
    displayName: "Learn",
    path: "/learn",
    icon: "book" as string,
    element: Learn,
    children: null,
  },
  learnOutlet,
  creatorCourse,
  creatingSection,
  creatingSectionType,
  creatingSectionContent,
  learning,
  coursePreview,
  settings,
  myCourses,
};

export const router: Route[] = [
  ROUTES_CONSTANTS.learn,
  ROUTES_CONSTANTS.plan,
  ROUTES_CONSTANTS.teach,
  ROUTES_CONSTANTS.access,
];

export default ROUTES_CONSTANTS;
