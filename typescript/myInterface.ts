interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string
    
    //startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string, value: number): number
}

//adding more properties without touching the actual part
//reopening of interface
interface User {
     githubToken: string
}

//we can also add features like inheritance
interface Admin extends User {
    role: "admin" | "ta" | "learner" 
}


const priti: User = {dbId: 22, email: "p@p.com", userId: 2211,
    startTrail: () => {
        return "trail started"
    },
    githubToken: "github",
    getCoupon: (name: "priti", off: 30) => {
        return 10;
    }
}

const priti2: Admin = {dbId: 22, email: "p@p.com", userId: 2211,
    startTrail: () => {
        return "trail started"
    },
    role: "admin",
    githubToken: "github",
    getCoupon: (name: "priti", off: 30) => {
        return 10;
    }
}

export{}