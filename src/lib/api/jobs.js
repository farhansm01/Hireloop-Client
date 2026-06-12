

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const getCompanyJobs = async (companyId, status = 'active') => {
    const res = await fetch(`${baseURL}/api/jobs?companyId=${companyId}&status=${status}`)


    if (!res.ok) {
        throw new Error(`Failed to fetch jobs: ${res.status}`);
    }


    return res.json();
}