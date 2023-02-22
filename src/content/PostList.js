import tags from './tags'

// this is a stack of news, the first here it'll be the first in the page
export default [
    {
        title: "A política do incentivo",
        subtitle: "A política do incentivo",
        date: new Date('2023-02-22'),
        tags: [tags.POLITICA, tags.LIBERALISMO],
        image: "teste.jpeg",
        link: "teste",
        component: () => import('./components/PoliticaIncentivo.vue'),
    }
]
