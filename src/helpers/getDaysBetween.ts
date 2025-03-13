function getDaysBetween(date1: Date | undefined, date2: Date | undefined): number | undefined {
    if (!date1 || !date2) return undefined

    const d1 = new Date(date1).getTime();
    const d2 = new Date(date2).getTime();

    // Difference in milliseconds
    const diffTime = Math.abs(d2 - d1);

    // Convert milliseconds to days
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

export default getDaysBetween;