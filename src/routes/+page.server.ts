import { bwish } from '$db/tutorials';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function () {
	const datas = await bwish
		.find({}, { limit: 50, projection: { _id: 0, data : {name: 1, comment: 1,  } }})
		.toArray();
	console.log(datas);
	return {
		bwish: datas
	};
};
