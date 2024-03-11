import JustValidate from 'just-validate';
import { db } from '../modules/firebase';
import { collection, getDoc, doc } from 'firebase/firestore';

export async function auctionValidate() {
    const collectionRef = collection(db, 'auction');
    const docRef = doc(collectionRef, '0');
    const docSnap = await getDoc(docRef);
    const highestPriceElement = docSnap.data().highestPrice;
    const end = new Date('2024-03-12 00:08:00');

    const validate = new JustValidate('#form', {
        errorLabelStyle: {
            color: '#1D1F21',
        },
    });

    validate.addField('#number', [
        {
            validator: () => {
                const now = new Date();
                if (now > end) {
                    return false;
                }
                return true;
            },
            errorMessage: 'Auction has ended',
        },
        {
            rule: 'required',
            errorMessage: 'Enter your price',
        },
        {
            rule: 'customRegexp',
            value: /^[0-9]+$/,
            errorMessage: 'Enter your price with numbers',
        },
        {
            rule: 'minNumber',
            value: highestPriceElement + 1,
            errorMessage: `Price must be higher than $${highestPriceElement}`,
        },
        {
            rule: 'minLength',
            value: 1,
            errorMessage: 'Minimum 4 characters',
        },
        {
            rule: 'maxLength',
            value: 12,
            errorMessage: 'Maximum 12 characters',
        },
    ]);
}
