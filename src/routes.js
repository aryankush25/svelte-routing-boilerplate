import Home from './routes/Home.svelte'
import Blog from './routes/Blog.svelte'
import SingleBlog from './routes/SingleBlog.svelte'
import Private from './routes/Private.svelte'
import PageNotExists from './routes/PageNotExists.svelte'

export default [
	{
		path: '/',
		component: Home
	},
	{
		path: '/blog',
		component: Blog
	},
	{
		path: '/blog/:id',
		component: SingleBlog
	},
	{
		path: '/private',
		component: Private,
		auth: true
	},
	{
		path: '*',
		component: PageNotExists
	}
]
