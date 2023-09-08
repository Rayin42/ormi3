# https://school.programmers.co.kr/learn/courses/30/lessons/72410 연습

new_id = ["...!@BaT#*..y.abcdefghijklm", "z-+.^.", "=.=", "123_.def", "abcdefghijklmn.p"]
result = ["bat.y.abcdefghi", "z--", "aaa", "123_.def", "abcdefghijklmn"]
correct = True

def solution(new_id):
    answer = ''
    # step 1
    new_id = new_id.lower()
    # step 2
    for ch in new_id:
        if ch.isalpha() or ch.isdigit() or ch == '-' or ch == '_' or ch == '.':
            answer += ch
    # step 3
    while '..' in answer:
        answer = answer.replace('..', '.')
    # step 4
    answer = answer.strip('.')
    # step 5
    if len(answer) == 0:
        answer = 'a'
    # step 6
    if len(answer) > 15:
        answer = answer[:15]
    if answer[-1] == '.':
        answer = answer[:-1]
    # step 7
    if len(answer) <= 2:
        answer = answer.ljust(3, answer[-1])
    return answer

for i in range(0, len(result)):
    if solution(new_id[i]) != result[i]:
        correct = False

print(correct)