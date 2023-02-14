function useUpdatePhoneNumber(phone: string) {
    if (phone[0] === '8') return phone.replace(/^8/, '+7');
    return phone;
}

export default useUpdatePhoneNumber;
