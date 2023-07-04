// useContext
import { useContext } from 'react';
import { SomeContext } from '../components/HookUseContext';

import HookUseState from '../components/HookUseState';
import HookUseEffect from '../components/HookUseEffect';
import HookUseReducer from '../components/HookUseReducer';
import HookUseRef from '../components/HookUseRef';
import HookUseCallback from '../components/HookUseCallback';
import HookUseMemo from '../components/HookUseMemo';
import HookUseLayoutEffect from '../components/HookUseLayoutEffect';
import HookUseImperativeHandle from '../components/HookUseImperativeHandle';
import HookCustom from '../components/HookCustom';

const Home = () => {
    const {contextValue} = useContext(SomeContext);

  return (
    <div>
        <h1>Hooks do React</h1>
        <HookUseState />
        <HookUseReducer />
        <HookUseEffect />
        <h2>useContext</h2>
        <p>Valor do context: {contextValue}</p>
        <hr />
        <HookUseRef />
        <HookUseCallback />
        <HookUseMemo />
        <HookUseLayoutEffect />
        <HookUseImperativeHandle />
        <HookCustom />
    </div>
  )
}

export default Home;