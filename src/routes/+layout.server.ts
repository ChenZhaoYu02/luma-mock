import type { LayoutServerLoad } from './$types';
import { config } from '$lib/config';
import { isNonEmptyString } from '$lib/is';

export const load: LayoutServerLoad = async ({ url: { pathname } }) => {
	return {
		pathname,
		prepare: {
			ACCESS_TOKEN: !!isNonEmptyString(config.ACCESS_TOKEN),
			SECRET_KEY: !!isNonEmptyString(config.SECRET_KEY)
		}
	};
};
