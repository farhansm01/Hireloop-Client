'use server'

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const createJob = async (newJobData) => {
    const res = await fetch(`${baseURL}/api/jobs`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newJobData)
    })

    if (!res.ok) {
        const text = await res.text();
        throw new Error(`Server error: ${res.status} — ${text.slice(0, 100)}`);
    }

   

    return res.json();
}