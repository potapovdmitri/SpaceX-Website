import { atom } from "recoil";

type TypeOfRockets = {
    __typename: string;
    id: string;
    name: string;
    description: string;
    image?: string; 
    key?: number;
}

export const allRockets = atom<TypeOfRockets[]>({
    key: 'allRockets',
    default: [],
});

export const favoriteRockets = atom<TypeOfRockets[]>({
    key: 'favoriteRockets',
    default: [],
});

export const pageTypeState = atom({
    key: 'pageTypeState',
    default: "main",
});

