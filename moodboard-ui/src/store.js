// store.js
import create from 'zustand';
import { Button1, tags as tags1 } from './Buttons/Button1';
import { Button2, tags as tags2 } from './Buttons/Button2';
import { Button3, tags as tags3 } from './Buttons/Button3';
import { Button4, tags as tags4 } from './Buttons/Button4';
import { Dropdown1, tags as tags5 } from './Dropdown/Dropdown1';
import { Dropdown2, tags as tags6 } from './Dropdown/Dropdown2';
import { Dropdown4, tags as tags7 } from './Dropdown/Dropdown4';

const useStore = create(set => ({
    components: [],
    queue: [Button1, Button2, Button3, Button4, Dropdown1, Dropdown2, Dropdown4],
    addComponent: (component) => set(state => ({ components: [...state.components, component] })),
    removeComponent: () => set(state => ({ components: state.components.slice(0, -1) })),
    dequeueComponent: () => set(state => ({ queue: state.queue.slice(1) })),
    enqueueComponent: (component) => set(state => ({ queue: [...state.queue, component] })),
}));

export default useStore; 