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
    queue: [
        { component: Button1, tags: tags1 },
        { component: Button2, tags: tags2 },
        { component: Button3, tags: tags3 },
        { component: Button4, tags: tags4 },
        { component: Dropdown1, tags: tags5 },
        { component: Dropdown2, tags: tags6 },
        { component: Dropdown4, tags: tags7 },
    ],
    addComponent: (component) => set(state => ({ components: [...state.components, component] })),
    removeComponent: () => set(state => ({ components: state.components.slice(0, -1) })),
    dequeueComponent: () => set(state => ({ queue: state.queue.slice(1) })),
    enqueueComponent: (component) => set(state => ({ queue: [...state.queue, component] })),
}));

export default useStore; 