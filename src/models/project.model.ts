import { Project } from '../interfaces/project.interface';

export const project = (title: string, tag: string, imageUrl: string): Project => {
    return { title, tag, imageUrl };
};
