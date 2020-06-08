import Store from './store/store';

declare global {
    interface Window {
        s: Store;
    }
}