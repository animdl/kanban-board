export const ssr = false;

// server load function
// useful for fetching data when you need private env vars
export function load() {
    return {
        appName: "Kanban",
        content: "Board"
    }
}