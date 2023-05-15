import './App.css';
import Home from './components/Home';
import Hobby from './components/Hobby';
import Experiences from './components/Experiences';
import { Education, Projects } from './components';
import { Route, Routes } from 'react-router';
import { Layout } from './layout';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='projects' element={<Projects />} />
          <Route path='experience' element={<Experiences />} />
          <Route path='education' element={<Education />} />
          <Route path='hobby' element={<Hobby />} />
        </Route>
      </Routes>

      {/* <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/experience' element={<Experiences />} />
          <Route path='/education' element={<Education />} />
          <Route path='/hobby' element={<Hobby />} />
        </Routes>
      </Layout> */}
    </>
  );
}
