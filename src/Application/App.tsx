import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import LayoutComponent from '../layout'
import ThemeProviderComponent from '../providers/ThemeProvider'
import MainPage from '../pages/MainPage/MainPage.page'
import PostPage from '../pages/PostPage/PostPage.page'

const App: React.FC = () => (
    <HelmetProvider>
        <ThemeProviderComponent>
            <LayoutComponent>
                <Switch>
                    <Route exact path="/">
                        <MainPage />
                    </Route>
                    <Route path="/posts/:id">
                        <PostPage />
                    </Route>
                    <Redirect from="*" to="/" />
                </Switch>
            </LayoutComponent>
        </ThemeProviderComponent>
    </HelmetProvider>
)

export default App
