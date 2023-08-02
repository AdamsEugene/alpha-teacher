/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { RouteObject, createBrowserRouter } from "react-router-dom";
import K from "./constants";
// import ErrorPage from "../components/views/ErrorPage";

const signupChildren: RouteObject[] = [
  {
    id: K.signup.id,
    path: K.signup.path,
    element: <K.signup.element />,
    errorElement: <h1>signup</h1>,
  },
  {
    id: K.OTP.id,
    path: K.OTP.path,
    element: <K.OTP.element />,
    errorElement: <h1>OTP</h1>,
  },
  {
    id: K.signupForm.id,
    path: K.signupForm.path,
    element: <K.signupForm.element />,
    errorElement: <h1>signupForm</h1>,
  },
];

const dashboardChildren: RouteObject[] = [
  {
    id: K.settings.id,
    path: K.settings.path,
    element: <K.settings.element />,
    errorElement: <h1>settings</h1>,
    handle: {
      crumb: () => "Settings",
    },
  },
  {
    id: K.plan.id,
    path: K.plan.path,
    element: <K.plan.element />,
    errorElement: <h1>plan</h1>,
    handle: {
      crumb: () => "Plane",
    },
  },
  {
    id: K.teach.id,
    path: K.teach.path,
    element: <K.teach.element />,
    errorElement: <h1>teach</h1>,
    handle: {
      crumb: () => "Teach",
    },
  },
  {
    id: K.access.id,
    path: K.access.path,
    element: <K.access.element />,
    errorElement: <h1>access</h1>,
    handle: {
      crumb: () => "Assess",
    },
  },
  {
    id: K.learnOutlet.id,
    path: K.learnOutlet.path,
    element: <K.learnOutlet.element />,
    errorElement: <h1>learnOutlet</h1>,
    handle: {
      crumb: () => "Learn",
    },
    children: [
      {
        id: K.learn.id,
        path: K.learn.path,
        element: <K.learn.element />,
        errorElement: <h1>learn</h1>,
      },
      {
        id: K.creatingSection.id,
        path: K.creatingSection.path,
        element: <K.creatingSection.element />,
        errorElement: <h1>creatingSection</h1>,
        handle: {
          crumb: () => "Section",
        },
      },
      {
        id: K.creatingSectionType.id,
        path: K.creatingSectionType.path,
        element: <K.creatingSectionType.element />,
        errorElement: <h1>creatingSectionType</h1>,
        handle: {
          crumb: () => "Section Type",
        },
      },
      {
        id: K.creatingSectionContent.id,
        path: K.creatingSectionContent.path,
        element: <K.creatingSectionContent.element />,
        errorElement: <h1>creatingSectionContent</h1>,
        handle: {
          crumb: () => "Section Content",
        },
      },
      {
        id: K.creatorCourse.id,
        path: K.creatorCourse.path,
        element: <K.creatorCourse.element />,
        errorElement: <h1>creatorCourse</h1>,
        handle: {
          crumb: () => "Create",
        },
      },
      {
        id: K.myCourses.id,
        path: K.myCourses.path,
        element: <K.myCourses.element />,
        errorElement: <h1>myCourses</h1>,
        handle: {
          crumb: () => "My Courses",
        },
      },
      {
        id: K.coursePreview.id,
        path: K.coursePreview.path,
        element: <K.coursePreview.element />,
        errorElement: <h1>coursePreview</h1>,
        handle: {
          crumb: () => "Course Preview",
        },
      },
      {
        id: K.learning.id,
        path: K.learning.path,
        element: <K.learning.element />,
        loader: async ({ request, params }) => {
          return fetch(`/fake/api/teams/${params.programId}.json`, {
            signal: request.signal,
          });
        },
        errorElement: <h1>Learning</h1>,
        handle: {
          crumb: () => "Learning",
        },
      },
    ],
  },
];

const _startUpRoutes: RouteObject[] = [
  {
    id: K.login.id,
    path: K.login.path,
    element: <K.login.element />,
    errorElement: <h1>login</h1>,
  },
  {
    id: K.signupPage.id,
    path: K.signupPage.path,
    element: <K.signupPage.element />,
    children: signupChildren,
    errorElement: <h1>signupPage</h1>,
  },
  {
    id: K.forgotPassword.id,
    path: K.forgotPassword.path,
    element: <K.forgotPassword.element />,
    errorElement: <h1>forgotPassword</h1>,
  },
  {
    id: K.home.id,
    path: K.home.path,
    element: <K.home.element />,
    children: dashboardChildren,
    errorElement: <h1>resetPassword</h1>,
  },
];

const router = createBrowserRouter(_startUpRoutes);

export default router;
