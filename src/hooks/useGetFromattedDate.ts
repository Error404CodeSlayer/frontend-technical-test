const useGetFormattedDate = (timestamp: number): string => {
    const timestampDate = new Date(timestamp);
    const formattedDate = `${timestampDate.toLocaleDateString()} ${timestampDate.getHours()}:${timestampDate.getMinutes()}`;
    
    return formattedDate;
}

export default useGetFormattedDate;