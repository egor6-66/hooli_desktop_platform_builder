import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { useCreateSelectors } from 'shared/hooks';

import { Viewer } from './types';

type State = {
    viewer: Viewer | null;
    setData: (arg: any) => any;
};

const viewerStore = create<State>()(
    devtools(
        immer((set) => ({
            viewer: null,

            setData: (data: Viewer) =>
                set((state) => {
                    state.viewer = data;
                }),
        }))
    )
);

export default useCreateSelectors(viewerStore);
