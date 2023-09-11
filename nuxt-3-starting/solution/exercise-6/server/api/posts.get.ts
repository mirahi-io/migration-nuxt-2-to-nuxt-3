import {posts} from "~/server/data";
import {createRouter, defineEventHandler, useBase} from 'h3'

const router = createRouter()

router.get('/', defineEventHandler(() => posts))
router.get('/[id]', defineEventHandler((event) => {
    const id = getRouterParam(event, 'id')
    const post = posts.find(p => p.id === id);
    return post
}))

export default useBase('/api/posts', router.handler)
