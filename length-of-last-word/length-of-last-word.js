const lengthOfLastWord = (s) => {
    if (!s.length) {
        return 0
    } else if (s.split(' ').pop().length) {
        return s.split(' ').pop().length
    } else {
        return lengthOfLastWord(s.split(' ').slice(0, -1).join(' '))
    }
}