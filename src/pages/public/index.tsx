import { Suspense, useEffect, useRef } from "react";
import { useLocation, useOutlet, useNavigate } from "react-router-dom";
import subRoutes from "routes/public.route";
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import Loader from "components/custom/loader";
import configs from "configs";

export default function PublicPages() {

    const location = useLocation()
    const navigate = useNavigate()
    const hasNavigatedAfterIntro = useRef(false)

    // After intro video (e.g. F5 on any page), always show the main page
    useEffect(() => {
        if (hasNavigatedAfterIntro.current) return
        hasNavigatedAfterIntro.current = true
        if (location.pathname !== configs.path.HOME_PREFIX) {
            navigate(configs.path.HOME_PREFIX, { replace: true })
        }
    }, [location.pathname, navigate])

    const currentOutlet = useOutlet()
    const { nodeRef }: any =
        subRoutes.find((route) => route.path === location.pathname) ?? {}

    return (
        <Suspense fallback={<Loader />}>
            <SwitchTransition>
                <CSSTransition
                    key={location.pathname}
                    nodeRef={nodeRef}
                    timeout={300}
                    classNames="page"
                    unmountOnExit
                >
                    {() => (
                        <div ref={nodeRef} className="page">
                            {currentOutlet}

                        </div>
                    )}
                </CSSTransition>
            </SwitchTransition>
        </Suspense>
    );
}