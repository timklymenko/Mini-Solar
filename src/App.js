// @flow
import React, { Suspense, lazy } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import CenterText from './components/CenterText'
import Header from './components/importedComponents/CompleteHeader'

// Lazy loading
const HomeMS = lazy(() => import('./components/importedComponents/HomePage'))
const Construction = lazy(() => import('./pages/Battery.js'))
const LiveData = lazy(() => import('./pages/LiveData.js'))

const Container = styled.div`
  margin: auto;
  /* width: 60%; */
  padding: 10px;
`

/**
 * Use Route component prop if URL information is required (e.g. Home)
 * location, math, and history props (see react-router-dom docs for more details)
 * Otherwise, use normal child structure
 */

export default function App() {
  return (
    <Router>
      <Header />
      <Container>
        {/* <Header /> */}
        <Suspense fallback={<CenterText text="Loading ... " />}>
          <Switch>
            {/* <Route path="/home" component={Home} /> */}
            {/* <Route path="/home" component={HomeMS} /> */}
            <Route path="/home" component={HomeMS} />
            <Route path="/construction" component={Construction} />
            <Route path="/live-data" component={LiveData} />
          </Switch>
        </Suspense>
      </Container>
    </Router>
  )
}
