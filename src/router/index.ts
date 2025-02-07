import { createRouter, createWebHistory } from 'vue-router'
import { loadLayoutMiddleware } from '@/router/middleware/loadLayout.middleware'
import { RouteNamesEnum } from '@/router/router.types'

const routes = [
	{
		path: '/',
		name: RouteNamesEnum.home,
		component: () => import('@/pages/home.vue'),
		meta: { titleKey: 'Home Page' }
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

router.beforeEach(loadLayoutMiddleware)

export default router
