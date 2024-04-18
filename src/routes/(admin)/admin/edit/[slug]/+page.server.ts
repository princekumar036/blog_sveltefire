// export async function load({ params, url }) {
//     let id = url.searchParams.get('id')
//     return { id }
// }


import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '$lib/firebase';

export async function load({ params, url }) {
    let id = url.searchParams.get('id')
    const docRef = await getDoc(doc(firestore, "posts", id))
    const post = docRef.data()


    return { id, post }
}