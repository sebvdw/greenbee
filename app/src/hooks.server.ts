import '$lib/supabaseClient'
import { supabaseClient } from '$lib/supabaseClient'
import { getSupabase } from "@supabase/auth-helpers-sveltekit"
import type { Handle } from "@sveltejs/kit"
import { sortUserPlugins } from 'vite'

export const handle: Handle = async ({ event, resolve }) => {
	const { session, supabaseClient } = await getSupabase(event)

	event.locals.sb = supabaseClient
	event.locals.session = session



	return resolve(event);
}