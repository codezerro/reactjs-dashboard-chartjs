import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
;<Route path="/pie" element={<PieChart />} />
import {
  HomeChart,
  DoughnutChart,
  PieChart,
  BarChart,
  LineChart,
  TestChart,
} from './components/index'
import { TestUseRef } from './test/index'
import './App.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="flex w-full" style={{ minHeight: '100vh' }}>
          <Sidebar />
          {/* bg-slate-800 */}
          <div className="w-full bg-main-dark-bg xh-screen">
            <Routes>
              <Route path="/" element={<HomeChart />} />
              <Route path="/pie" element={<PieChart />} />
              <Route path="/bar" element={<BarChart />} />
              <Route path="/line" element={<LineChart />} />
              <Route path="/doughnut" element={<DoughnutChart />} />
              <Route path="/test-chart" element={<TestChart />} />
              {/* My Personal Testing Area*/}
              <Route path="/test-useref" element={<TestUseRef />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
