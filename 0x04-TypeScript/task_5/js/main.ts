interface MajorCredits {
    credits: number;
    readonly brand: unique symbol;
}

interface MinorCredits {
    credits: number;
    readonly brand: unique symbol;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return { credits: subject1.credits + subject2.credits } as MinorCredits;
}

const majorSubject1: MajorCredits = { credits: 30, brand: Symbol('MajorCredits') };
const majorSubject2: MajorCredits = { credits: 20, brand: Symbol('MajorCredits') };

const minorSubject1: MinorCredits = { credits: 15, brand: Symbol('MinorCredits') };
const minorSubject2: MinorCredits = { credits: 10, brand: Symbol('MinorCredits') };

const totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
const totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);

console.log(`Total Major Credits: ${totalMajorCredits.credits}`);
console.log(`Total Minor Credits: ${totalMinorCredits.credits}`);
