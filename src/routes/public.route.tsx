import configs from "configs";
import { createRef, lazy } from "react";

const HomePage = lazy(() => import('pages/public/home'))
const SkillPages = lazy(() => import('pages/public/skills'))
const OverviewPage = lazy(() => import('pages/public/overview'))
const ProjectsPage = lazy(() => import('pages/public/projects'))
const FrontendProjectPage = lazy(() => import('pages/public/frontend'));
const BackendProjectPage = lazy(() => import('pages/public/backend'));
const AIProjectPage = lazy(() => import('pages/public/ai/index'));
const ContactPage = lazy(() => import('pages/public/contact'));

const subRoutes = [
    {
        path: configs.path.HOME_PREFIX,
        element: <HomePage />,
        nodeRef: createRef()
    },
    {
        path: configs.path.SKILLS_PREFIX,
        element: <SkillPages />,
        nodeRef: createRef()
    },
    {
        path: configs.path.OVERVIEW_PREFIX,
        element: <OverviewPage />,
        nodeRef: createRef()
    },
    {
        path: configs.path.WORKS_PREFIX,
        element: <ProjectsPage />,
        nodeRef: createRef()
    },
    {
        path: configs.path.FRONTEND_PREFIX,
        element: <FrontendProjectPage />,
        nodeRef: createRef()
    },
    {
        path: configs.path.BACKEND_PREFIX,
        element: <BackendProjectPage />,
        nodeRef: createRef()
    },
    {
        path: configs.path.AI_PREFIX,
        element: <AIProjectPage />,
        nodeRef: createRef()
    },
    {
        path: configs.path.CONTACT_PREFIX,
        element: <ContactPage />,
        nodeRef: createRef()
    }
]

export default subRoutes;