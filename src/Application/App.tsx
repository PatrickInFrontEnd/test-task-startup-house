import React, { Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import LayoutComponent from '../layout'
import ThemeProviderComponent from '../providers/ThemeProvider'
import BreadCrumbProvider from '../providers/BreadCrumbProvider'

const MainPage = lazy(() => import('../pages/MainPage/MainPage.page'))
const PostPage = lazy(() => import('../pages/PostPage/PostPage.page'))

const App: React.FC = () => (
    <HelmetProvider>
        <ThemeProviderComponent>
            <BreadCrumbProvider>
                <LayoutComponent>
                    <Suspense fallback={<h2>Loading the resources...</h2>}>
                        <Switch>
                            <Route exact path="/">
                                <MainPage />
                            </Route>
                            <Route path="/posts/:id">
                                <PostPage />
                            </Route>
                            <Redirect from="*" to="/" />
                        </Switch>
                    </Suspense>
                </LayoutComponent>
            </BreadCrumbProvider>
        </ThemeProviderComponent>
    </HelmetProvider>
)

export default App
