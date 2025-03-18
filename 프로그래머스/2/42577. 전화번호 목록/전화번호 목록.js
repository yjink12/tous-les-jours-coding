function solution(phone_book) {
    const sortedPhoneBook = phone_book.sort();
    console.log('sorted', sortedPhoneBook);

    // 인접한 두 번호만 비교하면 됨
    for (let i = 0; i < sortedPhoneBook.length - 1; i++) {
        if (sortedPhoneBook[i+1].startsWith(sortedPhoneBook[i])) {
            return false;
        }
    }
    
    return true;
}