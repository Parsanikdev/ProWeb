function extractDomain(url: string) {
    // ساخت یک شیء URL از رشته URL
    const urlObj = new URL(url);

    // دسترسی به hostname از شیء URL
    const hostname = urlObj.hostname;

    return hostname;
}

export default extractDomain;