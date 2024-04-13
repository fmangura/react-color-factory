import { Route, Routes, BrowserRouter, useNavigate } from 'react-router-dom'
import { useState, createContext, useEffect } from 'react'
import './App.css'
import ColorsList from './components/ColorsList'
import ColorForm from './components/ColorForm'
import Color from './components/Color'
import color from './components/Color'


function App() {
  const initial = [
    {
      name: 'red',
      value: 'red'
    },
    {
      name: 'green',
      value: 'green'
    },
    {
      name: 'blue',
      value: 'blue'
    },
  ];

  const [colorList, setColorList] = useState(() => {return JSON.parse(window.localStorage.getItem('colorsObj')) || initial});

  useEffect(() => {
    window.localStorage.setItem('colorsObj', JSON.stringify(colorList));
  },[colorList])

  const addNewColor = (newColor) => {
      setColorList(colorList => [newColor, ...colorList])
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/colors' element={<ColorsList list={colorList}/>}></Route>
          <Route path='/colors/new' element={<ColorForm addNewColor={addNewColor}/>}></Route>
          <Route path='/colors/:color' element={<Color list={colorList}/>}></Route>
          <Route path='*' element={<ColorsList list={colorList}/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
