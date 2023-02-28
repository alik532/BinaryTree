import './App.css';
import { useState } from 'react';
import { MyTree } from './BinaryTree';
import Node from './components/Node';
import { cloneDeep } from 'lodash';
import { useEffect } from 'react';

function App() {

  const [tree, setTree] = useState(MyTree)
  console.log(tree)

  function generateNumber() {
    const min = -100;
    const max = 100;
    const num = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(num)
    return num
  }
  

  useEffect(() => {
    const getNewTree = () => {
      tree.add(generateNumber())
      return cloneDeep(tree)
    }
    const addNumberToTree = (event) => {
      if (event.code === 'Space') {
        setTree(getNewTree)
      }
    };
    window.addEventListener('keydown', addNumberToTree);
    return () => {
      window.removeEventListener('keydown', addNumberToTree);
    };
  }, [tree]);

  

  return (
    <div className='App'>
      <Node node={tree.root}/>
    </div>
  )
}

export default App;
