import tags from './tags'

// this is a stack of news, the first here it'll be the first in the page
export default [
    {
        title: "A política do incentivo",
        subtitle: "A política do incentivo define nossa sociedade",
        date: new Date('2023-02-22'),
        tags: [tags.POLITICA, tags.GEOPOLITICA, tags.LIBERALISMO],
        image: "teste.jpeg",
        link: "politica-incentivo",
        component: () => import('./components/PoliticaIncentivo.vue'),
    }
]
