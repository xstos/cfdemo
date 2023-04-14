export async function onRequestGet({ request, env }) {
	try {
		const defaultData = {
			todos: [
				{
					id: 1,
					name: 'Finish the Cloudflare Workers blog post',
					completed: false
				}
			]
		}
		env.KV.put("data", JSON.stringify(defaultData))
		return new Response("ok");
	} catch (e) {
		return new Response(JSON.stringify(e));
	}
}
